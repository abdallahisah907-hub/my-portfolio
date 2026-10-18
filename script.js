let button = document.getElementById('sendMessageBtn');

  button.addEventListener('click', function {
        Swal.fire({
      title: "Message Sent!",
      text: "Abdullahi have recieved your message",
      icon: "success",
      draggable: true // Keeps your draggable feature
    });
  })
    // Your provided code, slightly adapted for a success message



// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});



