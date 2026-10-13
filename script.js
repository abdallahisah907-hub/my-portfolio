let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
function myFun() {
    if(fname !== null && lname != null && email !== null) {
          window.alert("Thanks for reaching out to Abdullahi");
    }
    else{
        console.log("enter your details")
    }
    
}

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

