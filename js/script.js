/* =========================
   TYPING LOOP EFFECT
========================= */
const typingEl = document.getElementById("typing");
const text = "Khansa Rasendriya A";
let index = 0;
let isDeleting = false;

function typingLoop() {
  if (!typingEl) return;

  if (!isDeleting) {
    typingEl.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }
  } else {
    typingEl.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typingLoop, isDeleting ? 60 : 100);
}

typingLoop();

/* =========================
   SCROLL FADE-IN ANIMATION
========================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* =========================
   EXPANDABLE CARD LOGIC
========================= */
const expandableCards = document.querySelectorAll(".expandable");

expandableCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Tutup card lain
    expandableCards.forEach((other) => {
      if (other !== card) {
        other.classList.remove("active");
      }
    });

    // Toggle card yang diklik
    card.classList.toggle("active");
  });
});

/* =========================
   ACTIVE NAVBAR ON SCROLL
========================= */
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
