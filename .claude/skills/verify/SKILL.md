---
name: verify
description: Build, run, and drive this Next.js site in a real browser to verify a change.
---

# Verifying personal-web

Next.js 16 (App Router, Turbopack) + Tailwind v4. No test suite — verification
means driving the running site in a browser and capturing what it renders.

## Getting a server

**Don't assume the server on :3000 is current.** A long-lived server is often
running there; it has served a stale CSS bundle before (new Tailwind utilities
and new `globals.css` rules missing entirely, so `md:` variants silently no-op
and the page looks broken in ways the source doesn't explain).

Check before trusting it:

```bash
CSS=$(curl -s http://localhost:3000/<route> | grep -o '/_next/static/[^"]*\.css' | head -1)
curl -s "http://localhost:3000$CSS" | grep -c "<a-class-you-just-added>"
```

`0` means stale. Don't kill the user's process — run an isolated copy instead:

```bash
SP=<scratchpad>/app-copy
rsync -a --exclude node_modules --exclude .next --exclude .git <repo>/ "$SP"/
cp -a <repo>/node_modules "$SP"/node_modules   # symlinks fail: Turbopack rejects
                                               # links pointing outside the root
cd "$SP" && npx next dev -p 3002
```

Re-sync with the same `rsync` after each edit; Turbopack HMR picks it up in ~5s.

## Driving it

No Playwright in the repo. Install `playwright-core` in the scratchpad and use
the system Chrome — no browser download needed:

```bash
cd <scratchpad> && npm init -y && npm i playwright-core
```

```js
const browser = await chromium.launch({ channel: "chrome" });
```

For scroll-driven work, assert on measured geometry rather than eyeballing
screenshots: scroll, `waitForTimeout(900)` (rAF + the 0.8s opacity transition),
then read `getBoundingClientRect()` and `getComputedStyle().opacity`. Screenshot
alongside it for the visual check.

Always check `document.documentElement.scrollWidth > window.innerWidth` — the
full-bleed effects here size elements to `window.innerWidth` and can overflow.

## Worth probing

- Both breakpoints (the site diverges hard at `md` / 768px) and a live resize
  across it, in both directions.
- Reload deep in the page — browsers restore scroll, and scroll-driven CSS vars
  are only set after hydration, so the initial state can flash.
- Scrolling back up (reveals here are two-way toggles).
- `reducedMotion: "reduce"` in `newPage()`.
