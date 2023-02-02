import { inputs } from "./components.js";


/** CHECKERS */

/**
 * @function isEmpty
 * 
 * Verify if user filled all inputs
 * Returns true if an input is empty
 * 
 * @param {HTMLCollection} inputs 
 * @returns {Boolean}
 */
function isEmpty(inputs) {

    for(const input of inputs) {
        if(!input.value) return true;
    }

    return false;
}

/**
 * @function checkNames
 * 
 * Verify first and last names format
 * Returns true if an input is not valid
 * 
 * @param {HTMLElement} inputFname
 * @param {HTMLElement} inputLname
 * @returns {Boolean}
 */
function checkNames(inputFname, inputLname) {

    let fnameValue, lnameValue,
        namesRegex, validNames;

    fnameValue = inputFname.value;
    lnameValue = inputLname.value;

    /** Authorized characters */
    namesRegex = /^[a-zA-Z-]+$/;

    validNames = namesRegex.test(fnameValue) && namesRegex.test(lnameValue)

    return !validNames;
}

/**
 * @function emailValidity
 * 
 * Verify email format
 * Returns true if not valid format
 * 
 * @param {HTMLElement} inputEmail
 * @returns {Boolean}
 */
function emailValidity(inputEmail) { return inputEmail.validity.typeMismatch; } 

/**
 * @function phoneNumberValidity
 * 
 * Verify phone number format
 * Returns true if not valid
 * 
 * @param {HTMLElement} inputPhone
 * @returns {Boolean}
 */
function phoneNumberValidity(inputPhone) {

    let phoneValue, phoneRegex, validPhone;

    phoneValue = inputPhone.value;
    
    /** Only numbers in phoneNumber */
    /** Max size : 10 */
    phoneRegex = /^\d{10}$/;
    validPhone = phoneRegex.test(phoneValue);

    return !validPhone;

}

/** MAIN FUNCTION */

/**
 * @function processing
 * 
 * Verify email format
 * Returns true if not valid format
 * 
 * @param {SubmitEvent}
 * @returns {Boolean}
 */
export function processing(e) {
    e.preventDefault();

    if(isEmpty(inputs)) {

        alert('All fields are required');
        return;

    }

    if(checkNames(inputs.fname, inputs.lname)) {
        alert('Only letters for First name and Last name!');

    }

    if (emailValidity(inputs.mail)) {
        inputs.mail.setCustomValidity('Please enter a good format for email!');
        inputs.mail.reportValidity();
        return;
    }

    if (phoneNumberValidity(inputs.phone)) {
        inputs.phone.setCustomValidity("Please enter a good format of phone number!");
        inputs.phone.reportValidity();
        return;
    }

}
