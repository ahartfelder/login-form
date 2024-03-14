const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

function showAlert(message) {
  document.getElementById("custom-alert-message").textContent =
    message || "For test purposes only!";
  document.getElementById("custom-alert").style.display = "block";
}

function closeCustomAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.closest(".input-data");
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.closest(".input-data");
  console.log(inputControl);
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (!/^[A-Za-z]/.test(usernameValue)) {
    setError(username, "Username must start with letters");
  } else if (usernameValue.length < 3 || usernameValue.length > 20) {
    setError(username, "Username must be between 3 and 20 characters");
  } else if (!/^[A-Za-z0-9_-]*$/.test(usernameValue)) {
    setError(
      username,
      "Username can only contain letters, numbers, hyphens, or underscores"
    );
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8 || passwordValue.length > 20) {
    setError(password, "Password must be between 8 and 20 characters");
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
      setError(password, `Password must contain ${errorMessages.join(", ")}`);
    } else {
      setSuccess(password);
    }
  }
};

function togglePassword() {
  const toggleIcon = document.querySelector(".reveal-password");

  password.type = password.type === "password" ? "text" : "password";

  if (password.type === "password") {
    toggleIcon.classList.remove("bx-hide");
    toggleIcon.classList.add("bx-show");
  } else {
    toggleIcon.classList.remove("bx-show");
    toggleIcon.classList.add("bx-hide");
  }
}
