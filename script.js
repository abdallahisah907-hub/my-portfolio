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
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

// 2. Toggle the menu open/closed
toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
});

// 3. Close the menu when any nav link is tapped  ← this is the link-close listener
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

