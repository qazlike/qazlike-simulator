// QazLike Simulator v1.0 - script.js

// ----------- VARIABLES -----------
let totalBudget = 0;
let population = 0;
let budgetPerCitizen = 0;
let level1Allocated = 0;
let level2Allocated = 0;
let isLevel1Complete = false;
let isLevel2Complete = false;

// ----------- UI ELEMENTS -----------
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// ----------- STEP 1: INPUT DATA -----------
function startSimulation() {
  totalBudget = Number(document.getElementById('inputBudget').value);
  population = Number(document.getElementById('inputPopulation').value);

  if (!totalBudget || !population || totalBudget <= 0 || population <= 0) {
    alert('Введите корректные данные.');
    return;
  }

  budgetPerCitizen = totalBudget / population;
  document.getElementById('budgetPerCitizen').innerText = budgetPerCitizen.toFixed(2);

  showScreen('screen2');
}

// ----------- STEP 2: LEVEL 1 (SECURITY) -----------
function allocateLevel1(amount) {
  if (isLevel1Complete) return;
  level1Allocated += amount;

  const required = totalBudget * 0.25; // ДЕМО: 25% бюджета
  document.getElementById('level1Progress').innerText = `${level1Allocated.toFixed(0)} / ${required.toFixed(0)}`;

  if (level1Allocated >= required) {
    isLevel1Complete = true;
    alert('Уровень 1 полностью профинансирован!');
    showScreen('screen4');
  }
}

// ----------- STEP 3: LEVEL 2 (INFRASTRUCTURE) -----------
function allocateLevel2(amount) {
  if (!isLevel1Complete) {
    alert('Сначала завершите Уровень 1.');
    return;
  }

  if (isLevel2Complete) return;
  level2Allocated += amount;

  const required = totalBudget * 0.35; // ДЕМО: 35% бюджета
  document.getElementById('level2Progress').innerText = `${level2Allocated.toFixed(0)} / ${required.toFixed(0)}`;

  if (level2Allocated >= required) {
    isLevel2Complete = true;
    alert('Уровень 2 завершён! Переход к личным средствам.');
    showScreen('screen5');
    calculatePersonalFunds();
  }
}

// ----------- STEP 4: PERSONAL FUNDS -----------
function calculatePersonalFunds() {
  const level1req = totalBudget * 0.25;
  const level2req = totalBudget * 0.35;
  const remaining = totalBudget - level1req - level2req;

  const perCitizen = remaining / population;
  document.getElementById('personalFunds').innerText = perCitizen.toFixed(2);
}

// ----------- INIT -----------
showScreen('screen1');
