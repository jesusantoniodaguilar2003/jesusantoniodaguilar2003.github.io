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
