document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let errors = []; 
    
    // Name validation
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        errors.push("Name cannot be empty");
        document.getElementById("name").classList.add("error");
    } else {
        document.getElementById("name").classList.remove("error");
    }
  
    // Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address");
        document.getElementById("email").classList.add("error");
    } else {
        document.getElementById("email").classList.remove("error");
    }
  
    // Display errors
    document.getElementById("errorMessages").innerHTML = errors.join("<br>");
  });
  

  const themeToggleButton = document.getElementById('color-change');
  const body = document.body;

  // Add event listener to the button
  themeToggleButton.addEventListener('click', () => {
    // Toggle the dark-theme class on the body
    body.classList.toggle('dark-theme');

    // Change button text to indicate the current theme
    if (body.classList.contains('dark-theme')) {
      themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
      themeToggleButton.textContent = 'Switch to Dark Theme';
    }
  });
