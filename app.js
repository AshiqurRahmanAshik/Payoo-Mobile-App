const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function (e) {
  event.preventDefault();
  const mobileNumber = document.getElementById("mobile-number");
  const valueOfMobileNumber = mobileNumber.value;
  const lengthOfMobileNumber = valueOfMobileNumber.length;
  const pinNumber = document.getElementById("pin-number");
  const valueOfPin = pinNumber.value;
  if (lengthOfMobileNumber == 11 && valueOfPin == 1234) {
    window.location.href = "./home.html";
  } else {
    if (lengthOfMobileNumber != 11) {
      alert("Invalid Mobile Number");
    } else {
      alert("Invalid Pin Number");
    }
  }
});
