// ============================================
// MAMAEXPERT — main.js
// ============================================

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when link clicked
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Quick tracker redirect from homepage
function goToTracker() {
  const week = document.getElementById('quickWeek')?.value;
  if (!week || week < 1 || week > 40) {
    alert('Sila masukkan minggu antara 1 hingga 40.');
    return;
  }
  window.location.href = `pages/tracker.html?week=${week}`;
}

// Allow Enter key on tracker input
document.getElementById('quickWeek')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') goToTracker();
});

// Ebook form
function submitEbook(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✅ Terima kasih! Semak emel kau.';
  btn.style.background = '#2A9D8F';
  btn.disabled = true;
  e.target.reset();
}

// Animate stats on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testi-card').forEach(el => {
  observer.observe(el);
});
