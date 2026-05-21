# CYVL Hackathon — Site

A static React site for the CYVL Hackathon ("Build the physical future" — June 13, 2026, Somerville).

## Stack

- React 18 (UMD via CDN)
- Babel standalone (compiles `.jsx` in the browser — no build step)
- Plain CSS (`colors_and_type.css` from the CYVL design system + `styles.css`)

There is intentionally no `package.json` / bundler. The site is a static folder — every file you see is a file you ship.

## Local dev

Open `index.html` in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy to Vercel

Two options:

### A. CLI

```bash
npm i -g vercel
cd site
vercel
```

Pick "static" / "other" when prompted. No build command, no output directory — Vercel will serve the folder as-is.

### B. Git + Vercel dashboard

1. Push this folder to a Git repo (the contents of `site/` should be at the repo root, or set "Root Directory" to `site` in Vercel project settings).
2. Connect the repo in the Vercel dashboard.
3. Framework preset: **Other** (or "No Framework"). Build command: **(none)**. Output directory: **.** (the project root).

`vercel.json` is included for clean URLs.

## Editing

| File | Purpose |
| --- | --- |
| `index.html` | Entry — loads React, Babel, and every component file. |
| `styles.css` | Site-level CSS (layout, sections, components). |
| `colors_and_type.css` | CYVL design tokens (colors, type, spacing). Don't edit unless you mean to change the brand. |
| `src/App.jsx` | Composes the page. |
| `src/Nav.jsx`, `Hero.jsx`, `About.jsx`, `Tracks.jsx`, `Prizes.jsx`, `Schedule.jsx`, `Sponsors.jsx`, `FAQ.jsx`, `Footer.jsx` | One section per file. |
| `src/icons.jsx` | Inline Lucide-style outline icons. |
| `assets/` | Logos + brand imagery from the CYVL design system. |

Each component file ends with `window.Xxx = Xxx;` because Babel scripts don't share scope by default. Pattern stays consistent — when you add a new component, attach it to `window` the same way.

## Want a real build step?

If you want Vite/Next later:

1. `npm create vite@latest cyvl-hackathon -- --template react`
2. Move the `src/*.jsx` files in, swap the `window.X = X` exports for ES `export default X`, and add `import` statements at the top of `App.jsx`.
3. Move `index.html` to Vite's root and replace the `<script type="text/babel" src="...">` tags with a single `<script type="module" src="/src/main.jsx">`.

The components themselves are framework-agnostic — only the loading pattern changes.
