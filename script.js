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
      let fname = document.querySelector('#fname').value;
      let lname = document.querySelector('#lname').value.trim();
      let email = document.querySelector('#email').value.trim();
      if (fname.trim().length < 0)  {
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
    return Swal.fire({
      title: "Your message has been sent!",
      icon: "success",
      draggable: true,
      timer:2000,
      position:"top",
});
    

});


