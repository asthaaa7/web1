// Get form elements
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// Submit form function
const submitForm = (event) => {
  event.preventDefault();

  // Get form values
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Check if all fields are filled
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Show success message
  alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Clear form fields
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
};

// Add submit event listener to form
form.addEventListener("submit", submitForm);
