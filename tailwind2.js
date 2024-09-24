const userForm = document.querySelector('form');
const firstNameInput = userForm["firstName"];
const lastNameInput = userForm["lastName"];
const emailInput = userForm["email"];
const passwordInput = userForm["password"];




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

//window.localStorage.removeItem('users');

const users = JSON.parse(localStorage.getItem("users")) || [];

const verifyUser = users.filter((verify) => {
    return verify.email;
})


function addUser(firstname, lastname, email, password) { 
    users.push({
        firstname,
        lastname,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    return { firstname, lastname, email, password };

}


function verifyRegexPassword () {

    const pass1 = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(pass1)) {
        document.getElementById('warningRegex').style.color = 'red';
        document.getElementById('warningRegex').innerHTML = "Password must contain at least one uppercase letter, one lowercase, and one number, and be at least 8 characters long.";
        verifyPassword.disabled = true;
    }else {
        document.getElementById('warningRegex').innerHTML = "";
        verifyPassword.disabled = false;
        
    }
    
}


function verifyPassword() {
    const pass1 = document.getElementById('password').value;
    const pass2 = document.getElementById('verify-password').value;

    if (pass1.length > 0 && pass2.length > 0) {

        if (pass1 == pass2) {
            document.getElementById('warning').innerHTML = "Password Match!";
            document.getElementById('warning').style.color = 'green';
            document.getElementById('toggle').disabled = false;
            document.getElementById('toggle').style.opacity = (1);
        } else {
            document.getElementById('warning').innerHTML = "Password did not match.";
            document.getElementById('warning').style.color = 'red';
            document.getElementById('toggle').disabled = true;
            document.getElementById('toggle').style.opacity =(0.4);
        }
    } return;
    
}

function checkUserExists(email) {

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("Email already exists. Please choose a different email");
        return true;
    }

    return false;

}

// const newUser = users;
// if (!checkUserExists(newUser)) {
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("User registered successfully.");
// }


userForm.onsubmit = e => {
    e.preventDefault();
    checkUserExists(emailInput.value);

    const newUser = addUser(
        firstNameInput.value,
        lastNameInput.value,
        emailInput.value,
        passwordInput.value
    );

    alert("Your account creation was successful");



    console.log(newUser)
}