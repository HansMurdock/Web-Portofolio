/* =========================
   NAVBAR SCROLL BEHAVIOR
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
  ".section, .hero-left, .hero-right"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  revealObserver.observe(el);
});


/* =========================
   HERO TYPING EFFECT
========================= */
const heroTitle = document.querySelector(".hero-left h1");

if (heroTitle) {
  const originalText = heroTitle.textContent;
  let index = 0;
  let deleting = false;

  function typingEffect() {
    if (!deleting) {
      heroTitle.textContent = originalText.substring(0, index + 1);
      index++;

      if (index === originalText.length) {
        setTimeout(() => deleting = true, 1500);
      }
    } else {
      heroTitle.textContent = originalText.substring(0, index - 1);
      index--;

      if (index === 0) {
        deleting = false;
      }
    }

    setTimeout(typingEffect, deleting ? 60 : 100);
  }

  typingEffect();
}

// =======================
// PORTFOLIO MODAL
// =======================

const items = document.querySelectorAll(".portfolio-item");
const modal = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.querySelector(".close-modal");

items.forEach(item => {
  item.addEventListener("click", () => {
    modalTitle.textContent = item.dataset.title;
    modalDesc.textContent = item.dataset.desc;
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
