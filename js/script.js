const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const form = document.getElementById('myForm');
const green = '#4CAF50';
const red = '#F44336';
form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateFirstName() && validateLastName() && validatePassword() && validateConfirmPassword() && validateEmail()) 
	{
        const name = firstName.value;
        const container = document.querySelector('div.container');
        const loader = document.createElement('div');
        loader.className = 'progress';
        const loadingBar = document.createElement('div');
        loadingBar.className = 'indeterminate';
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function() {
        const loaderDiv = document.querySelector('div.progress');
        const panel = document.createElement('div');
        panel.className = 'card-panel green';
        const text = document.createElement('span');
        text.className = 'white-text';
        text.appendChild(document.createTextNode(`Sign up successful, welcom to SocialApe ${name}`));
        panel.appendChild(text);
        container.replaceChild(panel, loaderDiv);
    }, 1000);
}
});
function validateFirstName() {
    if (checkIfEmpty(firstName)) return;
    if (!checkIfOnlyLetters(firstName)) return;
    return true;
}
function validateLastName() {
    if (checkIfEmpty(lastName)) return;
    if (!checkIfOnlyLetters(lastName)) return;
    return true;
}
function validatePassword() {
    if (checkIfEmpty(password)) return;
    if (!meetLength(password, 4, 100)) return;
    return true;
}
function validateConfirmPassword() {
    if (password.className !== 'valid') {
        setInvalid(confirmPassword, 'Password must be valid');
        return;
    }
    if (password.value !== confirmPassword.value) {
        setInvalid(confirmPassword, 'Passwords must match');
        return;
    }
    else
    {
        setValid(confirmPassword);
    }
    return true;
}
function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!containsCharacters(email, 5)) return;
    return true;
}
function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    }
    else
    {
        setValid(field);
        return false;
    }
}
function isEmpty(value) {
    if (value === '') return true;
    return false;
}
function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}
function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
}
function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
    }
    else
    {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}
function meetLength(field, minLength, maxLength) {
    if (field.value.length >= minLength && field.value.length < maxLength) {
        setValid(field);
        return true;
    }
    else if(field.value.length < minLength)
    {
        setInvalid(field,`${field.name} must be at least ${minLength} characters long`);
        return false;
    }
    else
    {
        setInvalid(field,`${field.name} must be shorter than ${maxLength} characters`);
        return false;
    }
}
function containsCharacters(field, code) {
    let regEx;
    switch (code) {
        case 1:
            regEx = /(?=.*[a-zA-Z])/;
            matchWithRegEx(regEx, field, 'Must contain at least one letter');
            case 2:
                regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
                return matchWithRegEx(regEx,field,'Must contain at least one letter and one number');
                case 3:
                    regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
                    return matchWithRegEx(regEx,field,'Must contain at least one uppercase, one lowercase letter and one number');
                    case 4:
                        regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
                        return matchWithRegEx(regEx,field,'Must contain at least one uppercase, one lowercase letter, one number and one special character');
                        case 5:
                            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            return matchWithRegEx(regEx, field, 'Must be a valid email address');
                            default:
                                return false;
                            }
                        }
                        function matchWithRegEx(regEx, field, message) {
                            if (field.value.match(regEx)) {
                                setValid(field);
                                return true;
                            }
                            else 
                            {
                                setInvalid(field, message);
                                return false;
                            }
                        }