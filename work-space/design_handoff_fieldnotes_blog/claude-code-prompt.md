# Prompt for Claude Code

**First: copy the `reference/` folder from this project into your empty project folder**, so Claude Code has `reference/markup.html` and `reference/posts.js` on disk. Then paste everything below the line.

---

I have an approved design I need ported to React + Tailwind CSS exactly. Do not redesign it, do not improve it, do not substitute your own colors, spacing, or copy.

## Source of truth

`reference/markup.html` is the approved design as one inline-styled HTML document. `reference/posts.js` is the post data. **Read both files completely before writing any code.** Every style value you produce must come from that markup — if a padding is `76px 40px 96px`, write `pt-19 px-10 pb-24` or `p-[76px_40px_96px]`, not "roughly py-20".

The markup uses a small template syntax. Translate it literally:

- `{{ x }}` → JSX `{x}`
- `<sc-for list="{{ items }}" as="item">…</sc-for>` → `items.map(item => …)` with a `key`
- `<sc-if value="{{ isHome }}">…</sc-if>` → a route (the five `sc-if` blocks are Home, Articles, Article detail, About, Contact) or, for `sent` / `notSent`, a conditional render
- `style-hover="…"` → Tailwind `hover:` utilities with the same values
- `onClick="{{ goList }}"` → `<Link to="/articles">`; `onClick="{{ post.open }}"` → `<Link to={'/articles/' + post.slug}>`

## Stack

Vite + React (JS, not TS), Tailwind CSS v4 via `@tailwindcss/vite`, `react-router-dom`. Plain function components and `useState`. No state library, no UI kit, no extra dependencies. This is a teaching project for a React course, so keep the code obvious and readable.

## Routes

`/` Home · `/articles` list · `/articles/:slug` detail · `/about` · `/contact`. A `Layout` holds the header and footer with an `<Outlet />`. Scroll to top on navigation.

## Files

```
src/
  main.jsx
  App.jsx
  data/posts.js            // reference/posts.js, unchanged
  components/Layout.jsx
  components/Header.jsx
  components/Footer.jsx
  components/PostCard.jsx  // the repeated card in the home grid + articles grid
  components/Badge.jsx     // the pill: variant "gradient" | "outline" | "tag"
  components/GlowButton.jsx
  pages/Home.jsx
  pages/Articles.jsx
  pages/ArticleDetail.jsx
  pages/About.jsx
  pages/Contact.jsx
```

Only extract a component where the markup genuinely repeats. Everything else stays inline in its page — I would rather read one long page file than chase eight tiny ones.

## Tokens

Put these in `src/index.css` under `@theme` and use the named utilities (`bg-ink`, `text-cream`, `from-violet`) instead of re-typing hex values. The values are the ones already in the markup:

```css
@theme {
  --color-ink: #0B0A1A;
  --color-ink-soft: #0D0B1E;
  --color-surface: #15122B;
  --color-surface-2: #1A1633;
  --color-field: #0F0D22;
  --color-cream: #ECE9FF;
  --color-violet: #7C5CFF;
  --color-violet-soft: #C4B5FD;
  --color-pink: #EC4899;
  --color-orange: #FB923C;
  --font-display: "Sora", sans-serif;
  --font-sans: "Plus Jakarta Sans", sans-serif;
}
```

Load Sora (400–700) and Plus Jakarta Sans (300–700) from Google Fonts in `index.html`. Headings use `font-display`; everything else `font-sans`.

Where the markup uses `rgba(236,233,255,0.6)` write `text-cream/60`; `rgba(255,255,255,0.08)` borders become `border-white/8`. Keep alpha values as-is — don't round them to Tailwind's nearest step.

## Things that get dropped in ports — keep all of them

1. The **radial glow** div at the top of every page section (`position:absolute`, `pointer-events-none`, inside an `overflow-hidden` parent). Home, Articles, Detail, About and Contact each have one, with different colors and offsets. Copy each verbatim as an arbitrary `bg-[radial-gradient(...)]` value.
2. The home hero's **fake browser window**: gradient 1px border wrapper, three traffic-light dots, and a 210px panel whose bottom edge is deliberately clipped by the section boundary (border-bottom removed, radius only on top corners).
3. The full-width **gradient topic strip** (`violet → pink → orange`) immediately below it.
4. **Gradient text** on one word per page title — `bg-clip-text text-transparent` on the `<span>`, gradient on the same span.
5. **Gradient 1px borders** — implemented as a `p-px` gradient wrapper around a solid-background inner div with a 1px-smaller radius. Used on the featured card wrapper, the About portrait, and the Contact form card.
6. All the **hover transitions**: card lift `-translate-y-1`/`-translate-y-1.5` with violet or pink glow shadow, button lift 2px, nav link color change. Every one has `transition-all duration-200` (or 160ms on nav/buttons) — match the durations in the markup.
7. Every **image area is a placeholder block** — `bg-gradient-to-br from-[#241C4A] to-[#3A1B3D]` with the markup's `aspect-ratio` and, where present, the uppercase caption text. Do not add real images, stock photos, SVG illustrations, or icon libraries. The only glyphs in the design are `F`, `M`, `@`, `◔`, `✓`, `→`, `←`.

## Copy

Use the exact text in the markup and in `reference/posts.js`. Do not rewrite headlines, paragraphs, labels, or button text, and do not add sections that aren't there (no newsletter block, no testimonials, no search, no pagination, no dark-mode toggle).

## Interactive behaviour

- Header nav marks the active route; `/articles/:slug` also marks Articles active.
- Cards link to their post. Detail page resolves the post by `slug` from the URL.
- Detail page renders `body[0]` as the lede paragraph, `body.slice(1)` as body paragraphs, then `quote` in the gradient callout, then `close`. "Read next" shows two other posts.
- Contact form: controlled `useState` inputs, `preventDefault` on submit, then the success state replaces the form inside the same card. "Send another" resets the fields.

## Layout

Desktop-first, `max-w-[1160px] mx-auto px-10` content column, matching the markup. It needs to hold at 1280px wide. Don't add responsive breakpoints I didn't ask for.

## Done means

All five routes render and are visually indistinguishable from `reference/markup.html` side by side at 1280px — same type sizes, same paddings, same gradients, same hover behaviour. Tell me anything you had to approximate.
