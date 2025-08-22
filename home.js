const addMoneyBtn = document.getElementById("add-money-btn");
addMoneyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amountToAdd = document.getElementById("amount-to-add");
  const amountToAddValue = amountToAdd.value;
  const amountToAddConverted = parseInt(amountToAddValue);
  console.log(amountToAddConverted);
  let totalAmountElement = document.getElementById("total-amount");
  let totalAmount = totalAmountElement.innerText;
  let totalAmountConverted = parseInt(totalAmount);
  console.log(totalAmountConverted);
  let remainAmount = totalAmountConverted - amountToAddConverted;
  totalAmountElement.innerText = remainAmount;
  
});
