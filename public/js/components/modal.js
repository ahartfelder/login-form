function showAlert(message) {
  document.getElementById("custom-alert-message").textContent =
    message || "For test purposes only!";
  document.getElementById("custom-alert").style.display = "block";
}

function closeCustomAlert() {
  document.getElementById("custom-alert").style.display = "none";
}
