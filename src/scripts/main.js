import Typed from "typed.js";
import { EXPERTISE_ITEMS } from "../data/experties-items";
import { getPinnedProject } from "./api";
import { createExpertiesCard, creatProjectCard } from "./ui";

async function app() {
  const res = await getPinnedProject();
  const pinnedProjects = res.data.user.pinnedItems.edges.map(
    (edge) => edge.node
  );
  pinnedProjects.forEach((project) => creatProjectCard(project));
  EXPERTISE_ITEMS.forEach((element) => createExpertiesCard(element));
}

const jobs = new Typed("#jobs", {
  strings: ["Software Engineer", "Tech Enthusiast"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
  showCursor: false,
  preStringTyped: () => {
    document.getElementById("jobs").style.opacity = "1";
  },
});

app();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".link");

  function removeCurrentClass() {
    navLinks.forEach((link) => link.classList.remove("current-link"));
  }

  function setActiveLink(targetLink) {
    removeCurrentClass();
    targetLink?.classList.add("current-link");
  }

  // Create an intersection observer to watch sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentHash = "#" + entry.target.id;
          const activeLink = Array.from(navLinks).find(
            (link) => link.getAttribute("href") === currentHash
          );
          setActiveLink(activeLink);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "-10% 0px -10% 0px", // Adjust rootMargin to control when the section is considered active
    }
  );

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("href").substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setActiveLink(this);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileHeader = document.getElementById("mobile-header");
  const projectsSection = document.getElementById("projects");

  function checkScroll() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      const projectsPosition = projectsSection.getBoundingClientRect().top;
      if (projectsPosition <= 0) {
        mobileHeader.classList.remove("hidden");
      } else {
        mobileHeader.classList.add("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkScroll);
  // Initial check
  checkScroll();
});
