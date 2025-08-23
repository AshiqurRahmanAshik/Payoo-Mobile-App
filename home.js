function dashboard(id1, id2) {
  const addMoneyDashboard = document.getElementById(id1);
  addMoneyDashboard.addEventListener("click", function () {
    const transactions = document.getElementsByClassName("transaction-section");
    for (const transaction of transactions) {
      transaction.style.display = "none";
      document.getElementById(id2).style.display = "block";
    }
  });
}
dashboard("dashboard-add-money", "add-money-form");
dashboard("dashboard-cash-out", "cash-out-form");
dashboard("dashboard-transfer", "transfer-money-form");
dashboard("dashboard-bonus", "bonus-money");
dashboard("dashboard-pay-bill", "pay-bill-form");
dashboard("dashboard-transactions", "transactions-form");
