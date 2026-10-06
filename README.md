# ItzFizz - Scroll-Driven Hero Section Animation

A performant, scroll-driven interactive hero section built with Next.js, Tailwind CSS, and GSAP ScrollTrigger.

---

## Tech Stack
- **Framework**: Next.js 14 (App Router, Static Export)
- **Styling**: Tailwind CSS
- **Motion**: GSAP 3 + ScrollTrigger

---

## Features
- **Initial Load Animation**: Staggered letter reveal for the headline (`W E L C O M E   I T Z F I Z Z`), smooth car entrance, and sequential metric card fade-ins with animated counter numbers.
- **Scroll-Driven Animation**: Physics-based scrubbed timeline (`scrub: 1.2`) translating the vehicle across the road, rotating wheel assemblies, driving road markings, and creating layered parallax across the sun and background hills.
- **GPU Performance**: All animations leverage CSS `transform` (`translate`, `scale`, `rotate`) and `opacity` to avoid reflows and ensure 60fps+ rendering.
- **Responsive & Accessible**: Uses `gsap.matchMedia` with full support for `prefers-reduced-motion` and dynamic resize handling with `invalidateOnRefresh`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

### Build & Static Export

```bash
npm run build
```
Static production files are generated into the `out/` directory.

---

## Deployment (GitHub Pages)

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml`. To deploy:
1. Push this repository to GitHub.
2. Under repository **Settings > Pages**, set **Source** to **GitHub Actions**.
3. The site will automatically build and publish to your GitHub Pages URL.

