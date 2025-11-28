document.addEventListener("DOMContentLoaded", function () {

    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function () {

        const budget = Number(document.getElementById("budget").value);
        const population = Number(document.getElementById("population").value);

        if (!budget || !population) {
            resultDiv.style.display = "block";
            resultDiv.innerHTML = "<b>Error:</b> Please enter valid numbers!";
            return;
        }

        const perCitizen = (budget / population).toFixed(2);

        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <h3>Calculation Result</h3>
            <p><b>Budget per citizen:</b> ${perCitizen}</p>
            <p>100% of budget goes to citizens’ digital wallets.</p>
            <p>(Next steps coming soon: Level 1, Level 2, Level 3)</p>
        `;
    });

});
