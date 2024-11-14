function validateEmails() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const firstName = document.getElementById("firstName").value;

    if (email !== confirmEmail) {
        alert("Emails do not match. Please resubmit.");
    } else {
        alert(`Thank you, ${firstName}! I received your message from ${email}.`);
    }
}