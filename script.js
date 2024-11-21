function validateEmails() {
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const question = document.getElementById("question").value.trim();
    const messageElement = document.getElementById("form-message");

    // Reset the feedback message
    messageElement.textContent = "";
    messageElement.style.color = "";

    // Check for empty fields
    if (!firstName || !lastName || !email || !confirmEmail || !question) {
        messageElement.textContent = "Please fill out all fields.";
        messageElement.style.color = "red";
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageElement.textContent = "Please enter a valid email address.";
        messageElement.style.color = "red";
        return;
    }

    // Check if emails match
    if (email !== confirmEmail) {
        messageElement.textContent = "Emails do not match. Please try again.";
        messageElement.style.color = "red";
        return;
    }

    // Success message
    messageElement.textContent = `Thank you, ${firstName}! We received your message.`;
    messageElement.style.color = "green";

    // Optionally clear the form fields after submission
    document.getElementById("contact-form").reset();
}