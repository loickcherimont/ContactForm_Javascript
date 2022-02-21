/*
    TODO:
        - Prevent display go over the 5 possible errors
        -

*/

// CLIENT SIDE VALIDAITON

/* All required elements in HTML file */
// Form
const contactForm = document.querySelector('#contact');

// Inputs
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#mail');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

// Error displayer
const errDisplay = document.getElementById('errDisplay');

/* Processing */

// Onsubmit
contactForm.addEventListener('submit', checkInputs);
// REGEX

// Dynamic CSS styles

//contact.addEventListener('submit', function() {
//    alert("Sent!");
//});
//

function checkInputs(e) {

    e.preventDefault();


    checkFname();

    checkLname();

    checkEmail();

    checkPhoneNum();

    checkMessage();

    errDisplay.style.visibility = 'visible';



}

function checkFname() {

    let pattern = /^[a-z-]+$/i;

    // Empty
    if(fname.value === '') {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "First name is required !";
        errDisplay.appendChild(errMessage);

    }

    // Only letter and some dashes
    if(!pattern.test(fname.value)) {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Only letters and dashes in first name";
        errDisplay.appendChild(errMessage);
    }



}


function checkLname() {

    let pattern = /^[a-z-]+$/i;
    // Check lname
    // Empty
    if(lname.value === '') {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Last name is required !";
        errDisplay.appendChild(errMessage);

    }

     // Only letter and some dashes
    if(!pattern.test(lname.value)) {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Only letters and dashes in last name";
        errDisplay.appendChild(errMessage);
    }


}

function checkEmail() {

    let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;

    // Empty email
     if(email.value === '') {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Email is required !";
        errDisplay.appendChild(errMessage);

    }
    // Email in bad format
    if(!pattern.test(email.value)) {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Bad format for email";
        errDisplay.appendChild(errMessage);
    }

}

function checkPhoneNum() {

    let pattern = /^\d{2} \d{2} \d{2} \d{2} \d{2}$/;;

    // Check phone
     if(phone.value === '') {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Phone number is required !";
        errDisplay.appendChild(errMessage);

    }

    // User entered other
    // elements than numbers
    if(!pattern.test(phone.value)) {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Please enter only number";
        errDisplay.appendChild(errMessage);
    }


}

function checkMessage() {
    // Empty
     if(message.value === '') {
        const errMessage = document.createElement('li');
        errMessage.innerHTML = "Message is required !";
        errDisplay.appendChild(errMessage);

    }
}

