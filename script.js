let button = document.querySelector('#sendMessageBtn');

button.addEventListener('click', function() {
Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Thanks for reaching out to Abdullahi",
  showConfirmButton: false,
  timer: 2000
});
  
});

    // Your provided code, slightly adapted for a success message



// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});



