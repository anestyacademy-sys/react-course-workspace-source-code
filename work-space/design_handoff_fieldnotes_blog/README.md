# Handoff: fieldnotes — personal blog app

## Overview

A five-screen personal blog for a React teaching course: Home, Articles list, Article detail, About, Contact. Dark, saturated developer-course aesthetic (deep indigo canvas, violet→pink→orange gradient accents, glowing pill buttons, rounded cards). Desktop-first. No authentication, no CMS, no search — a reader-facing blog with static post data and one working form.

## About the design files

The files in `design/` are **design references created in HTML** — prototypes showing intended look and behaviour, not production code to copy directly. The task is to **recreate them in the target codebase's environment** using its established patterns and libraries. If no environment exists yet, Vite + React + Tailwind CSS v4 + `react-router-dom` is the intended target (a ready-to-paste prompt for that stack is in `claude-code-prompt.md`).

- `design/markup.html` — the entire design as one inline-styled HTML document. **This is the source of truth for every measurement, color, and string.**
- `design/posts.js` — the five post objects (`slug, date, read, tag, title, excerpt, body[], quote, close`).
- `design/Blog App.dc.html` — the original interactive prototype (all five screens with working routing and form state). Open in a browser to click through it.

`markup.html` uses a small template syntax, translated as: `{{ x }}` → `{x}`; `<sc-for list="{{ items }}" as="item">` → `items.map(...)`; `<sc-if value="{{ isHome }}">` → a route; `style-hover="…"` → hover utilities; `onClick="{{ post.open }}"` → a link to `/articles/:slug`.

## Fidelity

**High-fidelity.** Final colors, typography, spacing and interactions. Recreate pixel-perfectly. The only unresolved items are image areas, which are intentional placeholder blocks (see Assets).

---

## Design tokens

### Color

| Token | Value | Use |
|---|---|---|
| ink | `#0B0A1A` | page background |
| ink-soft | `#0D0B1E` | footer background |
| surface | `#15122B` | cards, info tiles, form card interior |
| surface-2 | `#1A1633` | card hover background (articles rows) |
| field | `#0F0D22` | form input background |
| cream | `#ECE9FF` | primary text |
| violet | `#7C5CFF` | gradient start, focus border |
| violet-soft | `#C4B5FD` | eyebrow labels, tag pill text, links |
| pink | `#EC4899` | gradient mid |
| orange | `#FB923C` | gradient end |
| placeholder fill | `#241C4A` → `#3A1B3D` | all image blocks, 140deg |
| traffic lights | `#F87171` `#FBBF24` `#34D399` | fake browser window dots |

Text alphas: body `cream/0.92`, secondary `cream/0.78`, muted `cream/0.66`–`0.60`, meta `cream/0.45`–`0.40`, placeholder captions `cream/0.30–0.34`. Borders: `rgba(255,255,255,0.08)` default, `0.12` on inputs/ghost buttons, `0.07` on header/footer rules.

Gradients:
- Brand (buttons, logo, badges, avatar): `linear-gradient(135deg, #7C5CFF, #EC4899)`
- Headline text: `linear-gradient(100deg, #A78BFA, #EC4899 55–60%, #FB923C)`
- Topic strip: `linear-gradient(90deg, #7C5CFF, #EC4899 45%, #FB923C)`
- Gradient 1px border: `linear-gradient(140deg, rgba(124,92,255,0.6–0.8), rgba(236,72,153,0.4–0.5) 55%, …)`
- Quote callout: `linear-gradient(135deg, rgba(124,92,255,0.16), rgba(236,72,153,0.12))` + `1px solid rgba(124,92,255,0.3)`

### Typography

- **Sora** 400/500/600/700 — headings, logo, numerals, quote. `font-family: 'Sora', sans-serif`.
- **Plus Jakarta Sans** 300–700 — body, UI, form fields.

| Role | Size / line-height / weight / tracking |
|---|---|
| Home H1 | 68 / 1.06 / 700 / −0.035em |
| Page H1 (Articles, About, Contact) | 50–54 / 1.08 / 700 / −0.035em |
| Article detail H1 | 48 / 1.10 / 700 / −0.035em |
| Featured card title | 36 / 1.16 / 600 / −0.025em |
| Section heading | 24–27 / 600 / −0.02em |
| Card title | 20–21 / 1.28–1.30 / 600 / −0.015em to −0.02em |
| Quote callout | 23 / 1.45 / 500 / −0.015em (Sora) |
| Lede paragraph | 20 / 1.80 |
| Body paragraph | 18 / 1.85 |
| Hero / intro paragraph | 19 / 1.70 |
| Card excerpt | 14–15 / 1.60–1.62 |
| Meta line | 12–13 |
| Eyebrow label | 12 / 700 / 0.20em / uppercase |
| Tag pill | 10 / 700 / 0.10em / uppercase |
| Nav link | 14 / 500 |

### Spacing, radius, shadow

- Content column `max-width: 1160px`, `padding: 0 40px`. Header inner padding `16px 40px`; section padding `76px 40px 96px` (Home hero `92px 40px 64px`).
- Grid gaps: 3-up card grids `24px`; 2-column page splits `60–64px`; footer columns `52px`.
- Radius: cards `20px`; gradient-border wrappers `26px` outer / `25px` inner; inputs and small tiles `14px`/`12px`–`13px`; pills and buttons `999px`; hero window `22px` top corners only; logo mark `10px`.
- Shadows: violet glow `0 12px 34px rgba(124,92,255,0.42)` (primary button), `0 8px 24px rgba(124,92,255,0.40)` (header button), `0 18px 44px rgba(124,92,255,0.16)` / pink `rgba(236,72,153,0.16)` (card hover), `0 20px 50px rgba(124,92,255,0.18)` (featured card hover), `0 6px 20px rgba(124,92,255,0.45)` (logo mark).
- Transitions: `160ms` on nav links, buttons, input borders; `200ms` on cards.

---

## Screens

### Shared — Header

Sticky, `z-index 30`, `background: rgba(11,10,26,0.82)`, `backdrop-filter: blur(14px)`, bottom border `rgba(255,255,255,0.07)`. Content row `space-between`.

- **Left:** 32px rounded-square (`10px`) brand gradient tile with `F` (Sora 15/700, white) + wordmark `fieldnotes` (Sora 18/600, −0.01em). Links to Home.
- **Right:** pill nav — Home, Articles, About as `9px 16px` pills, radius 999px. Active: `color cream`, `background rgba(255,255,255,0.07)`. Inactive: `cream/0.6`, transparent, hover → cream. `/articles/:slug` also marks **Articles** active. Then **Contact us** — gradient pill, `11px 22px`, 14/600 white, violet glow shadow, hover `translateY(-2px)`.

### Shared — Footer

`background #0D0B1E`, top border `rgba(255,255,255,0.08)`. Three columns `1.5fr 1fr 1fr`, gap 52, padding `52px 40px 34px`: brand block (30px logo tile + wordmark, then "A personal blog by Mira Advani. Written slowly, published anyway." at 15/1.65 `cream/0.55`, max 36ch); **Pages** column (Home, Articles, About, Contact us); **Elsewhere** column (GitHub, Bluesky, RSS — plain text, not links). Column headers 11/700/0.16em uppercase `cream/0.40`. Bottom bar above a `0.07` rule, `18px 40px 30px`, 13px `cream/0.42`: "© 2026 Mira Advani" left, "Built while learning React" right.

### 1. Home

Purpose: introduce the blog and surface the newest posts.

1. **Ambient glow** — absolute div, `top:-260px; left:50%; translateX(-50%); width:900px; height:620px`, `radial-gradient(ellipse at center, rgba(124,92,255,0.34) 0%, rgba(236,72,153,0.16) 42%, transparent 72%)`, `pointer-events:none`, inside an `overflow:hidden` section.
2. **Hero** (centered, `92px 40px 64px`): announcement pill — `7px 16px 7px 8px`, `rgba(255,255,255,0.05)` on `0.1` border, containing a gradient "NEW" chip (11/700/0.06em) and the text "A personal blog about learning to build". Then H1 **"Notes on building things _slowly_"** (68px, max 18ch) with `slowly` gradient-filled. Then 19/1.7 paragraph `cream/0.66`, max 58ch: "I write about learning in public — mostly code, sometimes the quieter parts of making software. New posts land most weeks, and none of them are finished." Then two buttons, gap 14: gradient **"Start reading →"** (`15px 30px`, 15/600, violet glow, hover lift 2px) → `/articles`; ghost **"Who writes this"** (`rgba(255,255,255,0.06)`, `0.12` border, hover `0.11`) → `/about`.
3. **Fake browser window** — gradient `1px` border wrapper with `22px 22px 0 0` radius over a `#13112A` interior; three 11px traffic-light dots; then a 210px panel, `linear-gradient(180deg,#1B1738,#13112A)`, radius `14px 14px 0 0`, **no bottom border**, caption "SCREENSHOT / COVER IMAGE" 13/0.14em `cream/0.30`. The panel is deliberately clipped by the section edge — do not add bottom padding.
4. **Topic strip** — full-bleed, brand 90deg gradient, `11px 0`. Centered row, gap 34, 13/600/0.04em `white/0.92`: React, Hooks, State, CSS, Tooling, Testing, Design systems, Career.
5. **Featured post** (`76px 40px 20px`) — one card, `padding 26px`, radius 24, `surface` on `white/0.08`, grid `1.05fr 1fr` gap 40, items centered. Left: 16/10 placeholder, radius 16, caption "COVER IMAGE". Right: two pills ("LATEST" gradient + tag outline), 36px title, 17/1.65 excerpt `cream/0.64`, meta "`date` · `read` read" 14 `cream/0.45`. Hover: border `rgba(124,92,255,0.5)`, shadow `0 20px 50px rgba(124,92,255,0.18)`. Links to the newest post.
6. **More from the blog** (`44px 40px 92px`) — header row: heading 27/600 + link "See all articles →" (14/600 `violet-soft`). 3-column grid, gap 24, of posts 2–4 as **PostCard**.

**PostCard** — column flex, radius 20, `surface`, `white/0.08` border, `overflow:hidden`. 16/9 placeholder header with `0.07` bottom border. Body `20px 22px 24px`: tag pill (`violet-soft` on `rgba(124,92,255,0.16)`, `rgba(124,92,255,0.3)` border), title 20–21/1.28–1.30/600, excerpt 14/1.62 `cream/0.60`, meta 12 `cream/0.40` pushed to the bottom (`margin-top:auto`). Hover: `translateY(-5px)`, border `rgba(236,72,153,0.45)` on Home / `rgba(124,92,255,0.5)` on Articles, matching 44px glow shadow, 200ms.

### 2. Articles

Purpose: browse the full archive.

Glow: `width 820px, height 560px`, violet `0.26`, `top:-280px`, centered. Section `76px 40px 96px`.

Centered header, margin-bottom 48: eyebrow "THE ARCHIVE" (`violet-soft`), H1 54px "Everything I've **written**" (gradient on `written`, max 20ch), then "5 posts, oldest at the bottom" 16 `cream/0.55`.

Then **all five posts in a 3-column PostCard grid**, gap 24 — the same card as Home, meta reading "`date` · `read` read".

### 3. Article detail

Purpose: read one post.

Glow: `900×600`, `rgba(236,72,153,0.2)` → `rgba(124,92,255,0.14)` at 40% → transparent, `top:-300px`.

1. Centered header column `max-width 800px`, `44px 40px 0`: ghost pill **"← All articles"** (`8px 16px`, 13/600, `white/0.05` on `0.1`, hover `0.1`). Two pills: gradient tag + outline "`read` read". H1 48px (`text-wrap: pretty`). Excerpt 19/1.7 `cream/0.64`. Author row (centered, gap 12, `padding-bottom 40px`): 40px gradient circle with `M` (Sora 15/600), then name 15/600 and date 13 `cream/0.50`, left-aligned.
2. **Hero image** — `max-width 1000px`, 21/9, radius 22, placeholder fill, caption "HERO IMAGE".
3. **Body** — `max-width 720px`, `52px 40px 0`. `body[0]` at 20/1.8 `cream/0.92`; remaining paragraphs 18/1.85 `cream/0.78`, `margin-bottom 26px`. **Quote callout**: `margin 40px 0`, `padding 28px 30px`, radius 20, violet→pink 0.16/0.12 gradient on `rgba(124,92,255,0.3)` border, Sora 23/1.45/500. Then `close` paragraph at body size.
4. **Read next** (`72px 40px 96px`) — heading 24/600, then two other posts in a 2-column grid, gap 24: simple bordered cards (`padding 24px`, radius 20, no image) with tag pill, 21px title, 15/1.6 excerpt. Hover: `translateY(-4px)`, border `rgba(124,92,255,0.5)`.

### 4. About

Purpose: who writes this.

Glow: `760×540`, pink `0.22`, `top:-260px; right:-120px`. Grid `0.85fr 1.25fr`, gap 64, items start.

- **Left:** gradient `1px` border wrapper (radius 26 → inner 25, `surface`), containing a 4/5 placeholder with caption "PORTRAIT".
- **Right:** eyebrow "ABOUT"; H1 50px "Hello, I'm **Mira**" (gradient on the name); two paragraphs 19/1.78 `cream/0.80` (verbatim in the markup); three stat cards in a 3-column grid, gap 16 (`padding 22px 20px`, radius 18, `surface` on `white/0.08`): **7** Years writing (violet→pink gradient numeral), **142** Posts published (pink→orange), **3.1k** Readers a month (violet→violet-soft) — numerals Sora 30/700 gradient-filled, labels 13 `cream/0.60`; then skill pills, gap 10: React, Design systems, CSS, Teaching (`9px 16px`, 13/500, `white/0.05` on `0.1`).

Note: the three stats are placeholder figures — replace with real numbers or delete the row.

### 5. Contact

Purpose: send the author a message.

Glow: `860×560`, violet `0.28`, `top:-260px`, centered. Grid `1fr 1.05fr`, gap 60, items start.

- **Left:** eyebrow "CONTACT US"; H1 50px "Still have a **question?**" (gradient on `question?`); paragraph 19/1.75 `cream/0.68`, max 38ch. Two info cards, gap 14 (`padding 18px 20px`, radius 18, `surface` on `white/0.08`, row flex gap 14): 38px rounded-square icon tile (radius 12) — violet tint `rgba(124,92,255,0.18)`/`0.34` border with `@`, then pink tint `rgba(236,72,153,0.18)`/`0.34` with `◔` — each beside a 12/0.1em uppercase label `cream/0.45` and a 16/500 value ("mira@fieldnotes.blog"; "Within a week · Pune, India").
- **Right:** gradient `1px` border wrapper (radius 26 → 25), interior `surface`, `padding 38px`.
  - **Form state:** three fields, gap 20 — Name, Email, Message (5-row textarea, `resize: vertical`). Labels 13/600 `cream/0.80`, gap 9. Inputs: `background field`, `1px solid rgba(255,255,255,0.12)`, radius 14, `padding 14px 16px`, 16px text, focus border `violet`, 160ms. Submit: full gradient pill, `16px 30px`, 15/600, violet glow, hover lift 2px.
  - **Success state** (centered, `padding 30px 0`): 56px gradient circle with `✓` (24px) and `0 10px 30px rgba(124,92,255,0.45)` glow; heading Sora 28/600 "Thanks — it's on its way."; 17/1.7 `cream/0.65` "I'll get back to you at the address you gave."; ghost pill **"Send another"** (`12px 24px`) that clears the fields and returns to the form.

---

## Interactions & behaviour

- **Routing:** `/` · `/articles` · `/articles/:slug` · `/about` · `/contact`. Scroll to top on every navigation (the prototype calls `window.scrollTo(0,0)`).
- **Active nav:** exact route match, except `/articles/:slug` which marks Articles active.
- **Card clicks:** every post card (home grid, featured, articles grid, read-next) navigates to that post's detail route.
- **Hover:** cards lift 4–5px with a colored glow (200ms); buttons lift 2px (160ms); nav links fade to cream (160ms); article rows and ghost buttons brighten their background.
- **Form:** controlled inputs; submit prevents default and swaps the card contents to the success state; "Send another" resets all three fields and returns to the form. No network request, no validation beyond `type="email"`; add real validation and a submit endpoint when wiring it up.
- **Loading / error states:** none designed — post data is static. If posts become remote, a skeleton should reuse the PostCard shell with the placeholder gradient.
- **Responsive:** not designed. Desktop-first, holds at 1280px. Mobile breakpoints are out of scope for this handoff.

## State

Prototype state, all local:

| State | Type | Notes |
|---|---|---|
| route | string | replaced by the router |
| slug | string | comes from `/articles/:slug` |
| name, email, message | string | controlled contact fields |
| sent | boolean | toggles the contact success state |

Derived, not stored: current post (`find` by slug), read-next list (first two posts excluding the current), featured/lead post (newest), post count. No data fetching — `posts.js` is imported directly.

## Assets

**None.** Every image area is an intentional placeholder: `linear-gradient(140deg, #241C4A, #3A1B3D)` on a `rgba(255,255,255,0.07–0.08)` border, at the aspect ratio given per screen, some with an uppercase caption. Replace with real images at handoff — cover images (16/9 and 16/10), one 21/9 article hero, one 4/5 portrait, one hero screenshot panel.

No icon library. The only glyphs are `F` (logo), `M` (avatar), `@`, `◔`, `✓`, `→`, `←`. Fonts are Google-hosted: Sora and Plus Jakarta Sans.

Copy — all headings, paragraphs, labels, button text and the five posts — is final and should be used verbatim from `design/markup.html` and `design/posts.js`.

## Files

```
design/markup.html          entire design, inline-styled — source of truth
design/posts.js             the five post objects
design/Blog App.dc.html     interactive prototype, open in a browser to click through
claude-code-prompt.md       ready-to-paste build prompt for Vite + React + Tailwind v4
screenshots/                full-page captures of all five screens
```
