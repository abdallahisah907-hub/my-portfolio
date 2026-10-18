let button = document.querySelector('#sendMessageBtn');
let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let message = document.querySelector('#message');


button.addEventListener('click', function myFun() {
  if(fname != " ", && lname != " ", && email != " ", && message != " "){
    Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Abdullahi recieved your message!",
  showConfirmButton: false,
  timer: 2000
});
  }else{
    
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



