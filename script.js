  // Your provided code, slightly adapted for a success message

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');



toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});



const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.default();

    let fname = document.getElementById('fname');
    const nameValue = fname.value.trim();
    if(nameValue === " ") {
      Swal.fire({
      title: "Enter your information!",
      icon: "success",
      draggable: true

  });
    }
    
      Swal.fire({
        title: "Your message has been sent Successfully!",
        icon: "success",
        draggable: false,
        timer:2000,
        position:"top"
        });
});



    




