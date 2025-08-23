const addMoneyBtn = document.getElementById("add-money-btn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = document.getElementById("mobile-number");
  const valueOfMobileNumber = mobileNumber.value;
  const lengthOfMobileNumber = valueOfMobileNumber.length;
  const pinNumber = document.getElementById("pin-number");
  const valueOfPin = pinNumber.value;
  if (lengthOfMobileNumber !== 11 || valueOfPin != 1234) {
    alert("Invalid Credentials");
  } else {
    const amountToAdd = document.getElementById("amount-to-add");
    const amountToAddValue = amountToAdd.value;
    const amountToAddConverted = parseInt(amountToAddValue);
    console.log(amountToAddConverted);
    let totalAmountElement = document.getElementById("total-amount");
    let totalAmount = totalAmountElement.innerText;
    let totalAmountConverted = parseInt(totalAmount);
    console.log(totalAmountConverted);
    let remainAmount = totalAmountConverted + amountToAddConverted;
    totalAmountElement.innerText = remainAmount;
  }
});
document.getElementById("add-money").style.display = "none";
document.getElementById("cash-out").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("bonus-money").style.display = "none";

const addMoney = document.getElementById("addMoney");
addMoney.addEventListener("click", function () {
  document.getElementById("add-money").style.display = "block";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("bonus-money").style.display = "none";
});
const cashOut = document.getElementById("cashOut");
cashOut.addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "block";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("bonus-money").style.display = "none";
});
const transferMoney = document.getElementById("transferMoney");
transferMoney.addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "block";
  document.getElementById("bonus-money").style.display = "none";
});
const getBonus = document.getElementById("getBonus");
getBonus.addEventListener("click", function () {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("bonus-money").style.display = "block";
});
