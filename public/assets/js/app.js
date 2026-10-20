// Interatividade Client-side em Vanilla JS (ES6+)
// Dark Tech Dashboard

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === '/sobre' && currentPath === '/')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});
