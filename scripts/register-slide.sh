#!/usr/bin/env bash
#
# register-slide.sh — Auto-register a slide into slideRegistry.ts and a deck config.
#
# Usage:
#   ./scripts/register-slide.sh <registry-key> <component-name> [deck-slug]
#
# Examples:
#   ./scripts/register-slide.sh partnerships SlidePartnerships
#   ./scripts/register-slide.sh partnerships SlidePartnerships vc
#
# The deck-slug defaults to "vc" (the only deck in verdaxis-webdeck).

set -euo pipefail

# ── Args ──────────────────────────────────────────────────────────────────────

if [[ $# -lt 2 || $# -gt 3 ]]; then
  echo "Usage: $0 <registry-key> <component-name> [deck-slug]"
  echo ""
  echo "Examples:"
  echo "  $0 partnerships SlidePartnerships"
  echo "  $0 partnerships SlidePartnerships vc"
  exit 1
fi

REGISTRY_KEY="$1"
COMPONENT_NAME="$2"
DECK_SLUG="${3:-vc}"

# ── Paths ─────────────────────────────────────────────────────────────────────

# Resolve project root (parent of scripts/)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

REGISTRY_FILE="$PROJECT_ROOT/lib/slideRegistry.ts"
DECK_FILE="$PROJECT_ROOT/lib/decks/${DECK_SLUG}.ts"
COMPONENT_FILE="$PROJECT_ROOT/components/slides/${COMPONENT_NAME}.tsx"
IMPORT_PATH="@/components/slides/${COMPONENT_NAME}"

# ── Validate ──────────────────────────────────────────────────────────────────

if [[ ! -f "$COMPONENT_FILE" ]]; then
  echo "ERROR: Component file not found: $COMPONENT_FILE"
  exit 1
fi

if [[ ! -f "$REGISTRY_FILE" ]]; then
  echo "ERROR: Registry file not found: $REGISTRY_FILE"
  exit 1
fi

if [[ ! -f "$DECK_FILE" ]]; then
  echo "ERROR: Deck config not found: $DECK_FILE"
  exit 1
fi

# ── Tracking ──────────────────────────────────────────────────────────────────

CHANGES_MADE=0

# ── 1. Add lazy importer to slideImporters ────────────────────────────────────

# Check for the import() pattern — handle both quoted ("key":) and unquoted (key:) property names
if grep -qE "(\"${REGISTRY_KEY}\"|${REGISTRY_KEY}):[[:space:]]+\(\) => import\(" "$REGISTRY_FILE" 2>/dev/null; then
  echo "SKIP: \"${REGISTRY_KEY}\" already exists in slideImporters — already registered."
else
  # Build the importer line — use unquoted key for simple IDs, quoted for hyphenated
  if [[ "$REGISTRY_KEY" == *-* ]]; then
    IMPORTER_LINE="  \"${REGISTRY_KEY}\": () => import(\"${IMPORT_PATH}\"),"
  else
    IMPORTER_LINE="  ${REGISTRY_KEY}: () => import(\"${IMPORT_PATH}\"),"
  fi

  # Insert before the closing `} as const;` of slideImporters
  sed -i "/^} as const;/i\\${IMPORTER_LINE}" "$REGISTRY_FILE"

  echo "OK: Added importer for \"${REGISTRY_KEY}\" to slideImporters."
  CHANGES_MADE=1
fi

# ── 2. Add registry entry to slideRegistry ────────────────────────────────────

# Build entry — use unquoted key for simple IDs, quoted for hyphenated
if [[ "$REGISTRY_KEY" == *-* ]]; then
  REGISTRY_ENTRY="  \"${REGISTRY_KEY}\": { component: lazy(slideImporters[\"${REGISTRY_KEY}\"]) },"
else
  REGISTRY_ENTRY="  ${REGISTRY_KEY}: { component: lazy(slideImporters.${REGISTRY_KEY}) },"
fi

# Check if registry entry already exists — handle quoted/unquoted keys and variable whitespace
if grep -qE "(\"${REGISTRY_KEY}\"|${REGISTRY_KEY}):[[:space:]]+\{ component:" "$REGISTRY_FILE" 2>/dev/null; then
  echo "SKIP: \"${REGISTRY_KEY}\" already exists in slideRegistry — already registered."
else
  # Insert before the closing `};` of slideRegistry (the last `};` in the file)
  # slideImporters closes with `} as const;` and slideRegistry closes with `};`
  sed -i "/^};$/i\\${REGISTRY_ENTRY}" "$REGISTRY_FILE"

  echo "OK: Added registry entry for \"${REGISTRY_KEY}\" to slideRegistry."
  CHANGES_MADE=1
fi

# ── 3. Append slide ID to deck config slides array ───────────────────────────

SLIDE_ENTRY="    { id: \"${REGISTRY_KEY}\" },"

if grep -qF "\"${REGISTRY_KEY}\"" "$DECK_FILE" 2>/dev/null; then
  echo "SKIP: \"${REGISTRY_KEY}\" already exists in ${DECK_SLUG}.ts — already registered."
else
  # Insert before the closing `];` of the slides array (plus the indentation)
  # The slides array ends with `  ],` (2-space indent)
  sed -i "/^  \],$/i\\${SLIDE_ENTRY}" "$DECK_FILE"

  echo "OK: Added { id: \"${REGISTRY_KEY}\" } to ${DECK_SLUG}.ts slides array."
  CHANGES_MADE=1
fi

# ── Summary ───────────────────────────────────────────────────────────────────

if [[ $CHANGES_MADE -eq 0 ]]; then
  echo ""
  echo "Nothing to do — \"${REGISTRY_KEY}\" is fully registered."
else
  echo ""
  echo "Done. Slide \"${REGISTRY_KEY}\" registered successfully."
  echo "  Component: ${COMPONENT_FILE}"
  echo "  Registry:  ${REGISTRY_FILE}"
  echo "  Deck:      ${DECK_FILE}"
fi
