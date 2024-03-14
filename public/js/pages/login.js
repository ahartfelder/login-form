const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

function setStatus(element, message = "") {
  const inputControl = element.closest(".input-data");
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.toggle("error", message);
  inputControl.classList.toggle("success", !message);
}

function validateInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setStatus(username, "Username is required");
  } else if (!/^[A-Za-z]/.test(usernameValue)) {
    setStatus(username, "Username must start with letters");
  } else if (usernameValue.length < 3 || usernameValue.length > 20) {
    setStatus(username, "Username must be between 3 and 20 characters");
  } else if (!/^[A-Za-z0-9_-]*$/.test(usernameValue)) {
    setStatus(
      username,
      "Username can only contain letters, numbers, hyphens, or underscores"
    );
  } else {
    setStatus(username);
  }

  if (passwordValue === "") {
    setStatus(password, "Password is required");
  } else if (passwordValue.length < 8 || passwordValue.length > 20) {
    setStatus(password, "Password must be between 8 and 20 characters");
  } else {
    let errorMessages = [];

    if (!/(?=.*[A-Z])/.test(passwordValue)) {
      errorMessages.push("at least one uppercase letter");
    }

    if (!/(?=.*[a-z])/.test(passwordValue)) {
      errorMessages.push("at least one lowercase letter");
    }

    if (!/(?=\d)/.test(passwordValue)) {
      errorMessages.push("at least one digit");
    }

    if (!/(?=.*[@$!%*#?&])/.test(passwordValue)) {
      errorMessages.push("at least one special character (@$!%*#?&)");
    }

    if (errorMessages.length > 0) {
      setStatus(password, `Password must contain ${errorMessages.join(", ")}`);
    } else {
      setStatus(password);
    }
  }
}

function togglePassword() {
  const toggleIcon = document.querySelector(".reveal-password");
  const isVisible = password.type === "password" ? true : false;

  password.type = isVisible ? "text" : "password";

  toggleIcon.classList.toggle("bx-hide", !isVisible);
  toggleIcon.classList.toggle("bx-show", isVisible);
}
