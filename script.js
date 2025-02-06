// Validation and Submission
document.getElementById("button2").addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = []; 

  const name = document.getElementById("name").value.trim();
  if (name === "") {
      errors.push("Name cannot be empty");
      document.getElementById("name").classList.add("error");
  } else {
      document.getElementById("name").classList.remove("error");
  }

  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address");
      document.getElementById("email").classList.add("error");
  } else {
      document.getElementById("email").classList.remove("error");
  }

  document.getElementById("errorMessages").innerHTML = errors.join("<br>");

  if (errors.length === 0) {
      const person = { name: name, email: email };
      addSignature(person);
      toggleModal(person);
  }
});

// Add Signature
function addSignature(person) {
  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} supports this cause.`;
  document.getElementById("signatures").appendChild(newSignature);
}

// Global variables for animation
let scaleFactor = 1; // Initial scale factor
let modalImage = document.getElementById("thanks-modal-image"); // Select modal image

// Function to scale the image
function scaleImage() {
  if (scaleFactor === 1) {
      scaleFactor = 0.8; // Shrink image
  } else {
      scaleFactor = 1; // Restore to original size
  }

  // Apply the scaling transformation
  modalImage.style.transform = `scale(${scaleFactor})`;
}

// Toggle Modal with Animation
function toggleModal(person) {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");

  // Update modal content
  modalContent.textContent = `Thank you, ${person.name}, for your support!`;

  // Display the modal
  modal.style.display = "flex";
  modal.classList.add("active");

  // Start the animation
  const intervalId = setInterval(scaleImage, 500); // Call scaleImage every 500ms

  // Hide the modal after 3 seconds
  setTimeout(() => {
      modal.classList.remove("active");
      modal.style.display = "none";
      clearInterval(intervalId); // Stop the animation
  }, 3000);
}

// Close Modal
document.getElementById("close-modal").addEventListener("click", function () {
  const modal = document.getElementById("thanks-modal");
  modal.classList.remove("active");
  modal.style.display = "none";
});
