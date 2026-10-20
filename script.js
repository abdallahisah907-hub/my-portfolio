let button = document.getElementById('sendMessageBtn');
button.addEventListener("click", () => {
    Swal.fire({
  title: "Your message has been sent!",
  icon: "success",
  draggable: true,
  timer:2000,
  position:"top",
});
});

    // Your provided code, slightly adapted for a success message

// 1. Grab the elements
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click' () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});



