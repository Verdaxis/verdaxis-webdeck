# Recipe: Add a Branch Overlay

Branches are modal deep-dives launched from a parent slide. They are lazily imported by their parent slide component, NOT registered in `slideRegistry` as standalone slides.

## Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `{{BRANCH_NAME}}` | `MarketSizing` | PascalCase branch name |
| `{{BRANCH_ID}}` | `market-sizing` | Kebab-case branch ID |
| `{{BRANCH_KEY}}` | `marketSizing` | camelCase key in `branches` content section |
| `{{PARENT_SLIDE}}` | `SlideMarket` | Parent slide that launches this branch |

## Files to Touch

1. **Create** `components/slides/branches/Branch{{BRANCH_NAME}}.tsx`
2. **Edit** `lib/content/types.ts` -- add branch content to the `branches` section of `DeckContent`
3. **Edit** ALL 6 language files -- add branch content in the `branches` object
4. **Edit** the parent slide component -- add lazy import, `Modal`, `BranchTrigger`
5. **Edit** `lib/slideRegistry.ts` -- add `availableBranches` to the parent's registry entry
6. **Edit** `lib/decks/vc.ts` -- add `branches: ["{{BRANCH_ID}}"]` to the parent slide entry

## 1. Branch Component

```tsx
"use client";

import { useContent } from "@/lib/i18n";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Branch{{BRANCH_NAME}}() {
  const t = useContent();
  const data = t.branches.{{BRANCH_KEY}};

  return (
    <motion.div
      className="flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Branch content cards here */}
    </motion.div>
  );
}
```

Key differences from regular slides:
- No `SlideWrapper` -- branches render inside a `Modal`
- Root element is a plain `<div>` or `<motion.div>`
- Content comes from `t.branches.{{BRANCH_KEY}}`
- Define local animation variants (don't use `staggerContainer` from `lib/animations` -- branches use tighter timing)
- Cards use `rounded-xl border bg-slate-50 p-5 hover:bg-white hover:shadow-card transition-all`
- Color palette: same tokens (`verdaxis-blue`, `brand-green`, `emerald`, `text-slate-500`)

## 2. Wire Up the Parent Slide

Add imports to the parent slide component:

```tsx
import { useState, lazy, Suspense } from "react";
import BranchTrigger from "@/components/branching/BranchTrigger";
import Modal from "@/components/branching/Modal";

const Branch{{BRANCH_NAME}} = lazy(
  () => import("./branches/Branch{{BRANCH_NAME}}")
);
```

Add state and JSX:

```tsx
const [showBranch, setShowBranch] = useState(false);

// Place the trigger where it makes sense in the slide:
<BranchTrigger
  label={t.{{parentContentKey}}.branchLabel}
  onClick={() => setShowBranch(true)}
/>

// At the bottom of JSX, still inside SlideWrapper:
<Modal
  isOpen={showBranch}
  onClose={() => setShowBranch(false)}
  title={t.branches.{{BRANCH_KEY}}.title}
>
  <Suspense
    fallback={
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-verdaxis-blue/30 border-t-verdaxis-blue rounded-full animate-spin" />
      </div>
    }
  >
    <Branch{{BRANCH_NAME}} />
  </Suspense>
</Modal>
```

## 3. Registry Entry

Edit the parent slide's entry in `slideRegistry.ts`:

```ts
{{parentSlideId}}: {
  component: lazy(slideImporters.{{parentSlideId}}),
  availableBranches: ["{{BRANCH_ID}}"],
},
```

## 4. Deck Config

Edit `lib/decks/vc.ts`:

```ts
{ id: "{{parentSlideId}}", branches: ["{{BRANCH_ID}}"] },
```

## Checklist

- [ ] Branch component created in `components/slides/branches/`
- [ ] No `SlideWrapper` -- plain `<div>` or `<motion.div>` root
- [ ] Content type added to `branches` section in `types.ts`
- [ ] Content values added to `branches` in ALL 6 language files
- [ ] Parent slide lazily imports branch with `lazy()`
- [ ] Parent slide has `useState` for open/close
- [ ] Parent slide renders `BranchTrigger` + `Modal` with `Suspense`
- [ ] `availableBranches` set on parent in `slideRegistry.ts`
- [ ] `branches` array set on parent slide entry in `vc.ts`
- [ ] `npm run build` passes
