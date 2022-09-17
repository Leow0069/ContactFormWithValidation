
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const messageError = document.getElementById('message-error')
const submitError = document.getElementById('submit-error')

function validateName () {
    let name = document.getElementById('firstName').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        console.log("name length 0");
        return false;
    }

    if (name.match(/^[A-Za-z]*\s{1,2}$/)) {
        nameError.innerHTML = "First name only";
        return false;
    }

    nameError.innerHTML = '';
    console.log("name returned");
    return true;
}

function validateEmail () {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        console.log("email length 0");
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = '';
    console.log("email returned");
    return true;
}

function validateMessage () {
    let message = document.getElementById('message').value;
    let required = 30;
    let left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + " " + 'more characters required';
        return false;
    }

    messageError.innerHTML = ''
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = "Please fill all fields";
        submitError.style.display = "block";
        return false;
    }
}
