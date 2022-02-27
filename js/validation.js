// *** Client-side validation ***

// Get contact form
// and all user inputs
// from ../index.html
const contactForm = document.forms['contact'];
const inputs = document.getElementsByClassName('input');


// ** Processing **
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if(isEmpty(inputs)) {

        alert('All fields are required');
        return;

    }

    if(checkNames(inputs.fname, inputs.lname)) {
        alert('Only letters for First name and Last name!');

    }

    if (inputs.mail.validity.typeMismatch) {
        inputs.mail.setCustomValidity('Please enter a good format for email!');
        inputs.mail.reportValidity();

        return;
    }

    if (phoneNumberValidity(inputs.phone)) {
        inputs.phone.setCustomValidity("Please enter a good format of phone number!");
        inputs.phone.reportValidity();

        return;
    }

});

// ** Functions **

// * General *
// Check all inputs completed
function isEmpty(inputs) {

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
// Check email format
// for email input
function emailValidity(inputEmail) {
    if(inputEmail.validity.typeMismatch) {
        return true;
    }

}

// Phone number format
function phoneNumberValidity(inputPhone) {

    let phoneValue, phoneRegex, validPhone;

    phoneValue = inputPhone.value;
    phoneRegex = /^\d{2}\d{2}\d{2}\d{2}\d{2}$/;
    validPhone = phoneRegex.test(phoneValue);

    if (!validPhone) {
        return true;
    }

}
