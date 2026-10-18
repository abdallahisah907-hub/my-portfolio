let button = document.querySelector('#sendMessageBtn');



button.addEventListener('click', function myFun() {
  try{
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
    
   Swal.fire({
  position: "top",
  icon: "success",
  title: "Abdullahi recieved your message!",
  showConfirmButton: false,
  timer: 2000
});
    
  }catch(error){
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
  }


  
});

    // Your provided code, slightly adapted for a success message



// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});



