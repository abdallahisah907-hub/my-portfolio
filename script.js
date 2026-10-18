let button = document.querySelector('#sendMessageBtn');

function getMsg(){
  document.getElementById('demo').innerHTML =  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Why do I have this issue?</a>"
});
}

function myFun() {
let fname = document.getElementById('fname').value.trim();
let lname = document.getElementById('lname').value.trim();
let email = document.getElementById('email').value.trim();
let message = document.getElementById('message').value;

  if(fname != " " && lname != " " && email != " " && message != " "){
    button.addEventListener('click', function() {
    Swal.fire({
    position: "top",
    icon: "success",
    title: "Abdullahi recieved your message!",
    showConfirmButton: false,
    timer: 2000
  });

  } else{
    getMsg();
   }
  }); 
myFun();
}

    // Your provided code, slightly adapted for a success message

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});



