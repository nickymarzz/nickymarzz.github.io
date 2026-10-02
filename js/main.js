/**
 * Portfolio Interactive Logic & Recruiter Experience
 * Nick (nickymarzz) - Software Developer | AI | Data
 */

const portfolioData = {
  profile: {
    name: "Nick",
    handle: "nickymarzz",
    role: "Software Developer",
    focus: "AI Systems • Data Pipelines • Backend Engineering",
    location: "Seoul, South Korea",
    education: "Sejong University",
    status: "Open to Full-Time & Internship Opportunities",
    email: "nickymarzz.dev@gmail.com", // Recruiter direct email (easily customizable)
    github: "https://github.com/nickymarzz",
    linkedin: "https://linkedin.com/in/nickymarzz",
  },
  projects: [
    {
      id: "ai-config-repair",
      category: "ai",
      categoryName: "AI & Automation",
      title: "AI Config Auto-Repair Watchdog",
      tagline: "Autonomous real-time syntax monitoring & self-healing daemon with Telegram human-in-the-loop approval",
      badge: "Featured AI Project",
      description: "An automated watchdog service that monitors JSON configuration files, catches syntax and schema anomalies in real time, generates fixes using LLM APIs via OpenRouter, and allows developers to review and approve patches with a single tap in Telegram.",
      problem: "Configuration syntax errors in production or staging environments often break services silently before developers notice.",
      solution: "Implemented an event-driven file observer with schema validation, automated LLM prompt generation for syntax recovery, and a secure interactive Telegram bot workflow for 1-click approval.",
      tech: ["Python", "OpenRouter AI", "Telegram Bot API", "Watchdog", "JSON Schema"],
      github: "https://github.com/nickymarzz/AI-Config-Auto-Repair",
      highlights: [
        "Real-time file system monitoring with instant syntax error detection",
        "Autonomous prompt engineering for structured JSON correction",
        "Interactive Telegram webhook flow for human-in-the-loop governance"
      ]
    },
    {
      id: "food-freshness-cnn",
      category: "ai",
      categoryName: "AI & Computer Vision",
      title: "Food Freshness Image Classification System",
      tagline: "Deep learning convolutional neural network (CNN) for agricultural produce quality grading",
      badge: "Computer Vision",
      description: "A computer vision system designed to inspect fruits and vegetables and classify their freshness stage using custom Convolutional Neural Networks (CNNs) built with TensorFlow and Keras.",
      problem: "Manual produce inspection in supply chain logistics is subjective, error-prone, and time-intensive.",
      solution: "Constructed an end-to-end computer vision pipeline featuring data augmentation, CNN feature extraction, hyperparameter tuning, and comprehensive confusion matrix evaluation.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Jupyter Notebook"],
      github: "https://github.com/nickymarzz/Food-Freshness-Image-Prediction-System",
      highlights: [
        "End-to-end dataset preprocessing & image augmentation pipeline",
        "Multi-class convolutional neural network architecture",
        "High accuracy validation on fresh vs. rotten produce datasets"
      ]
    },
    {
      id: "databricks-analytics",
      category: "data",
      categoryName: "Data & Analytics",
      title: "Databricks Analytics & Executive Dashboard",
      tagline: "Scalable data ingestion, distributed transformation, and executive BI metric visualization",
      badge: "Data Engineering",
      description: "A comprehensive data processing and analytical dashboard solution built using Databricks notebooks, PySpark transformations, and SQL analytics to uncover key business patterns.",
      problem: "Raw unstructured datasets require scalable ETL pipelines to derive clean, actionable business intelligence.",
      solution: "Leveraged distributed Databricks runtime to process and normalize complex datasets, running analytical SQL queries and building automated visual KPI dashboards.",
      tech: ["Databricks", "PySpark", "SQL", "Data Cleaning", "ETL", "Jupyter"],
      github: "https://github.com/nickymarzz/databricksproject",
      highlights: [
        "Distributed PySpark data transformations & schema normalization",
        "Analytical data modeling and aggregation queries",
        "Executive dashboard for quick stakeholder evaluation"
      ]
    },
    {
      id: "sejong-gym",
      category: "backend",
      categoryName: "Backend & Full-Stack",
      title: "Sejong Gym Access & Capacity Manager (SGC)",
      tagline: "Real-time student check-in, facility reservation, and live capacity tracking web app",
      badge: "Web Application",
      description: "A specialized web application engineered for Sejong University's gymnasium to streamline student attendance, manage facility time slots, and prevent overcrowding through live capacity tracking.",
      problem: "Campus fitness centers faced congested front-desk check-in bottlenecks and lack of real-time capacity visibility.",
      solution: "Developed an interactive web platform with student authentication, appointment scheduling, and automated capacity counting with administrative controls.",
      tech: ["JavaScript", "Full-Stack Web", "REST API", "Database Systems", "HTML5/CSS3"],
      github: "https://github.com/nickymarzz/Sejong-Gym-Check-in-App",
      highlights: [
        "Live capacity tracking and queue reduction for university students",
        "Automated check-in timestamps and user booking management",
        "Clean, responsive interface optimized for mobile student access"
      ]
    },
    {
      id: "worldplate-db",
      category: "backend",
      categoryName: "Databases & Backend",
      title: "WorldPlate Relational Database Application",
      tagline: "Multi-tier culinary platform featuring 3NF normalized schema design and complex queries",
      badge: "Database Systems",
      description: "A full-stack culinary database system designed to handle complex relationships between global recipes, nutritional information, multi-step directions, and user interactions.",
      problem: "Modeling many-to-many relationships in multi-ingredient culinary databases often leads to redundancy and slow queries.",
      solution: "Designed and implemented a 3NF normalized database schema with indexed foreign keys, supporting dynamic search, filtering by dietary constraints, and CRUD operations.",
      tech: ["JavaScript", "SQL", "Relational Database", "Backend API", "CSS3"],
      github: "https://github.com/nickymarzz/WorldPlate-Recipe-App-Database",
      highlights: [
        "Third Normal Form (3NF) relational schema with referential integrity",
        "Optimized SQL queries for ingredient matching and filtering",
        "Full-stack interface connecting client queries with backend data"
      ]
    },
    {
      id: "unidb-system",
      category: "backend",
      categoryName: "Databases & Backend",
      title: "UniDB University Management Database",
      tagline: "Academic administration platform with ACID compliance and optimized query structures",
      badge: "Database Systems",
      description: "A university database architecture and application managing student enrollments, course catalogs, faculty departments, and grading systems with strict data integrity.",
      problem: "Academic records demand strict consistency, prerequisite validation, and concurrency control.",
      solution: "Implemented comprehensive relational schema with primary/foreign key constraints, audit records, and dynamic frontend query workflows.",
      tech: ["JavaScript", "SQL", "Relational Modeling", "Database Administration"],
      github: "https://github.com/nickymarzz/UniDB-Database-Project",
      highlights: [
        "Comprehensive academic entity-relationship model",
        "Data validation constraints ensuring zero orphan records",
        "Interactive dashboard for student & course queries"
      ]
    },
    {
      id: "crypto-flask",
      category: "backend",
      categoryName: "Backend & Systems",
      title: "Cryptographic Tools & Cipher Suite",
      tagline: "Python & Flask application demonstrating algorithmic encryption techniques with GUI",
      badge: "Python / Security",
      description: "A security and encryption utility built with Python and Flask, providing an interactive GUI to perform and visualize cryptographic cipher operations in real time.",
      problem: "Understanding encryption and decryption workflows requires accessible, visual interactive tooling.",
      solution: "Engineered a clean Flask web service implementing various encryption algorithms with instant encode/decode feedback.",
      tech: ["Python", "Flask", "Cryptography", "REST API", "HTML/CSS"],
      github: "https://github.com/nickymarzz/cryptography-flask-app",
      highlights: [
        "Real-time algorithmic transformation and cipher analysis",
        "Modular Python backend architecture with Flask routing",
        "Clean, responsive GUI for testing and inspection"
      ]
    },
    {
      id: "studyflow-app",
      category: "backend",
      categoryName: "Backend & Full-Stack",
      title: "StudyFlow Task Management",
      tagline: "Lightweight, open-source task and project management tool designed for university students",
      badge: "MERN Stack",
      description: "A robust task and project management platform built to help students and academic teams organize their workflows, featuring real-time updates and task tracking.",
      problem: "University students often struggle with tracking assignments across multiple courses using fragmented tools.",
      solution: "Developed a centralized, open-source management platform using the MERN stack to streamline academic project workflows.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
      github: "https://github.com/nickymarzz/studyflow-app",
      highlights: [
        "Full-stack MERN architecture for scalable state management",
        "Open-source academic tool optimized for student workflows",
        "Real-time task tracking and organizational tools"
      ]
    },
    {
      id: "kerisfullstack-rework",
      category: "backend",
      categoryName: "Backend & Full-Stack",
      title: "KERIS Fullstack Platform",
      tagline: "Modern web application rework built with the MERN stack",
      badge: "Web Application",
      description: "A full-stack website rework for KERIS, upgrading previous infrastructure to a modern JavaScript ecosystem to improve performance and user experience.",
      problem: "Legacy web infrastructure lacked the responsiveness and dynamic data management required by modern users.",
      solution: "Re-engineered the platform from the ground up using MongoDB, Express, React, and Node.js for a cohesive full-stack experience.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
      github: "https://github.com/nickymarzz/kerisfullstack-rework",
      highlights: [
        "Complete platform rework using modern JavaScript frameworks",
        "Responsive React frontend connected to an Express backend",
        "Dynamic data management with MongoDB"
      ]
    },
    {
      id: "bank-management-system",
      category: "backend",
      categoryName: "Backend & Systems",
      title: "Bank Management System",
      tagline: "Efficient Java-based application for secure financial transactions and account management",
      badge: "Java / Systems",
      description: "A robust financial system built in Java that handles core banking operations including account creation, deposits, withdrawals, and balance inquiries with secure state management.",
      problem: "Financial operations require strict data consistency, encapsulation, and error handling to prevent transaction anomalies.",
      solution: "Implemented an object-oriented Java application utilizing strict access controls, transaction validation, and comprehensive error handling.",
      tech: ["Java", "OOP", "Systems Engineering"],
      github: "https://github.com/nickymarzz/Bank-Management-System",
      highlights: [
        "Object-oriented design principles ensuring data encapsulation",
        "Robust transaction validation and error handling",
        "Efficient state management for financial accounts"
      ]
    },
    {
      id: "image-processing-project",
      category: "ai",
      categoryName: "AI & Computer Vision",
      title: "Digital Image Processing Pipeline",
      tagline: "Bilateral filtering for denoising and bicubic interpolation for image scaling",
      badge: "Image Processing",
      description: "A comprehensive digital signal and image processing project focused on algorithmic transformations to enhance image quality, including noise reduction and high-quality upscaling.",
      problem: "Raw images often suffer from noise and pixelation when scaled, requiring mathematical models for correction.",
      solution: "Developed custom pipelines using Jupyter and MATLAB to apply bilateral filtering for edge-preserving denoising and bicubic interpolation for smooth scaling.",
      tech: ["Jupyter", "MATLAB", "Python", "Computer Vision", "Signal Processing"],
      github: "https://github.com/nickymarzz/Image-Processing-Project",
      highlights: [
        "Edge-preserving noise reduction via bilateral filtering",
        "High-fidelity image scaling using bicubic interpolation",
        "Algorithmic digital signal processing implementations"
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("all");
  initFilters();
  initModal();
  initClipboard();
  initNavScroll();
});

/* ==========================================================================
   Theme Switcher (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (icon) {
    icon.className = theme === "dark" ? "ph ph-sun" : "ph ph-moon";
  }
}

/* ==========================================================================
   Project Card Rendering & Category Filtering
   ========================================================================== */
function renderProjects(filterCategory) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered = filterCategory === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filterCategory);

  grid.innerHTML = filtered.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-card-header">
        <span class="project-badge">${project.badge}</span>
        <span class="project-category-tag">${project.categoryName}</span>
      </div>

      <h3 class="project-title">${project.title}</h3>
      <p class="project-tagline">${project.tagline}</p>

      <p class="project-desc">${project.description}</p>

      <div class="project-tech-stack">
        ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
      </div>

      <div class="project-actions">
        <button class="btn btn-secondary btn-sm open-details-btn" data-id="${project.id}">
          <i class="ph ph-file-text"></i>
          Architecture
        </button>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="View ${project.title} on GitHub">
          <i class="ph ph-github-logo"></i>
          GitHub
        </a>
      </div>
    </article>
  `).join("");

  // Attach event listeners to newly rendered detail buttons
  document.querySelectorAll(".open-details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-id");
      openProjectModal(projectId);
    });
  });
}

function initFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   Project Details Modal
   ========================================================================== */
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-project-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header-meta">
      <span class="project-badge">${project.badge}</span>
      <span class="project-category-tag">${project.categoryName}</span>
    </div>
    <h2 class="modal-title">${project.title}</h2>
    <p class="modal-tagline">${project.tagline}</p>

    <div class="modal-meta-grid">
      <div class="meta-box">
        <h4><i class="ph ph-warning-circle"></i> The Problem</h4>
        <p>${project.problem}</p>
      </div>
      <div class="meta-box">
        <h4><i class="ph ph-check-circle"></i> The Technical Solution</h4>
        <p>${project.solution}</p>
      </div>
    </div>

    <div class="modal-highlights">
      <h4><i class="ph ph-sparkle"></i> Key Technical Highlights</h4>
      <ul>
        ${project.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-tech">
      <h4>Technologies & Libraries</h4>
      <div class="project-tech-stack">
        ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join("")}
      </div>
    </div>

    <div class="modal-footer-actions">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <i class="ph ph-github-logo"></i>
        Inspect Source Repository
      </a>
      <button class="btn btn-secondary" onclick="document.getElementById('modal-close-btn').click()">
        Close
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   Copy Email & Toast Notification
   ========================================================================== */
function initClipboard() {
  const copyButtons = document.querySelectorAll(".copy-email-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const email = btn.getAttribute("data-email") || portfolioData.profile.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="ph ph-check"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ==========================================================================
   Navigation & Smooth Scroll
   ========================================================================== */
function initNavScroll() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}
