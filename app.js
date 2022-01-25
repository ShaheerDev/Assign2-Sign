//Signup Page

const SUName = document.getElementById('SUName')
const SUEmail = document.getElementById('SUEmail')
const SUPassword = document.getElementById('SUPassword')
const SUCPassword = document.getElementById('SUCPassword')
const SUPhone = document.getElementById('SUPhone')
const SUShowPass = document.getElementById('SUShowPass')

const SUshowpass = () => {
    if (SUShowPass.checked) {
        SUPassword.type = 'text';
        SUCPassword.type = 'text';
    } else {
        SUPassword.type = 'password';
        SUCPassword.type = 'password';
    }
}

const SignupUser = () => {
    var re = /\S+@\S+\.\S+/;
    var emailValid = re.test(SUEmail.value);
    if (SUName.value == '' || SUName.value == null || SUName.value == ' ' || SUEmail.value == '' || SUEmail.value == null || SUEmail.value == ' ' || SUPassword.value == '' || SUPassword.value == null || SUPassword.value == ' ' || SUCPassword.value == '' || SUCPassword.value == null || SUCPassword.value == ' ' || SUPhone.value == '' || SUPhone.value == null || SUPhone.value == ' ') {
        alert('Please fill all required fields.')
    } else {
        if (emailValid == true) {
            if (SUPassword.value == SUCPassword.value) {
                localStorage.setItem('userName', SUName.value);
                localStorage.setItem('userEmail', SUEmail.value);
                localStorage.setItem('userPassword', SUPassword.value);
                localStorage.setItem('userCPassword', SUCPassword.value);
                localStorage.setItem('userPhone', SUPhone.value);
                window.location.href = './login.html';
            } else { alert("Passwords don't match.") }
        } else { alert('Email is not valid.') }
    }
}

//Login page

const SIName = document.getElementById('SIName')
const SIPassword = document.getElementById('SIPassword')
const SIShowPass = document.getElementById('SIShowPass')

const SIshowpass = () => {
    if (SIShowPass.checked) {
        SIPassword.type = 'text';
    } else {
        SIPassword.type = 'password';
    }
}

const SigninUser = () => {
    var username = localStorage.getItem('userName');
    var password = localStorage.getItem('userPassword');
    if(username == '' || password == ''){alert('Invalid user.')}else{
    if (username == SIName.value && password == SIPassword.value) {
        window.location.assign('./dashboard.html');
    } else { alert('Invalid User.') }
}
}

//Dashboard

const getData = () => {
    var userName = localStorage.getItem('userName');
    var userEmail = localStorage.getItem('userEmail');
    var userPassword = localStorage.getItem('userPassword');
    var userCPass = localStorage.getItem('userCPassword');
    var userPhone = localStorage.getItem('userPhone');
    document.getElementById('card-title').innerHTML = `Your name is: <b>${userName}</b>`;
    document.getElementById('card-text').innerHTML = `Your email is: <b>${userEmail}</b>`;
    document.getElementById('card-textb').innerHTML = `Your password is <b>${userPassword}</b>`;
    document.getElementById('card-textc').innerHTML = `Your Phone number is <b>${userPhone}</b>`;
}

const signout = () => {
    localStorage.setItem('userName', '');
    localStorage.setItem('userEmail', '');
    localStorage.setItem('userPassword', '');
    localStorage.setItem('userCPassword', '');
    localStorage.setItem('userPhone', '');
    window.location.href = './login.html'
}