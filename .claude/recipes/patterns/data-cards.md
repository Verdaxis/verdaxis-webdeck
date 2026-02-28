# Pattern: Data Cards / Market Sizing

Metric-heavy slides with animated counters and visual hierarchy. Reference: `SlideMarket.tsx`, `BranchMarketSizing.tsx`.

## Structure

```
SlideWrapper
  SlideBackground (variant="mesh", tint="blue")
  div (max-w-6xl)
    Standard heading (4px bar + font-display + subtitle)
    flex (col on mobile, row on desktop)
      Concentric circles visualization (TAM/SAM/SOM)
      Description sidebar (stacked cards)
      BranchTrigger
    Modal + Branch
```

## Key Patterns

### Concentric Circles (TAM/SAM/SOM)
```tsx
{/* TAM - Outer */}
<div className="absolute inset-0 rounded-full border border-slate-200 bg-white" />
{/* SAM - Middle */}
<div className="absolute inset-[18%] rounded-full border border-verdaxis-blue/30 bg-verdaxis-blue/[0.04]" />
{/* SOM - Inner (bright, with glow) */}
<div className="absolute inset-[36%] rounded-full border-2 border-emerald/50 bg-emerald/[0.08] shadow-[0_0_30px_rgba(16,185,129,0.15)]" />
```

### AnimatedCounter
```tsx
import AnimatedCounter from "@/components/AnimatedCounter";

// Parse "$300B" into parts
function parseValue(val: string) {
  const match = val.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", suffix: val };
  return { prefix: match[1], numeric: parseInt(match[2], 10), suffix: match[3] };
}

<AnimatedCounter
  target={300}
  prefix="$"
  suffix="B"
  className="text-2xl font-heading font-bold text-brand-green"
/>
```

### Metric Cards
```tsx
<motion.div
  variants={fadeInUp}
  className="rounded-xl border border-slate-200 bg-white shadow-card p-5
    transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
>
  <div className="flex items-center gap-3 mb-2">
    <div className="w-3 h-3 rounded-full bg-brand-green/60 border border-brand-green/30" />
    <span className="text-sm font-heading font-semibold text-brand-green">{label}</span>
    <span className="ml-auto text-lg font-heading font-bold text-brand-green">{value}</span>
  </div>
  <p className="text-sm text-slate-500 leading-relaxed pl-6">{description}</p>
</motion.div>
```

### Color Coding (3-tier hierarchy)
| Tier | Border/BG | Text | Dot |
|------|-----------|------|-----|
| TAM (largest) | `border-slate-200 bg-white` | `text-brand-green` | `bg-brand-green/60` |
| SAM (middle) | `border-verdaxis-blue/15 bg-verdaxis-blue/[0.04]` | `text-verdaxis-blue` | `bg-verdaxis-blue/60` |
| SOM (focused) | `border-emerald/15 bg-emerald/[0.04]` | `text-emerald` | `bg-emerald/60 shadow-[0_0_8px_...]` |

### Branch Card Style (in modals)
```tsx
className="rounded-xl border ${borderClass} bg-slate-50 p-5
  overflow-hidden hover:bg-white hover:shadow-card transition-all duration-200"
```

## When to Use

- Market opportunity slides
- Financial/metric summaries
- Any slide with 2-4 key stats that need visual hierarchy
- Slides with expandable detail via branch modals
