console.log("form data")
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password')
let validEmail = false;
let validPhone = false;
let validUser = false;
let validPassword=false;


name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

password.addEventListener('blur', () => {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;
    let str = password.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your password is valid');
        password.classList.remove('is-invalid');
        validPassword = true;
    }
    else {
        console.log('Your password is not valid');
        password.classList.add('is-invalid');
        validPassword = false;
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validEmail && validUser && validPhone &&validPassword) {
        console.log('Phone, email and user are valid. Submitting the form');
    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
    }
})



