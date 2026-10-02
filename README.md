# Nick (nickymarzz) - Cyberpunk Developer Portfolio

A high-performance, cyberpunk-themed developer portfolio website designed for recruiters, hiring managers, and technical evaluators. Built entirely from scratch using plain HTML, Vanilla CSS, and Vanilla Javascript without any frameworks or build steps.

Check out the live deployment here: [nickymarzz.github.io](https://nickymarzz.github.io/)

## 🚀 Deployment with GitHub Actions

This repository automatically deploys to **GitHub Pages** using **GitHub Actions** on every push to the `main` branch.

### Enabling GitHub Pages via GitHub Actions (One-Time Setup)

1. Push this repository to your GitHub account (e.g. `https://github.com/nickymarzz/nickymarzz.github.io`).
2. Go to your repository on GitHub: **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) uses Node 24 and Ubuntu 24.04 runners to automatically publish the site.

---

## 🎯 Technical Features & Easter Eggs

- **Custom 2D Wireframe Engine**: The hero section features a fully custom 3D torus wireframe renderer projected onto a 2D Canvas without Three.js.
- **Command Palette Navigation**: Press `/` anywhere on the site (outside of inputs) to open a HUD-style fuzzy-search command palette that jumps between sections and triggers actions.
- **Konami Code Override**: Enter `↑ ↑ ↓ ↓ ← → ← → B A` on your keyboard to trigger a global CSS variable override, swapping the cyan primary accents for a high-contrast magenta colorway.
- **Data-UI Separation**: All 16 featured projects are stored as clean JSON in `js/main.js` and dynamically rendered into DOM nodes via an efficient template literal injection.
- **Performance & A11y Optimized**: Target Lighthouse 90+ with `loading="lazy"` images, font-display preloading, strict WCAG AA contrast colors, hidden `skip-link` components, and robust `prefers-reduced-motion` fallbacks to kill heavy animations on demand.

---

## 📂 Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deployment
├── assets/
│   └── favicon.svg             # Custom Cyberpunk Neon "N" SVG
├── css/
│   └── style.css               # Vanilla CSS with CSS Custom Properties (Variables)
├── js/
│   └── main.js                 # Project catalog, rendering logic, interaction event listeners
├── index.html                  # Main semantic HTML structure
├── 404.html                    # Custom cyberpunk 404 error terminal
└── README.md                   # You are here
```

---

## 🛠️ Featured Repositories

The portfolio highlights 16 curated repositories across 3 core engineering domains:

1. **AI & Machine Learning**: Custom Convolutional Neural Networks, OpenRouter LLM implementations, and Image Processing filters.
2. **Data Analytics**: PySpark ETL pipelines on Databricks and MATLAB Digital Signal Processing.
3. **Backend & Systems**: Java-based game engines, MERN-stack apps, Flask security tools, and ACID-compliant relational SQL architectures.

---

## ⚙️ Customization

- **Contact Info**: Update your email and GitHub links in the `portfolioData.profile` object in `js/main.js` and the `mailto:` tags in `index.html`.
- **Adding Projects**: Append a new JSON object to the `portfolioData.projects` array in `js/main.js` and the grid will render it automatically.
- **Theming**: The entire site is governed by a strict set of CSS tokens at the top of `css/style.css`. Modify `--cyan`, `--magenta`, and `--bg-primary` to completely overhaul the visual identity.
