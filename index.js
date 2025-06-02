    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const closeIcon = document.querySelector('.icon-close');
    const btnpopup = document.querySelector('.btnLogin-popup');
    

    // Show register form

    registerLink.addEventListener('click', function() {
        wrapper.classList.add('active-register');  // Use this class to show Register box
    });

    // Show login form

    loginLink.addEventListener('click', function() {
        wrapper.classList.remove('active-register');
    });

     btnpopup.addEventListener('click', function() {
        wrapper.classList.add('active-popup');
    });

    closeIcon.addEventListener('click', function() {
        wrapper.classList.remove('active-popup');
    });