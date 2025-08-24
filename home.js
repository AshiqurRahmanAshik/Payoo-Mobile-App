// Function to toggle feature
function dashboard(id1, id2) {
  const addMoneyDashboard = document.getElementById(id1);
  addMoneyDashboard.addEventListener("click", function () {
    const dashboardButtons = document.getElementsByClassName("dashboard-btn");
    for (const dashboardButton of dashboardButtons) {
      dashboardButton.classList.add("border-1", "border-gray-300");
      dashboardButton.classList.remove("bg-[#0874f20d]");
    }
    document
      .getElementById(id1)
      .classList.add("bg-[#0874f20d]", "border-gray-300");
    const transactions = document.getElementsByClassName("transaction-section");
    for (const transaction of transactions) {
      transaction.classList.add("hidden");
      document.getElementById(id2).classList.remove("hidden");
    }
  });
}
dashboard("dashboard-add-money", "add-money-form");
dashboard("dashboard-cash-out", "cash-out-form");

// Function to get innerText in number
function getInnerTextNumber(id) {
  const getInnerTextNumber = parseInt(document.getElementById(id).innerText);
  return getInnerTextNumber;
}

// Function to get value in number
function getValueNumber(id) {
  const getValueNumber = parseInt(document.getElementById(id).value);
  return getValueNumber;
}

// Add Money
function addMoneyButton(id) {
  const button = document.getElementById(id);
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const addMoneyAccNumber = getValueNumber("add-money-account");
    const addMoneyPin = getValueNumber("add-money-pin");
    if (addMoneyAccNumber != 123456789 || addMoneyPin != 1234) {
      alert("Invalid Credentials");
      return;
    }
    let availableBalance = getInnerTextNumber("total-amount");
    const addMoney = getValueNumber("add-money-amount");
    const netBalance = availableBalance + addMoney;
    document.getElementById("total-amount").innerText = netBalance;
  });
}
addMoneyButton("add-money-submit");

// Cash Out
function cashOutButton(id) {
  const button = document.getElementById(id);
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const cashOutAccNumber = getValueNumber("cash-out-agent");
    const cashOutPin = getValueNumber("cash-out-pin");
    if (cashOutAccNumber != 123456789 || cashOutPin != 1234) {
      alert("Invalid Credentials");
      return;
    }
    let availableBalance = getInnerTextNumber("total-amount");
    const cashOutMoney = getValueNumber("cash-out-amount");
    const netBalance = availableBalance - cashOutMoney;
    if (netBalance < 0) {
      alert("Invalid Credentials");
      return;
    }
    document.getElementById("total-amount").innerText = netBalance;
  });
}
cashOutButton("cash-out-submit");

// Transfer Money
dashboard("dashboard-transfer", "transfer-money-form");
// Bonus Money
dashboard("dashboard-bonus", "bonus-money");
// Pay Bill
dashboard("dashboard-pay-bill", "pay-bill-form");
//  Transactions
dashboard("dashboard-transactions", "transactions-form");
