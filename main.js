const slides = document.querySelectorAll('.slide');
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 7000);

    function toggleMenu() {
      document.getElementById('mobileNav').classList.toggle('active');
    }


    function closeMenu() {
        document.getElementById('mobileNav').classList.remove('active');
    }

    function openSection(sectionId) {
      toggleMenu();
      document.querySelectorAll('.section-wrapper').forEach(sec => {
        sec.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }

    function goHome() {
        //   
      document.querySelectorAll('.section-wrapper').forEach(sec => {
        sec.classList.add('slide-up');
  
        setTimeout(() => {
            sec.classList.remove('active', 'slide-up');
        }, 400); // Matches animation duration
        
        closeMenu();
      });
    }

    function validateForm() {
    let isValid = true;

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(el => el.remove());

    // Helper to show errors
    function showError(field, msg) {
      const error = document.createElement('div');
      error.className = 'error-msg';
      error.style.color = 'var(--main-color)';
      error.style.fontSize = '0.9em';
      error.style.marginTop = '-8px';
      error.style.marginBottom = '10px';
      error.innerText = msg;
      field.style.borderColor = 'var(--main-color)';
      field.after(error);
      isValid = false;
    }

    // Reset styles
    [nameField, emailField, messageField].forEach(f => f.style.borderColor = '#333');

    // Validate Name
    if (name.length < 2) {
      showError(nameField, "Name must be at least 2 characters.");
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(emailField, "Enter a valid email address.");
    }

    // Validate Message
    if (message.length < 10) {
      showError(messageField, "Message must be at least 10 characters.");
    }

    if (isValid) {
      alert("Message sent successfully!");
    }

    return false; // prevent actual form submission
  }