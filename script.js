

// 1. Grab the elements
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

