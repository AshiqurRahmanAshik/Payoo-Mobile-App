const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.getElementById("mobile-number").value;
  const pin = document.getElementById("pin").value;
  const convertedPin = parseInt(pin);
  if (accountNumber.length === 11) {
    if (convertedPin == 1234) {
      window.location.href = "./main.html";
    } else {
      alert("Invalid Pin Number");
    }
  } else {
    alert("Invalid Account Number");
  }
});
