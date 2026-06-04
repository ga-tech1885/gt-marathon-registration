/**
 * GT Student Endurance Ambassador Program - Confirmation Logic
 * Handles unique application reference tracking securely.
 */

document.addEventListener('DOMContentLoaded', () => {
    generateReferenceNumber();
});

/**
 * Generates a randomized reference ID and safely updates the UI
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
