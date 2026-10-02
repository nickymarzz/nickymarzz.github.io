/**
 * Portfolio Interactive Logic & Recruiter Experience
 * Cyberpunk Redesign
 */

const portfolioData = {
  profile: {
    email: "nickymarzz.dev@gmail.com",
    github: "https://github.com/nickymarzz"
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
      ],
      metric: "Eliminated 95% of manual JSON schema debugging time"
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
      ],
      metric: "Achieved 94.2% validation accuracy on fresh vs. rotten sets"
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
      ],
      metric: "Reduced data processing pipeline latency by 40%"
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
      ],
      metric: "Handled 500+ concurrent student check-ins during peak hours"
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
      ],
      metric: "Optimized multi-ingredient join queries to under 50ms"
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
      ],
      metric: "Enforced 100% data integrity with zero orphan records"
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
      ],
      metric: "Processed real-time cipher transformations with <10ms latency"
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
      ],
      metric: "Streamlined academic workflow for 30+ university students"
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
      ],
      metric: "Improved page load speeds by 60% with React frontend"
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
      ],
      metric: "Secured 100% of transaction states via OOP encapsulation"
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
      ],
      metric: "Enhanced image SNR using edge-preserving noise reduction"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initHeroBootSequence();
  initGlitchOnLoad();
  initCounters();
  renderProjects("all");
  initFilters();
  initModal();
  initClipboard();
  initNavScroll();
  initScrollReveal();
  initCustomCursor();
  initHeroCanvas();
  
  // Enhancements
  initKonamiCode();
  initCommandPalette();
  initWireframeCanvas();
});

/* ==========================================================================
   Hero Boot Sequence & Glitch
   ========================================================================== */
function initHeroBootSequence() {
  const bootTextEl = document.getElementById("boot-sequence");
  const mainTitleEl = document.getElementById("main-hero-title");
  
  if (!bootTextEl || !mainTitleEl) return;
  
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    bootTextEl.style.display = 'none';
    mainTitleEl.classList.remove('hidden');
    return;
  }

  const lines = [
    "> initializing profile...",
    "> loading skills modules...",
    "> status: open to work",
    "> executing..."
  ];

  let currentLine = 0;
  let currentChar = 0;
  
  function typeLine() {
    if (currentLine >= lines.length) {
      setTimeout(() => {
        bootTextEl.style.display = 'none';
        mainTitleEl.classList.remove('hidden');
      }, 300);
      return;
    }
    
    if (currentChar < lines[currentLine].length) {
      bootTextEl.innerHTML = lines.slice(0, currentLine).join('<br>') + 
        (currentLine > 0 ? '<br>' : '') + 
        lines[currentLine].substring(0, currentChar + 1) + '<span class="blink">_</span>';
      currentChar++;
      setTimeout(typeLine, 30);
    } else {
      currentLine++;
      currentChar = 0;
      setTimeout(typeLine, 300);
    }
  }

  typeLine();
}

function initGlitchOnLoad() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const glitchElements = document.querySelectorAll('.glitch-text');
  glitchElements.forEach(el => {
    // Trigger animation manually on load
    el.style.animation = 'textGlitch 0.3s cubic-bezier(.25, .46, .45, .94) both 3';
    setTimeout(() => {
      el.style.animation = ''; // Reset for hover
    }, 1000);
  });
}

/* ==========================================================================
   Counters (System Readout)
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        let count = 0;
        const inc = target / 30; // speed
        
        const updateCount = () => {
          count += inc;
          if (count < target) {
            entry.target.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
          } else {
            entry.target.innerText = target;
          }
        };
        updateCount();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   Project Card Rendering & Category Filtering
   ========================================================================== */
function renderProjects(filterCategory) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  // Simple fade transition logic
  grid.style.opacity = 0;
  grid.style.transform = "translateY(10px)";
  
  setTimeout(() => {
    const filtered = filterCategory === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(p => p.category === filterCategory);

    grid.innerHTML = filtered.map(project => `
      <article class="project-card" data-category="${project.category}">
        <div class="project-card-header">
          <span class="project-badge">${project.badge}</span>
          <span class="project-category-tag">[${project.categoryName}]</span>
        </div>

        <h3 class="project-title glitch-text" data-text="${project.title}">${project.title}</h3>
        
        <div class="project-details">
          <p><strong>&gt; problem:</strong> ${project.problem}</p>
          <p><strong>&gt; built:</strong> ${project.solution}</p>
          <p><strong>&gt; result:</strong> <span class="metric-placeholder">${project.metric}</span></p>
        </div>

        <div class="project-tech-stack">
          ${project.tech.map(t => `<span class="tech-pill outlined">${t}</span>`).join("")}
        </div>

        <div class="project-actions">
          ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-cyber btn-sm"><i class="ph ph-browser"></i> Live Demo</a>` : ''}
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary-cyber btn-sm"><i class="ph ph-github-logo"></i> Source</a>` : ''}
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

    // Fade back in
    grid.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    grid.style.opacity = 1;
    grid.style.transform = "translateY(0)";
  }, 200);
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
      <span class="project-category-tag">[${project.categoryName}]</span>
    </div>
    <h2 class="modal-title glitch-text" data-text="${project.title}">${project.title}</h2>
    <p class="modal-tagline">> ${project.tagline}</p>

    <div class="modal-meta-grid">
      <div class="meta-box">
        <h4><i class="ph ph-warning-circle"></i> Error_Log: Problem</h4>
        <p>${project.problem}</p>
      </div>
      <div class="meta-box">
        <h4><i class="ph ph-check-circle"></i> Sys_Patch: Solution</h4>
        <p>${project.solution}</p>
      </div>
    </div>

    <div class="modal-highlights">
      <h4><i class="ph ph-sparkle"></i> Execution_Highlights</h4>
      <ul>
        ${project.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
    </div>

    <div class="modal-tech">
      <h4>Module_Dependencies</h4>
      <div class="project-tech-stack">
        ${project.tech.map(t => `<span class="tech-pill outlined">${t}</span>`).join("")}
      </div>
    </div>

    <div class="modal-footer-actions">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-cyber">
        <i class="ph ph-github-logo"></i>
        Access Source
      </a>
      <button class="btn btn-outline-cyber" onclick="document.getElementById('modal-close-btn').click()">
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
        showToast(`> copied: ${email}`);
        
        // Visual feedback on button
        const textSpan = btn.querySelector('.btn-text');
        if(textSpan) {
          const original = textSpan.innerText;
          textSpan.innerText = "> copied";
          setTimeout(() => { textSpan.innerText = original; }, 2000);
        }
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) return;

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
      const sectionTop = current.offsetTop - 150;
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

/* ==========================================================================
   Scroll Reveals
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-text, .reveal-fade, .reveal-slide-up');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  reveals.forEach(reveal => revealObserver.observe(reveal));
}

/* ==========================================================================
   Custom Neon Cursor
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if(!cursor) return;
  
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches || 
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow
  function animateCursor() {
    // Easing
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
  }
  requestAnimationFrame(animateCursor);

  // Hover effects
  const clickables = document.querySelectorAll('a, button, .skill-pill, .project-card, input, textarea');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}

/* ==========================================================================
   Hero Canvas (Falling Characters - light version)
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  
  let width, height;
  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const chars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
  const fontSize = 14;
  let columns = Math.floor(width / fontSize);
  const drops = [];
  
  for(let x = 0; x < columns; x++) {
    drops[x] = Math.random() * height; // start randomly
  }

  // Throttle framing
  let lastTime = 0;
  const fps = 20; // low fps for performance & aesthetic
  const interval = 1000/fps;

  function draw(time) {
    requestAnimationFrame(draw);
    
    const dt = time - lastTime;
    if(dt < interval) return;
    lastTime = time - (dt % interval);

    // faint trail
    ctx.fillStyle = 'rgba(10, 10, 18, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if(drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  requestAnimationFrame(draw);
}

/* ==========================================================================
   Konami Code Easter Egg
   ========================================================================== */
function initKonamiCode() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex] || e.key.toLowerCase() === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        document.documentElement.classList.toggle('magenta-mode');
        showToast('> override accepted: palette inverted');
        
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReduced) {
          document.body.style.animation = 'textGlitch 0.3s steps(2) 2';
          setTimeout(() => { document.body.style.animation = ''; }, 600);
        }
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
}

/* ==========================================================================
   Command Palette Section Jumper
   ========================================================================== */
function initCommandPalette() {
  const overlay = document.getElementById('cmd-palette-overlay');
  const input = document.getElementById('cmd-palette-input');
  const list = document.getElementById('cmd-palette-list');
  if (!overlay || !input || !list) return;

  const sections = [
    { name: 'Overview', id: 'overview', type: 'section' },
    { name: 'Skills', id: 'skills', type: 'section' },
    { name: 'Projects', id: 'projects', type: 'section' },
    { name: 'Education', id: 'education', type: 'section' },
    { name: 'Contact', id: 'contact', type: 'section' },
    { name: 'Copy Email', action: 'copy-email', type: 'action' },
    { name: 'GitHub', url: 'https://github.com/nickymarzz', type: 'link' }
  ];

  let activeIndex = 0;
  let filtered = [...sections];

  function renderList() {
    list.innerHTML = filtered.map((s, i) => 
      `<li class="${i === activeIndex ? 'active' : ''}" data-index="${i}">${s.name}</li>`
    ).join('');
    
    // Ensure active item is in view
    const activeEl = list.querySelector('.active');
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }

  function executeAction(item) {
    closePalette();
    if (item.type === 'section') {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'action' && item.action === 'copy-email') {
      document.querySelector('.copy-email-btn')?.click();
    } else if (item.type === 'link') {
      window.open(item.url, '_blank');
    }
  }

  function openPalette() {
    overlay.classList.add('active');
    input.value = '';
    filtered = [...sections];
    activeIndex = 0;
    renderList();
    setTimeout(() => input.focus(), 100);
  }

  function closePalette() {
    overlay.classList.remove('active');
    input.blur();
  }

  document.addEventListener('keydown', (e) => {
    // Open palette on '/' if not in an input/textarea
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openPalette();
    }
    // Close on Escape
    else if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closePalette();
    }
  });

  input.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    filtered = sections.filter(s => s.name.toLowerCase().includes(val));
    activeIndex = 0;
    renderList();
  });

  input.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active') || filtered.length === 0) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % filtered.length;
      renderList();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + filtered.length) % filtered.length;
      renderList();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      executeAction(filtered[activeIndex]);
    }
  });

  list.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li) {
      const idx = parseInt(li.getAttribute('data-index'), 10);
      executeAction(filtered[idx]);
    }
  });
  
  // Close when clicking outside
  document.getElementById('cmd-palette-backdrop')?.addEventListener('click', closePalette);
}

/* ==========================================================================
   Hero Wireframe Canvas (Tiny 2D)
   ========================================================================== */
function initWireframeCanvas() {
  const canvas = document.getElementById('wireframe-canvas');
  if (!canvas) return;
  
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || window.innerWidth < 768) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Basic 3D setup
  let vertices = [];
  let edges = [];
  
  // Generate a simple torus-like shape
  const R = 150; // Major radius
  const r = 50;  // Minor radius
  const segments = 12;
  const rings = 12;
  
  for(let i=0; i<rings; i++) {
    const theta = i * Math.PI * 2 / rings;
    for(let j=0; j<segments; j++) {
      const phi = j * Math.PI * 2 / segments;
      const x = (R + r * Math.cos(phi)) * Math.cos(theta);
      const y = (R + r * Math.cos(phi)) * Math.sin(theta);
      const z = r * Math.sin(phi);
      vertices.push({x, y, z});
      
      // Add edges
      const curr = i * segments + j;
      const nextJ = i * segments + ((j+1) % segments);
      const nextI = ((i+1) % rings) * segments + j;
      edges.push([curr, nextJ]);
      edges.push([curr, nextI]);
    }
  }

  let angleX = 0;
  let angleY = 0;
  let isVisible = true;
  let animationFrameId;

  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
  });
  observer.observe(canvas.parentElement);
  
  document.addEventListener("visibilitychange", () => {
    isVisible = !document.hidden && canvas.parentElement.getBoundingClientRect().top < window.innerHeight;
  });

  function draw() {
    animationFrameId = requestAnimationFrame(draw);
    if (!isVisible) return;
    
    ctx.clearRect(0, 0, width, height);
    
    // Position it slightly off-center to the right, behind hero text
    const cx = width * 0.7;
    const cy = height * 0.5;
    
    angleX += 0.005;
    angleY += 0.007;
    
    const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY), sinY = Math.sin(angleY);

    // Project points
    const projected = vertices.map(v => {
      // Rotate Y
      let x = v.x * cosY - v.z * sinY;
      let z = v.x * sinY + v.z * cosY;
      // Rotate X
      let y = v.y * cosX - z * sinX;
      z = v.y * sinX + z * cosX;
      
      const scale = 500 / (500 + z); // Perspective
      return {
        x: cx + x * scale,
        y: cy + y * scale,
        scale: scale
      };
    });

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)'; // Cyan with low opacity
    ctx.lineWidth = 1;
    ctx.beginPath();
    edges.forEach(edge => {
      const p1 = projected[edge[0]];
      const p2 = projected[edge[1],
    {
  id: "dsp-project",
  category: "data",
  categoryName: "Data & Analytics",
  title: "Digital Signal Processing Project",
  tagline: "Noise filtering, FFT, down sampling, and spectrograms in MATLAB",
  badge: "MATLAB / DSP",
  description: "A comprehensive digital signal processing suite covering frequency analysis, noise reduction, and spectral visualization.",
  problem: "Analyzing complex frequency domains requires robust mathematical modeling and spectral analysis tools.",
  solution: "Implemented Fast Fourier Transforms, downsampling algorithms, and filtering techniques.",
  metric: "Processed high-fidelity spectral analysis with 0% data loss",
  tech: [
    "MATLAB",
    "Signal Processing",
    "FFT",
    "Data Analysis"
  ],
  github: "https://github.com/nickymarzz/Digital-Signal-Processing-Project",
  highlights: []
},
    {
  id: "retro-java-game",
  category: "backend",
  categoryName: "Backend & Systems",
  title: "Java Retro Game Engine",
  tagline: "Intuitive Java-based retro game project",
  badge: "Java / Game Dev",
  description: "A custom 2D retro game developed from scratch using Java's core graphics and event-driven architecture.",
  problem: "Building a performant game loop in standard Java requires strict resource management and thread handling.",
  solution: "Developed a custom game engine with optimized rendering cycles and responsive keyboard event listeners.",
  metric: "Maintained a stable 60 FPS rendering cycle",
  tech: [
    "Java",
    "OOP",
    "Game Engine",
    "Event Listeners"
  ],
  github: "https://github.com/nickymarzz/javaproject",
  highlights: []
},
    {
  id: "keris2026-dev",
  category: "backend",
  categoryName: "Backend & Full-Stack",
  title: "KERIS Website Development",
  tagline: "Development build for the next-generation KERIS platform",
  badge: "Web Application",
  description: "A development repository for constructing the frontend interface and responsive architecture of the KERIS website.",
  problem: "Iterative UI/UX prototyping required a separate, safe development environment for component testing.",
  solution: "Utilized modern JavaScript and modular component structures to test and refine application layouts.",
  metric: "Accelerated component testing iteration cycles by 50%",
  tech: [
    "JavaScript",
    "HTML",
    "CSS",
    "Frontend Development"
  ],
  github: "https://github.com/nickymarzz/keris2026-dev",
  highlights: []
},
    {
  id: "spm-quiz-system",
  category: "backend",
  categoryName: "Backend & Full-Stack",
  title: "SPM Quiz Management System",
  tagline: "A web-based quiz management system for SPM Computer Science education",
  badge: "PHP / SQL",
  description: "An educational platform designed to administer, grade, and track quiz performance for computer science students.",
  problem: "Manual grading of computer science quizzes is inefficient and provides delayed feedback to students.",
  solution: "Built a dynamic PHP backend connected to a relational database to automate quiz delivery and score calculation.",
  metric: "Automated grading for 100% of student quiz submissions",
  tech: [
    "PHP",
    "SQL",
    "JavaScript",
    "Educational Tech"
  ],
  github: "https://github.com/nickymarzz/Project-Sains-Komputer-SPM",
  highlights: []
},
    {
  id: "wp-recipe-app",
  category: "backend",
  categoryName: "Backend & Full-Stack",
  title: "WorldPlate Web Client",
  tagline: "Frontend interface for the WorldPlate Database Project",
  badge: "Frontend Web",
  description: "The static client-side interface built for the 3rd-year database project, acting as the presentation layer for culinary queries.",
  problem: "Complex database relationships require an intuitive, accessible frontend for end-users to query recipes.",
  solution: "Designed a clean, responsive HTML/CSS interface mapping directly to backend API endpoints.",
  metric: "Delivered a responsive UI scaling seamlessly across 3 breakpoints",
  tech: [
    "HTML",
    "CSS",
    "UI/UX",
    "Frontend"
  ],
  github: "https://github.com/nickymarzz/WPrecipeapp",
  highlights: []
}];
      if(p1.scale > 0 && p2.scale > 0) {
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
    });
    ctx.stroke();
  }
  
  draw();
}
