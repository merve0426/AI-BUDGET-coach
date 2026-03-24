document.getElementById("analyzeBtn").addEventListener("click", function () {
  const income = document.getElementById("income").value;
  const expenses = document.getElementById("expenses").value;
  const result = document.getElementById("result");

  if (!income || !expenses) {
    result.innerText = "Please enter both income and expenses.";
    return;
  }

  // Simulated AI response (for now)
  result.innerText = `
Financial Analysis:

- Your income: ${income}
- Your expenses:
${expenses}

Insights:
- You may be overspending on non-essential items.
- Try reducing coffee or shopping expenses.
- Set a weekly spending limit.

Financial Health Score: 70/100

Recommendation:
Focus on saving at least 10–20% of your income.
`;
});
