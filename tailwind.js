const emailElement = document.getElementById('email').value;



function passwordReveal() {
    let eyeIcon = document.getElementById('eye-icon');
    let password = document.getElementById('password');

    if(password.type == "password") {
        password.type = "text";
        eyeIcon.className = "fa fa-eye-slash";
    } else {
        password.type = "password";
        eyeIcon.className = "fa fa-eye";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form');
    const passwordElement = document.getElementById('password');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const passwordFeedback = document.getElementById('passwordFeedback');

    passwordElement.addEventListener('input', function() {

        if(passwordRegex.test(passwordElement.value)) {
            passwordFeedback.textContent = 'Password is valid.';
            passwordFeedback.style.color = 'green';
        } else {
            passwordFeedback.textContent = 'Password must contain at least one uppercase letter, one lowercase, and one number, and be at least 8 characters long.';
            passwordFeedback.style.color = 'red';
        }

    })

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailElement = document.getElementById('email').value;
        const passwordElement = document.getElementById('password').value;

        function checkEmailPassword (email, password) {

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.email === email && user.password === password);
        return userExists;
        }

        if (checkEmailPassword(emailElement, passwordElement)) {
            alert('Login Successful!');
            window.location.href = 'calculator.html';
        } else {
            alert('User information not found. Please register.');
            window.location.href = 'Registeration.html';
        }
    })
})