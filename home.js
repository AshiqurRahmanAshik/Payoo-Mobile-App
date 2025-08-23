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
dashboard("dashboard-transfer", "transfer-money-form");
dashboard("dashboard-bonus", "bonus-money");
dashboard("dashboard-pay-bill", "pay-bill-form");
dashboard("dashboard-transactions", "transactions-form");
