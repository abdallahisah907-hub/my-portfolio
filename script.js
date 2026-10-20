function handleErr() {
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) Swal.fire("Saved!", "", "success");
  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});
}
let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
let email = document.getElementById('email').value;

const button = document.getElementById('sendMessageBtn');
button.addEventListener("click", () => {
    if(!fname && lname && email) {
      handleErr();
        
    }
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
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});



