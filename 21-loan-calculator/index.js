calculateLoan();

function calculateLoan() {
    const loanAmountValue = document.getElementById("loan-amount").value;
    const interestRateValue = document.getElementById("interest-rate").value;
    const monthsToPayValue = document.getElementById("months-to-pay").value;
    const paymentEl = document.getElementById("payment");

    const interest = (loanAmountValue * interestRateValue * 0.01) / monthsToPayValue;
    const montlyPayment = loanAmountValue / monthsToPayValue + interest;

    paymentEl.textContent = `Monthly Payment: $${montlyPayment.toFixed(2)}`;
}
