import { contactForm, inputs, userWizard } from "./components.js";


/** CHECKERS */

/**
 * @function isEmpty
 * 
 * Verify if user filled all inputs
 * Else throw error
 * 
 * @param {HTMLCollection} inputs 
 */
function isEmpty(inputs) {

    for(const input of inputs) {
        if(!input.value) {
            throw new Error('Empty field : One or more fields not filled!');
        }
    }

    
    // userWizard.classList.add('d-none');
}

/**
 * @function checkNames
 * 
 * Verify first and last names format
 * Throw error if not valid
 * 
 * @param {HTMLElement} inputFname
 * @param {HTMLElement} inputLname
 */
function checkNames(inputFname, inputLname) {

    let fnameValue, lnameValue,
        namesRegex, validNames;

    fnameValue = inputFname.value;
    lnameValue = inputLname.value;

    /** Authorized characters : only letters */
    namesRegex = /^[a-zA-Z-]+$/;

    validNames = namesRegex.test(fnameValue) && namesRegex.test(lnameValue);

    if(!validNames) {
        throw new Error('Wrong format : Only letters for `name` fields!');
    }
}

/**
 * @function emailValidity
 * 
 * Verify email format
 * Throw error if wrong
 * 
 * @param {HTMLElement} inputEmail
 */
function emailValidity(inputEmail) {
    if(inputEmail.validity.typeMismatch) {
        throw new Error('Wrong format : Please enter a good format for email!');
    }
} 

/**
 * @function phoneNumberValidity
 * 
 * Verify phone number format
 * Throw error if not OK
 * 
 * @param {HTMLElement} inputPhone
 */
function phoneNumberValidity(inputPhone) {

    let phoneValue, phoneRegex, validPhone;

    phoneValue = inputPhone.value;
    
    /** Only numbers in phoneNumber */
    /** Max size : 10 */
    phoneRegex = /^\d{10}$/;
    validPhone = phoneRegex.test(phoneValue);
    if(!validPhone) {
        throw new Error('Wrong format : Please enter a good format of phone number!');
    }

}

/** @todo SERVER-SIDE : Send data to server, use Golang to do that */
/** What to do with correct data */
// function sendData() {
//     const xhr = new XMLHttpRequest();
//     const FD = new FormData(contactForm);

//     xhr.addEventListener('load', () => alert('Submit!'));

    
//     xhr.open('POST', 'urlHandledByGolang'); 
//     xhr.send(FD);  
// }

/** MAIN FUNCTION */

/**
 * @function preProcessing
 * 
 * Verify field validity
 * Throw indication to user 
 * If empty field or wrong data format 
 * 
 * @param {SubmitEvent}
 * @returns {boolean}
 */
export function preProcessing(e) {
    e.preventDefault();

    try {
        isEmpty(inputs); 
        checkNames(inputs.fname, inputs.lname);
        emailValidity(inputs.mail);
        phoneNumberValidity(inputs.phone);

        /**
     * Remove error message
     * If all fields are filled
     */
        userWizard.innerText = null;
        userWizard.classList.add('d-none');
        sendData();
    } catch(customError) {
        userWizard.innerText = customError.message;
        userWizard.classList.remove('d-none');
    }
    
}
