  // Your provided code, slightly adapted for a success message

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});


    const button = document.getElementById('sendMessageBtn');
button.addEventListener("click", () => {

    return Swal.fire({
      title: "Your message has been sent!",
      icon: "success",
      draggable: true,
      timer:2000,
      position:"top",
});
});
    

});


