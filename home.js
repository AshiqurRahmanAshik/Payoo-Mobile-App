// Transaction Data
const transactionData = [];
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
// Add Money
dashboard("dashboard-add-money", "add-money-form");
// Cash Out
dashboard("dashboard-cash-out", "cash-out-form");
// Transfer Money
dashboard("dashboard-transfer", "transfer-money-form");
// Bonus Money
dashboard("dashboard-bonus", "bonus-money");
// Pay Bill
dashboard("dashboard-pay-bill", "pay-bill-form");
//  Transactions
dashboard("dashboard-transactions", "transactions-form");
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
    if (addMoney <= 0) {
      alert("Invalid Credentials");
      return;
    }
    const netBalance = availableBalance + addMoney;
    document.getElementById("total-amount").innerText = netBalance;
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
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
    if (cashOutMoney <= 0) {
      alert("Invalid Credentials");
      return;
    }
    const netBalance = availableBalance - cashOutMoney;
    if (netBalance < 0) {
      alert("Invalid Credentials");
      return;
    }
    document.getElementById("total-amount").innerText = netBalance;
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    console.log(data);
  });
}
cashOutButton("cash-out-submit");

// Transaction Details
document
  .getElementById("dashboard-transactions")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `<div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
      `;
      transactionContainer.appendChild(div);
    }
  });
