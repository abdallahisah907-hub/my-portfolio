  // Your provided code, slightly adapted for a success message

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');



toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});



const btn = document.getElementById("sendMessageBtn");
btn.addEventListener("click", ()  => {
    let fname = document.getElementById('fname').value;
    if(fname.trim() === " ") {
       handleRequest(Swal.fire({
    title: "Your message has been sent Successfully!",
    icon: "fail",
    draggable: true

  }));      
    } 
  Swal.fire({
        title: "please provide your information!",
        icon: "success",
        draggable: false,
        timer:5000,
        position:"top"
        });
});

function handleRequest(text) {
  return text;
}




    




