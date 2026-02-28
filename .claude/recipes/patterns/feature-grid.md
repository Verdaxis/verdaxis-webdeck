# Pattern: Feature Grid / Pillar Cards

Solution overviews, feature showcases, and icon-driven card grids. Reference: `SlideSolution.tsx`.

## Structure

```
SlideWrapper
  SlideBackground (variant="mesh", tint="mixed")
  div (max-w-6xl)
    Standard heading (4px bar + font-display + subtitle)
    motion.div grid (1-col mobile, 3-col desktop)
      Connecting line (hidden md:block, gradient between cards)
      Pillar cards (elevated center card)
```

## Key Patterns

### Standard Heading (reuse across all content slides)
```tsx
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
```

### Pillar Card
```tsx
<motion.div
  variants={scaleIn}
  className={`
    relative z-10 flex flex-col items-center text-center
    rounded-2xl border border-slate-200 bg-white shadow-card
    px-6 py-8 md:py-10
    transition-all duration-300
    hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1
    ${isCenter ? "md:-translate-y-3 md:shadow-[0_0_40px_rgba(93,173,226,0.08)]" : ""}
  `}
>
  {/* Gradient top border */}
  <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-verdaxis-blue to-brand-green" />

  {/* Icon */}
  <div className="mb-5 p-3 rounded-xl bg-verdaxis-blue/10 border border-verdaxis-blue/15">
    <PillarIcon iconKey={pillar.iconKey} />
  </div>

  {/* Title */}
  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
    {pillar.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-slate-500 leading-relaxed">
    {pillar.description}
  </p>

  {/* Number indicator */}
  <div className="mt-auto pt-6">
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-slate-200 text-xs text-slate-400 font-heading">
      {index + 1}
    </span>
  </div>
</motion.div>
```

### Connecting Line (desktop only)
```tsx
<div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] -translate-y-1/2 z-0">
  <div className="w-full h-full bg-gradient-to-r from-verdaxis-blue/0 via-verdaxis-blue/25 to-verdaxis-blue/0" />
  <div className="absolute inset-0 blur-sm bg-gradient-to-r from-verdaxis-blue/0 via-verdaxis-blue/15 to-verdaxis-blue/0" />
</div>
```

### Custom SVG Icons
```tsx
function PillarIcon({ iconKey }: { iconKey: string }) {
  const iconClass = "w-10 h-10 text-verdaxis-blue";
  switch (iconKey) {
    case "trading":
      return <svg className={iconClass} viewBox="0 0 40 40" ...>;
    // ...
  }
}
```

Icons are inline SVG, not from an icon library. Size: `w-10 h-10`. Color: `text-verdaxis-blue` with `currentColor`.

### Center Card Elevation
The middle card (`index === 1`) gets:
- `md:-translate-y-3` -- raised position
- `md:shadow-[0_0_40px_rgba(93,173,226,0.08)]` -- subtle verdaxis-blue glow
- Optional glow spot: `bg-verdaxis-blue/10 blur-xl` positioned above

## Animation Pattern

```tsx
<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
  {items.map((item, i) => (
    <motion.div key={item.key} variants={scaleIn}>
      ...
    </motion.div>
  ))}
</motion.div>
```

Use `whileInView` (not `animate`) for content slides so they animate on scroll.

## When to Use

- Solution/product overview slides
- Feature showcases (3-4 pillars)
- Any slide with symmetric card grids and icon-driven content
