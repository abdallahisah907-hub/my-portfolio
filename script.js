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
    if(fname === " ") {
      Swal.fire({
    title: "Your message has been sent Successfully!",
    icon: "fail",
    draggable: true

  });      
    } 
  else{
  Swal.fire({
        title: "please provide your information!",
        icon: "success",
        draggable: false,
        timer:5000,
        position:"top"
        });
});
}

  <script>
    // ---------- Grab elements ----------
    const form        = document.getElementById('signupForm');
    const username    = document.getElementById('username');
    const email       = document.getElementById('email');
    const message   = document.getElementById('password');
    const formMessage = document.getElementById('formMessage');

    // ---------- Helper: show field-level error ----------
    function setFieldState(input, errorEl, message) {
      if (message) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        errorEl.textContent = message;
        return false;
      } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
      }
    }

    // ---------- Individual validators ----------
    function validateUsername() {
      const value = username.value.trim();
      const error = document.getElementById('usernameError');
      if (value.length < 3) {
        return setFieldState(username, error, 'Username must be at least 3 characters.');
      }
      return setFieldState(username, error, '');
    }

    function validateEmail() {
      const value = email.value.trim();
      const error = document.getElementById('emailError');
      // simple regex — good enough for most forms
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(value)) {
        return setFieldState(email, error, 'Please enter a valid email address.');
      }
      return setFieldState(email, error, '');
    }

    function validatePassword() {
      const value = password.value;
      const error = document.getElementById('passwordError');
      if (value.length < 8) {
        return setFieldState(password, error, 'Password must be at least 8 characters.');
      }
      return setFieldState(password, error, '');
    }

    // ---------- Live validation as the user types ----------
    username.addEventListener('blur', validateUsername);
    email.addEventListener('blur', validateEmail);
    password.addEventListener('blur', validatePassword);

    // ---------- Show a global success or failure message ----------
    function showMessage(text, type) {
      formMessage.textContent = text;
      formMessage.className = 'message ' + type; // 'success' or 'error'
    }

    function clearMessage() {
      formMessage.textContent = '';
      formMessage.className = 'message';
    }

    // ---------- Handle submit ----------
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // stop real submission
      clearMessage();

      // Run all validators — don't stop early so all errors show at once
      const okUsername = validateUsername();
      const okEmail    = validateEmail();
      const okPassword = validatePassword();

      if (okUsername && okEmail && okPassword) {
        // ✅ SUCCESS
        showMessage('✅ Success! Your account has been created.', 'success');

        // Here you'd normally send the data:
        //   const data = { username: username.value, email: email.value };
        //   fetch('/api/register', { method: 'POST', body: JSON.stringify(data) ... });

        form.reset();
        document.querySelectorAll('input').forEach(i => i.classList.remove('valid'));
      } else {
        // ❌ FAILURE
        showMessage('❌ Please fix the errors above and try again.', 'error');
        // Focus the first invalid field
        const firstInvalid = form.querySelector('input.invalid');
        if (firstInvalid) firstInvalid.focus();
      }
    });
  </script>






    




