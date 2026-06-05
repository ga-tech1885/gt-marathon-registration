/**
 * GT Student Endurance Ambassador Program - Confirmation Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    generateReferenceNumber();
});

/**
 * Generates a randomized reference ID 
 */
function generateReferenceNumber() {
    const referenceContainer = document.getElementById('reference');
    if (!referenceContainer) return;

    // Generate a random 5-digit number
    const uniqueId = Math.floor(10000 + Math.random() * 90000);
    const referenceCode = `SEA-${uniqueId}`;

    
    referenceContainer.textContent = ''; 

    const label = document.createElement('strong');
    label.textContent = 'Reference Number: ';

    const value = document.createTextNode(referenceCode);

    referenceContainer.appendChild(label);
    referenceContainer.appendChild(value);
}

/**
 * GT Student Endurance Ambassador Program - Core Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
   
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleFormSubmission);
    }
});

/**
 * Validates and processes the registration form submission
 * @param {Event} event
 */
function handleFormSubmission(event) {
    event.preventDefault();

    
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;

    if (!validateEmail(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }


    window.location.assign("confirmation.html");
}

/**
 * Standard email validation regex helper
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
