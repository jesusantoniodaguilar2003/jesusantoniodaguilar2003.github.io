// ===== ANIMACIÓN AL HACER SCROLL =====
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));


// ===== EFECTO SUAVE AL CARGAR =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


// ===== SCROLL SUAVE PARA LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach(el => {
    el.classList.add("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente");

  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  prevBtn.addEventListener("click", () => console.log("CLICK prev"));
  nextBtn.addEventListener("click", () => console.log("CLICK next"));
});


document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".experience-carousel");
  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".carousel-slide");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");

  let index = 0;

  function updateCarousel() {
    const slideWidth = carousel.clientWidth;
    console.log("slideWidth:", slideWidth, "index:", index);
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  updateCarousel();
});



