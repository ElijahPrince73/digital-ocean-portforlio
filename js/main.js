const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
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
      "./assets/portfolio-images/Edward-Jones/first.png",
      "./assets/portfolio-images/Edward-Jones/summary.png",
      "./assets/portfolio-images/Edward-Jones/modal.png",
      "./assets/portfolio-images/Edward-Jones/performance-and-risk.png",
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
      "./assets/portfolio-images/Anheuser-Busch/login.png",
      "./assets/portfolio-images/Anheuser-Busch/register.png",
      "./assets/portfolio-images/Anheuser-Busch/question.png",
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
      "./assets/portfolio-images/1v1Me/GODMODE-DEMO.mp4",
      "./assets/portfolio-images/1v1Me/home.png",
      "./assets/portfolio-images/1v1Me/stake.png",
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
      "./assets/portfolio-images/AH4R/home.png",
      "./assets/portfolio-images/AH4R/listing.png",
      "./assets/portfolio-images/AH4R/home-id.png",
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

// Modal functions
function openModal(projectId) {
  const project = projects[projectId];
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

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Links
  const linksContainer = document.getElementById("modalLinks");
  const links = [];

  console.log(project);

  if (project.links.live) {
    links.push(
      `<a href="${project.links.live}" target="_blank" rel="noopener noreferrer" class="project-link">🌐 View Live Site</a>`
    );
  }

  if (links.length > 0) {
    linksContainer.innerHTML = `
                    <h3 style="color: var(--accent-primary); margin-bottom: 15px;">Project Links</h3>
                    <div class="project-links">${links.join("")}</div>
                `;
  } else {
    linksContainer.innerHTML = "";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "auto";
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

// Scroll reveal animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const highlightNav = () => {
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.style.color = "";
        link.style.background = "";
        if (link.getAttribute("href") === `#${id}`) {
          link.style.color = "var(--accent-primary)";
          link.style.background = "rgba(79, 70, 229, 0.08)";
        }
      });
    }
  });
};

window.addEventListener("scroll", highlightNav, { passive: true });
