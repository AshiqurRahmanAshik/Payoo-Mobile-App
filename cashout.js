const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const agentMobileNumber = document.getElementById("agent-mobile-number");
  const valueOfAgentMobileNumber = agentMobileNumber.value;
  const lengthOfAgentMobileNumber = valueOfAgentMobileNumber.length;
  // console.log(lengthOfAgentMobileNumber);
  const agentPinNumber = document.getElementById("agent-pin-number");
  const valueOfAgentPinNumber = agentPinNumber.value;
  console.log(valueOfAgentPinNumber);
  if (lengthOfAgentMobileNumber !== 11 || valueOfAgentPinNumber != 1234) {
    alert("Invalid Credentials");
  } else {
    const amountToWithdraw = document.getElementById("amount-to-withdraw");
    const amountToWithdrawValue = amountToWithdraw.value;
    const amountToWithdrawConverted = parseInt(amountToWithdrawValue);
    console.log(amountToWithdrawConverted);
    let totalAmountElement = document.getElementById("total-amount");
    let totalAmount = totalAmountElement.innerText;
    let totalAmountConverted = parseInt(totalAmount);
    let remainAmount = totalAmountConverted - amountToWithdrawConverted;
    if (remainAmount >= 0) {
      totalAmountElement.innerText = remainAmount;
    } else {
      alert("Insufficient Balance");
    }
  }
});
