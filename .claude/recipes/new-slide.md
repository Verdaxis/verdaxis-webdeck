# Recipe: Add a New Slide

## Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `{{SLIDE_NAME}}` | `Partnerships` | PascalCase slide name |
| `{{SLIDE_ID}}` | `partnerships` | Kebab-case slide ID (used in registry + deck config) |
| `{{CONTENT_KEY}}` | `partnerships` | camelCase key in the DeckContent interface |

## Files to Touch

1. **Create** `components/slides/Slide{{SLIDE_NAME}}.tsx`
2. **Edit** `lib/content/types.ts` -- add content interface section to `DeckContent`
3. **Edit** ALL 6 language files: `lib/content/{en,zh,de,nl,fr,pt}.ts`
4. **Edit** `lib/slideRegistry.ts` -- add importer + registry entry
5. **Edit** `lib/decks/vc.ts` -- add slide ID to `slides` array

Or use the registration script for steps 4-5:
```bash
./scripts/register-slide.sh {{SLIDE_ID}} Slide{{SLIDE_NAME}} vc
```

## 1. Component Skeleton

```tsx
"use client";

import SlideWrapper from "@/components/SlideWrapper";
import SlideBackground from "@/components/SlideBackground";
import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Slide{{SLIDE_NAME}}() {
  const t = useContent();
  const { heading, subtitle } = t.{{CONTENT_KEY}};

  return (
    <SlideWrapper>
      <SlideBackground variant="mesh" tint="blue" />
      <div className="w-full max-w-6xl mx-auto">
        {/* Header — verdaxis standard pattern */}
        <motion.div
          className="flex items-center gap-3 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[4px] h-8 bg-verdaxis-blue rounded-full" />
          <h2 className="text-3xl md:text-4xl font-display font-normal text-slate-900">
            {heading}
          </h2>
        </motion.div>
        <motion.p
          className="text-slate-500 text-base md:text-lg mb-10 ml-[16px] max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>

        {/* Slide content here */}
      </div>
    </SlideWrapper>
  );
}
```

Key rules:
- Always `"use client"` as the first line
- Always wrap in `<SlideWrapper>`
- Content hook: `useContent()` from `@/lib/i18n` (single global hook, no partner variants)
- Use `SlideBackground` for mesh/gradient backgrounds (`variant="mesh"`, `tint="blue"|"green"|"mixed"`)
- Standard heading pattern: `4px` verdaxis-blue bar + `font-display` heading + `text-slate-500` subtitle with `ml-[16px]`
- Use `motion.div`/`motion.h2` for entrance animations
- Import animation variants from `@/lib/animations` (`fadeInUp`, `scaleIn`, `staggerContainer`)
- Design tokens: `verdaxis-blue`, `brand-green`, `emerald`, `text-slate-900`, `text-slate-500`
- Cards: `rounded-xl border border-slate-200 bg-white shadow-card` with `hover:shadow-card-hover hover:-translate-y-1`
- Accent gradients: `bg-gradient-to-r from-verdaxis-blue to-brand-green`

## 2. Content Type Interface

Add to `lib/content/types.ts` inside the `DeckContent` interface:

```ts
{{CONTENT_KEY}}: {
  heading: string;
  subtitle: string;
  // ... slide-specific fields
};
```

## 3. Content Values

Add to ALL 6 language files (`lib/content/{en,zh,de,nl,fr,pt}.ts`):

**In the `slides` record** (for TOC/nav metadata):
```ts
"{{SLIDE_ID}}": { title: "Slide Title", section: "Section Name" },
```

**As a top-level content section:**
```ts
{{CONTENT_KEY}}: {
  heading: "...",
  subtitle: "...",
  // ... matching the type interface
},
```

All 6 files must stay in sync with `types.ts` or the build fails.

## 4. Register in slideRegistry.ts

Add TWO entries to `lib/slideRegistry.ts`:

In `slideImporters`:
```ts
{{SLIDE_ID}}: () => import("@/components/slides/Slide{{SLIDE_NAME}}"),
```

Note: unquoted keys for simple IDs (e.g., `vision:`), quoted for hyphenated IDs (e.g., `"why-now":`).

In `slideRegistry`:
```ts
{{SLIDE_ID}}: { component: lazy(slideImporters.{{SLIDE_ID}}) },
```

If the slide has branches, add `availableBranches`:
```ts
{{SLIDE_ID}}: { component: lazy(slideImporters.{{SLIDE_ID}}), availableBranches: ["branch-id"] },
```

## 5. Add to Deck Config

Edit `lib/decks/vc.ts` and add `{ id: "{{SLIDE_ID}}" }` to the `slides` array in the correct position.

If the slide exposes branches:
```ts
{ id: "{{SLIDE_ID}}", branches: ["branch-id"] },
```

## Checklist

- [ ] Component created with `"use client"`, `SlideWrapper`, `useContent()` hook
- [ ] Standard heading pattern (4px bar + font-display + subtitle)
- [ ] Content type added to `types.ts`
- [ ] Content values added to ALL 6 language files (both `slides` record AND content section)
- [ ] Importer added to `slideImporters` in `slideRegistry.ts`
- [ ] Entry added to `slideRegistry` in `slideRegistry.ts`
- [ ] Slide ID added to `vc.ts` slides array
- [ ] `npm run build` passes
- [ ] No hardcoded colors -- use Tailwind tokens (`verdaxis-blue`, `brand-green`, etc.)
- [ ] No hardcoded text -- all from `useContent()` hook
