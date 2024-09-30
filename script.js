// Toggle between login and signup forms
document.getElementById('login-toggle').addEventListener('click', function () {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
});

document.getElementById('signup-toggle').addEventListener('click', function () {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
});

// Show signup form from login message
document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-toggle').click();
});

// Show login form from signup message
document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-toggle').click();
});
