const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function validateForm() {

    let valid = true;

    // Name Validation
    if (nameField.value.trim() === "") {
        document.getElementById("nameError").innerHTML = "Name cannot be empty";
        valid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Email Validation (Only .com emails are accepted)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if (!emailPattern.test(emailField.value.trim())) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email (e.g., example@gmail.com)";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Password Validation
    if (passwordField.value.length < 6) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    // Enable/Disable Submit Button
    submitBtn.disabled = !valid;
}

// Real-time Validation
nameField.addEventListener("input", validateForm);
emailField.addEventListener("input", validateForm);
passwordField.addEventListener("input", validateForm);

// Form Submission
document.getElementById("form").addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("success").innerHTML = "✅ Registration Successful!";

    alert("Registration Successful!");

    this.reset();

    submitBtn.disabled = true;
});
