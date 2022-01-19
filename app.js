// Javascript validation

/* -- Buttons --*/
const cancel =  document.getElementById('cancel');
const contact = document.getElementById('contact');

// When user click on cancel btn
cancel.addEventListener("click",function() {
    // Clear all inputs
    contact.reset();
});

contact.addEventListener('submit', function() {
    alert("Sent!");
});
