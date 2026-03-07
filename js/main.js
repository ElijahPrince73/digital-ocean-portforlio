const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Project data
const projects = {
  project1: {
    title: "Portfolio Performance & Analyzer",
    company: "Edward Jones",
    description:
      "A comprehensive enterprise-level investment management platform that enables financial advisors to track, analyze, and report on client portfolio performance. The application provides real-time data visualization, customizable reporting, and detailed analytics for investment accounts across multiple asset classes.",
    screenshots: [
      "./assets/portfolio-images/Edward-Jones/first.webp",
      "./assets/portfolio-images/Edward-Jones/summary.webp",
      "./assets/portfolio-images/Edward-Jones/modal.webp",
      "./assets/portfolio-images/Edward-Jones/performance-and-risk.webp",
    ],
    features: [
      "Real-time portfolio performance tracking with interactive charts",
      "Customizable date ranges and trailing period analysis",
      "Detailed asset allocation breakdown by security type",
      "Performance comparison against benchmarks",
      "Multi-account relationship management",
      "Exportable reports and data visualization",
      "Risk/volatility analysis with Sharpe ratio calculations",
      "Responsive design for desktop and tablet devices",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Webpack",
      "Storybook",
      "Micro Frontend Architecture",
    ],
    links: {
      live: "",
      github: "",
      caseStudy: "",
    },
  },
  project2: {
    title: "Survey Questionnaire & Results Dashboard",
    company: "Anheuser-Busch",
    description:
      "A lightweight, full-stack web application designed to collect structured user feedback in a simple, reliable way. Users complete surveys through an intuitive React-based interface, while a Node.js backend securely handles submissions, validation, and storage of responses. Built to empower non-technical teams to gather insights, review results, and use real user feedback to guide product decisions.",
    screenshots: [
      "./assets/portfolio-images/Anheuser-Busch/login.webp",
      "./assets/portfolio-images/Anheuser-Busch/register.webp",
      "./assets/portfolio-images/Anheuser-Busch/question.webp",
    ],
    features: [
      "User-friendly survey interface with multiple question types",
      "Real-time form validation and error handling",
      "Secure backend API for collecting and storing responses",
      "MongoDB database for flexible data storage",
      "Results dashboard for analyzing survey responses",
      "Export capabilities for data analysis",
      "Responsive design for mobile and desktop completion",
      "Built as sole developer handling both frontend and backend",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: {
      live: "",
      github: "",
      caseStudy: "",
    },
  },
  project3: {
    title: "E-Sports Betting Platform & Management Dashboard",
    company: "1 V 1 Me",
    description:
      "A dynamic web platform that brought competitive player matchups to the browser. Users could watch players compete live, place wagers on individual matchups, and follow results in real-time. The web experience expanded on the mobile app by making matches easier to view, wagers easier to place, and player activity easier to track. The platform included comprehensive internal dashboards that empowered support and marketing teams to manage users, monitor activity, and respond quickly during live gaming events.",
    screenshots: [
      "./assets/portfolio-images/1v1Me/Play Tab.webp",
      "./assets/portfolio-images/1v1Me/Default.webp",
      "./assets/portfolio-images/1v1Me/time-till-tournament-start.webp",
      "./assets/portfolio-images/1v1Me/Place A Stake.webp",
      "./assets/portfolio-images/1v1Me/GODMODE-DEMO.mp4",
    ],
    features: [
      "Real-time live match viewing and streaming integration",
      "Interactive wagering system with instant bet placement",
      "Live results tracking and match outcome updates",
      "Player profile management and activity monitoring",
      "Admin dashboard for user management and moderation",
      "Marketing team tools for campaign management",
      "Support team interface for quick incident response",
      "Web platform features that expanded beyond iOS app capabilities",
      "Real-time event monitoring during live competitions",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Real-time WebSockets",
    ],
    link: "https://www.1v1me.com/",
    links: {
      live: "https://www.1v1me.com/",
      github: "",
      caseStudy: "",
    },
  },
  project4: {
    title: "Property Management & Rental Platform",
    company: "American Homes 4 Rent",
    description:
      "Enterprise-scale web applications supporting the full lifecycle of renting and managing single-family homes across a national portfolio. The platform enabled prospective renters to search available homes, view property details, apply online, and complete the leasing process digitally. For residents, the application provided comprehensive tools to manage their tenancy, including viewing lease information, making payments, and submitting maintenance requests. Internal dashboards and workflows helped operations and support teams efficiently manage properties, tenants, and service requests at scale.",
    screenshots: [
      "./assets/portfolio-images/AH4R/home.webp",
      "./assets/portfolio-images/AH4R/listing.webp",
      "./assets/portfolio-images/AH4R/home-id.webp",
    ],
    features: [
      "Property search and discovery with advanced filtering",
      "Detailed property listings with photos and virtual tours",
      "Digital rental application and approval workflow",
      "Online lease management and document signing",
      "Resident portal for payment processing",
      "Maintenance request submission and tracking system",
      "Internal operations dashboard for property management",
      "Support team tools for tenant assistance",
      "Service request workflow management",
      "Micro frontend architecture for enterprise scalability",
      "Multi-team collaboration across large codebase",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Micro Frontends",
      "Enterprise Architecture",
      "REST APIs",
    ],
    link: "https://www.amh.com/",
    links: {
      live: "https://www.amh.com/",
      github: "",
      caseStudy: "",
    },
  },
};

let currentSlide = 0;
let currentProject = null;
let lenis = null;

function splitHeroText() {
  const heroName = document.getElementById("heroName");
  if (!heroName) return [];

  const text = heroName.getAttribute("data-split-text") || heroName.textContent.trim();
  heroName.innerHTML = "";

  const chars = text.split("").map((char) => {
    if (char === " ") {
      const space = document.createElement("span");
      space.className = "char char-space";
      space.innerHTML = "&nbsp;";
      heroName.appendChild(space);
      return space;
    }

    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char;
    heroName.appendChild(span);
    return span;
  });

  return chars;
}

function initLenis() {
  if (reduceMotion || typeof Lenis === "undefined") return;

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    normalizeWheel: true,
    wheelMultiplier: 0.92,
    prevent: (node) => {
      // Let the modal scroll natively — don't let Lenis touch it
      return node.closest(".modal.active") !== null;
    },
  });

  lenis.on("scroll", () => {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.update();
    }
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -90, duration: 1.15 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function initCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (reduceMotion || isTouch || !dot || !ring) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let rx = x;
  let ry = y;

  const move = (e) => {
    x = e.clientX;
    y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  };

  window.addEventListener("mousemove", move, { passive: true });

  const animateRing = () => {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  };

  requestAnimationFrame(animateRing);

  const hoverTargets = document.querySelectorAll(
    "a, button, .project-card, .skill-tag, .competency-item"
  );

  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      ring.classList.add("active");
    });
    target.addEventListener("mouseleave", () => {
      ring.classList.remove("active");
    });
  });

  if (typeof gsap !== "undefined") {
    gsap.to([dot, ring], { autoAlpha: 1, duration: 0.35, delay: 0.1 });
  } else {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  }
}

function initMagnetic() {
  if (reduceMotion) return;

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 16;

    el.addEventListener("mousemove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: (x / rect.width) * strength,
        y: (y / rect.height) * strength,
        duration: 0.35,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1,0.35)" });
    });
  });
}

function initProjectTilt() {
  if (reduceMotion) return;

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -7;
      const rotateY = ((x / rect.width) - 0.5) * 9;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

function initGsapReveals() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  if (reduceMotion) {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  document.querySelectorAll("section.reveal, footer.reveal").forEach((section) => {
    const revealType = section.dataset.reveal;

    // For types that animate children, make the section container itself visible
    if (revealType && revealType !== "fade-up") {
      gsap.fromTo(
        section,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    }

    if (revealType === "stagger") {
      const items = section.querySelectorAll(".reveal-item");
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
        }
      );
    }

    if (revealType === "timeline") {
      document.querySelectorAll(".timeline-item").forEach((item) => {
        const direction = item.dataset.direction === "left" ? -72 : 72;
        gsap.fromTo(
          item,
          { autoAlpha: 0, x: direction },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.86,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 84%",
            },
          }
        );
      });
    }

    if (revealType === "projects") {
      const cards = section.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 54 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.82,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
          },
        }
      );
    }

    if (revealType === "skills") {
      const tags = section.querySelectorAll(".skill-tag");
      gsap.fromTo(
        tags,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.56,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll(".skill-category"),
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
          },
        }
      );
    }

    if (!revealType || revealType === "fade-up") {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
          },
        }
      );
    }
  });

  gsap.to(".hero-inner", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function initLoadSequence() {
  const chars = splitHeroText();
  const subtitle = document.getElementById("heroSubtitle");
  const nav = document.querySelector(".site-nav");
  const indicator = document.getElementById("scrollIndicator");

  if (reduceMotion || typeof gsap === "undefined") {
    if (subtitle) subtitle.textContent = "Senior Front End Developer";
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
    return;
  }

  gsap.set(nav, { y: -18, autoAlpha: 0 });
  gsap.set(chars, { yPercent: 110, autoAlpha: 0, rotateX: -20 });
  gsap.set(subtitle, { autoAlpha: 0, y: 8 });
  gsap.set(indicator, { autoAlpha: 0, y: 10 });

  const fullSubtitle = "Senior Front End Developer";
  if (subtitle) subtitle.textContent = "";

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(chars, {
    yPercent: 0,
    autoAlpha: 1,
    rotateX: 0,
    duration: 0.85,
    stagger: 0.028,
  })
    .to(nav, { y: 0, autoAlpha: 1, duration: 0.48 }, "-=0.42")
    .to(subtitle, { autoAlpha: 1, y: 0, duration: 0.35 }, "-=0.2")
    .call(() => {
      if (!subtitle) return;

      let i = 0;
      const writer = setInterval(() => {
        subtitle.textContent = fullSubtitle.slice(0, i + 1);
        i += 1;
        if (i >= fullSubtitle.length) clearInterval(writer);
      }, 30);
    })
    .to(indicator, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.1")
    .to(
      ".scroll-line",
      {
        opacity: 0.35,
        repeat: -1,
        yoyo: true,
        duration: 0.95,
      },
      "-=0.05"
    );
}

function initProjectCardKeyboard() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
}

function highlightNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  const scrollY = window.scrollY + 140;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

const scrollIndicator = document.getElementById("scrollIndicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const profile = document.getElementById("profile");
    if (!profile) return;

    if (lenis) {
      lenis.scrollTo(profile, { offset: -90, duration: 1.15 });
    } else {
      profile.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Modal functions
function openModal(projectId) {
  const project = projects[projectId];
  if (!project) return;

  currentProject = project;
  currentSlide = 0;
  const modal = document.getElementById("projectModal");

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalCompany").textContent = project.company;
  document.getElementById("modalDescription").textContent = project.description;

  // Create carousel slides
  const slidesContainer = document.getElementById("carouselSlides");
  slidesContainer.innerHTML = project.screenshots
    .map((screenshot) => {
      if (screenshot.endsWith(".mp4")) {
        return `
                <div class="carousel-slide">
                     <video controls>
                      <source src="${screenshot}" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
            `;
      } else {
        return `
                <div class="carousel-slide">
                    <img src="${screenshot}" alt="Project screenshot" />
                </div>
            `;
      }
    })
    .join("");

  // Create indicators
  const indicatorsContainer = document.getElementById("carouselIndicators");
  indicatorsContainer.innerHTML = project.screenshots
    .map(
      (_, index) => `
                <div class="carousel-indicator ${
                  index === 0 ? "active" : ""
                }" onclick="goToSlide(${index})"></div>
            `
    )
    .join("");

  // Features
  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = project.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  // Tech
  const techContainer = document.getElementById("modalTech");
  techContainer.innerHTML = project.tech
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  // Links
  const linksContainer = document.getElementById("modalLinks");
  const links = [];

  if (project.links.live) {
    links.push(
      `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="project-link">View Live Site</a>`
    );
  }

  if (links.length > 0) {
    linksContainer.innerHTML = `
                    <h3>Project Links</h3>
                    <div class="project-links">${links.join("")}</div>
                `;
  } else {
    linksContainer.innerHTML = "";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  if (lenis) lenis.stop();

  // Ensure modal content scrolls independently
  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) {
    modalContent.scrollTop = 0;
  }

  // Animate modal body content in with stagger
  if (typeof gsap !== "undefined" && !reduceMotion) {
    const bodyEls = modal.querySelectorAll(
      ".modal-body h3, .modal-body p, .modal-body .carousel-container, .modal-body .feature-list, .modal-body .project-tech, .modal-body #modalLinks"
    );
    gsap.fromTo(
      bodyEls,
      { autoAlpha: 0, y: 18 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.25,
      }
    );
  }
}

function changeSlide(direction) {
  if (!currentProject) return;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = currentProject.screenshots.length - 1;
  } else if (currentSlide >= currentProject.screenshots.length) {
    currentSlide = 0;
  }

  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  const slidesContainer = document.getElementById("carouselSlides");
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update indicators
  const indicators = document.querySelectorAll(".carousel-indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function closeModal(event) {
  if (
    !event ||
    event.target.id === "projectModal" ||
    event.target.classList.contains("modal-close")
  ) {
    const modal = document.getElementById("projectModal");
    modal.classList.remove("active");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    if (lenis) lenis.start();
    currentProject = null;
    currentSlide = 0;
  }
}

// Close modal on escape key and add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  } else if (e.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (e.key === "ArrowRight") {
    changeSlide(1);
  }
});

initLenis();
initSmoothAnchors();
initCursor();
initMagnetic();
initProjectTilt();
initProjectCardKeyboard();
initLoadSequence();
initGsapReveals();
highlightNav();

window.addEventListener("scroll", highlightNav, { passive: true });
window.addEventListener("resize", () => {
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
});
