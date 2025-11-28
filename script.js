// QazLike Simulator v1.0 - Working Script
// Handles initial calculation and UI updates

document.addEventListener("DOMContentLoaded", () => {
    const calcBtn = document.getElementById("calculateBtn");
    const resultBox = document.getElementById("resultBox");

    calcBtn.addEventListener("click", () => {
        const budget = parseFloat(document.getElementById("budget").value);
        const population = parseFloat(document.getElementById("population").value);

        // validation
        if (isNaN(budget) || isNaN(population) || budget <= 0 || population <= 0) {
            resultBox.innerHTML = "<p style='color:red;'>Please enter valid numbers.</p>";
            return;
        }

        // core logic
        const perCitizen = budget / population;

        // show result
        resultBox.innerHTML = `
            <h3>Calculation Result:</h3>
            <p><strong>National Budget:</strong> ${budget.toLocaleString()}</p>
            <p><strong>Population:</strong> ${population.toLocaleString()}</p>
            <p><strong>Budget per Citizen:</strong> ${perCitizen.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>

            <hr>

            <button id="nextStepBtn" class="next-btn">Proceed to Level 1 →</button>
        `;

        // now activate next step button
        document.getElementById("nextStepBtn").addEventListener("click", () => {
            goToLevel1();
        });
    });
});


// ======================
// Level 1 Placeholder
// ======================
function goToLevel1() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Level 1 — National Security Allocation</h2>
        <p>Here citizens allocate budget to mandatory state sectors:</p>

        <ul>
            <li>Army</li>
            <li>Border Security</li>
            <li>Police</li>
            <li>Court System</li>
            <li>Strategic Safety</li>
            <li>Minimal State Administration</li>
        </ul>

        <p>Next: voting interface, sliders, and automatic smart-contract deductions.</p>
    `;
}
