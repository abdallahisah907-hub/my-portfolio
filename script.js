function sendMsg() {
 Swal.fire({
  title: "Thanks for reaching out to Abdullahi!",
  icon: "success",
  draggable: true
});
}

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});



