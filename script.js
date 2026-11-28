  // Your provided code, slightly adapted for a success message

// 1. Grab the elements
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');



toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
});
    // ---------- Grab elements ----------
    const form        = document.getElementById('myForm');
    const fname    = document.getElementById('fname');
    const lname       = document.getElementById('lname');
    const message   = document.getElementById('message');
    const formMessage = document.getElementById('formMessage');

    // ---------- Helper: show field-level error ----------
    function setFieldState(input, errorEl, messages) {
      if (messages) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        errorEl.textContent = messages;
        return false;
      } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
        errorEl.textContent = '';
        return true;
      }
    }

    // ---------- Individual validators ----------
    function validatefname() {
      const value = fname.value.trim();
      const error = document.getElementById('fnameError');
      if (value.length < 3) {
        return setFieldState(fname, error, 'Username must be at least 3 characters.');
      }
      return setFieldState(fname, error, '');
    }


    function validatelname() {
      const value = lname.value.trim();
      const error = document.getElementById('fnameError');
      if (value.length < 3) {
        return setFieldState(lname, error, 'Username must be at least 3 characters.');
      }
      return setFieldState(lname, error, '');
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
      const value = message.value;
      const error = document.getElementById('messageError');
      if (value.length <= 0) {
        return setFieldState(messages, error, 'please fill type a message before submitting.');
      }
      return setFieldState(messages, error, '');
    }

    // ---------- Live validation as the user types ----------
    fname.addEventListener('blur', validateUsername);
    lname.addEventListener('blur', validateUsername);
    email.addEventListener('blur', validateEmail);
    message.addEventListener('blur', validatePassword);

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







    




