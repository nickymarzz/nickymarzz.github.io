# Nick (nickymarzz) - Developer Portfolio

A minimalist, high-performance developer portfolio website designed specifically for recruiters, hiring managers, and technical evaluators to assess skills, repositories, and engineering background in 30 seconds or less.

## 🚀 Live Deployment with GitHub Actions

This repository is configured to automatically deploy to **GitHub Pages** using **GitHub Actions** whenever changes are pushed to the `main` branch.

### Enabling GitHub Pages via GitHub Actions (One-Time Setup)

1. Push this repository to your GitHub account (e.g. `https://github.com/nickymarzz/portfolio` or `nickymarzz.github.io`).
2. Go to your repository on GitHub: **Settings** > **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will automatically run on every push to `main` and publish the site to your GitHub Pages URL (e.g., `https://nickymarzz.github.io/portfolio/`).

---

## 🎯 Recruiter-Focused Features

- **At-A-Glance Candidate Screening**: Clear breakdown of target roles (Associate Software Engineer, Backend Developer, AI/Data Engineer), engineering competencies, and availability.
- **Interactive Project Filtering**: Filter projects instantly across **AI & Machine Learning**, **Data Analytics**, and **Backend & Systems**.
- **Architecture Deep-Dive Modals**: Click "Architecture & Details" on any project to view the exact problem, solution, and technical implementation without leaving the page.
- **1-Click Recruiter Actions**: Instant email copy to clipboard with feedback toast notification, direct GitHub links, and resume access.
- **Zero-Dependency Fast Loading**: Built with clean semantic HTML5, Vanilla CSS, and modular JavaScript with dark and light mode persistence.

---

## 📂 Project Structure

```
d:\Github Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deployment to GitHub Pages
├── assets/
│   └── favicon.svg             # Minimalist SVG logo
├── css/
│   └── style.css               # Design system tokens, light/dark themes, responsive grid
├── js/
│   └── main.js                 # Project data catalog, filtering, modal logic, clipboard
├── index.html                  # Recruiter-optimized semantic structure
└── README.md                   # Setup & deployment guide
```

---

## 🛠️ Featured Repositories

| Project | Domain | Key Technologies |
| :--- | :--- | :--- |
| [AI-Config-Auto-Repair](https://github.com/nickymarzz/AI-Config-Auto-Repair) | AI & Automation | Python, OpenRouter AI, Telegram Bot API, Watchdog |
| [Food-Freshness-Image-Prediction-System](https://github.com/nickymarzz/Food-Freshness-Image-Prediction-System) | Computer Vision | Python, TensorFlow, Keras, CNN, OpenCV |
| [databricksproject](https://github.com/nickymarzz/databricksproject) | Data Analytics | Databricks, PySpark, SQL, Data Modeling |
| [Sejong-Gym-Check-in-App](https://github.com/nickymarzz/Sejong-Gym-Check-in-App) | Web Application | JavaScript, REST API, Capacity Management |
| [WorldPlate-Recipe-App-Database](https://github.com/nickymarzz/WorldPlate-Recipe-App-Database) | Relational Databases | JavaScript, SQL (3NF Schema), Web APIs |
| [UniDB-Database-Project](https://github.com/nickymarzz/UniDB-Database-Project) | Database Systems | JavaScript, ACID Modeling, SQL Queries |
| [cryptography-flask-app](https://github.com/nickymarzz/cryptography-flask-app) | Backend & Security | Python, Flask, Cipher Suite |

---

## ⚙️ Customization

- **Contact Email / Links**: Update `portfolioData.profile` in [`js/main.js`](js/main.js) and `mailto:` in [`index.html`](index.html).
- **Adding Projects**: Add a new object to the `portfolioData.projects` array in [`js/main.js`](js/main.js).
