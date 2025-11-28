document.addEventListener("DOMContentLoaded", function () {

    const calculateBtn = document.getElementById("calculateBtn");
    const resultBox = document.getElementById("result");
    const level1Box = document.getElementById("level1");
    const confirmLevel1Btn = document.getElementById("confirm-level1");
    const level1Status = document.getElementById("level1-status");

    let totalBudget = 0;
    let perCitizen = 0;

    // ------------------------------------------------
    // STEP 1: CALCULATE
    // ------------------------------------------------
    calculateBtn.addEventListener("click", function () {

        const budget = Number(document.getElementById("budget").value);
        const population = Number(document.getElementById("population").value);

        if (budget <= 0 || population <= 0) {
            resultBox.innerHTML = "Enter valid numbers!";
            return;
        }

        totalBudget = budget;
        perCitizen = budget / population;

        resultBox.innerHTML =
            `<p><strong>Budget per citizen:</strong> ${perCitizen.toFixed(2)}</p>
             <p>100% of budget goes to citizens’ digital wallets.</p>`;

        // Show Level 1
        level1Box.style.display = "block";
        level1Status.innerHTML = "";
    });

    // ------------------------------------------------
    // STEP 2: LEVEL 1 CONFIRMATION
    // ------------------------------------------------
    confirmLevel1Btn.addEventListener("click", function () {

        const army = Number(document.getElementById("army").value);
        const border = Number(document.getElementById("border").value);
        const police = Number(document.getElementById("police").value);
        const courts = Number(document.getElementById("courts").value);
        const safety = Number(document.getElementById("safety").value);
        const gov = Number(document.getElementById("gov").value);

        const level1Total = army + border + police + courts + safety + gov;

        if (level1Total <= 0) {
            level1Status.innerHTML = "Enter valid numbers for Level 1.";
            level1Status.style.color = "red";
            return;
        }

        if (level1Total > totalBudget) {
            level1Status.innerHTML = "Level 1 exceeds total budget!";
            level1Status.style.color = "red";
            return;
        }

        // SUCCESS
        level1Status.style.color = "green";
        level1Status.innerHTML =
            `Level 1 confirmed. Total allocated: ${level1Total.toLocaleString()}.<br>
             Remaining budget: ${(totalBudget - level1Total).toLocaleString()}`;

    });

});
