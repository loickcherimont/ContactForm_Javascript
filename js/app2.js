// *** Client-side validation ***

// Get contact form
// and all user inputs
// from ../index.html
const contactForm = document.forms['contact'];
const inputs = document.getElementsByClassName('input');


// ** Processing **
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    noEmpty(inputs);

    if(noEmpty(inputs)) {

        alert('All fields are required');
        return;

    } else if(checkNames(inputs.fname, inputs.lname)) {

        alert('Only letters for First name and Last name!');
        return;

    } else if(checkEmail(inputs.mail)) {

        alert('Please enter a good format for email!');
        return;

    } else if(checkTel(inputs.phone)) {

        alert('Please enter a good format for phone number!');
        return;

    }


});

// ** Functions **

// * General *
// Check all inputs completed
function noEmpty(inputs) {

    const MAX_INPUTS = inputs.length;

    for(let i = 0; i < MAX_INPUTS; i++) {

        let inputValue = inputs[i].value;

        if(!inputValue) {return true;}

    }
}

// * Specific *
// Only letter checker
// for fname and lname inputs
function checkNames(inputFname, inputLname) {

    let fnameValue, lnameValue,
        namesRegex, validNames;

    fnameValue = inputFname.value;
    lnameValue = inputLname.value;

    namesRegex = /^[a-zA-Z-]+$/;

    validNames = namesRegex.test(fnameValue) && namesRegex.test(lnameValue)

    if(!validNames) {return true;}
}

// Email format
function checkEmail(inputEmail) {

    let emailValue, emailRegex, validEmail;

    emailValue = inputEmail.value;
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    validEmail = emailRegex.test(emailValue);

    if(!validEmail) {return true;}
}

// Only numbers
function checkTel(inputPhone) {

    let phoneValue, phoneRegex, validPhone;

    phoneValue = inputPhone.value;
    phoneRegex = /^\d{2}\d{2}\d{2}\d{2}\d{2}$/;
    validPhone = phoneRegex.test(phoneValue);

    if(!validPhone) {return true;}
}
