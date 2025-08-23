// Common Function to Get input Value
function accountNumberValue(id) {
  const value = parseInt(document.getElementById(id).value);
  return value;
}
//Login Page Validation

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = accountNumberValue("login-mobile-number");
  const pinNumber = accountNumberValue("login-pin-number");
  console.log(mobileNumber, pinNumber);
  if (mobileNumber === 123456789 && pinNumber === 1234) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }
});
