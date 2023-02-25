const bill = document.getElementById("bill");
const numberOfPeople = document.getElementById("number-of-people");
const buttons = {
    fivePercent: document.getElementById("btn-5"),
    tenPercent: document.getElementById("btn-10"),
    fifteenPercent: document.getElementById("btn-15"),
    twentyFivePercent: document.getElementById("btn-25"),
    fiftyPercent: document.getElementById("btn-50")
}
const tipAmountDiv = document.getElementById("tip-amount");
const totalDiv = document.getElementById("total");
const customButton = document.getElementById("custom-button");
const resetButton = document.getElementById("reset-button");

buttons.fivePercent.onclick = () => {
    const tip = 0.05;
    TipCalculation(tip)
}
buttons.tenPercent.onclick = () => {
    const tip = 0.1;
    TipCalculation(tip)
}
buttons.fifteenPercent.onclick = () => {
    const tip = 0.15;
    TipCalculation(tip)
}
buttons.twentyFivePercent.onclick = () => {
    const tip = 0.25;
    TipCalculation(tip)
}
buttons.fiftyPercent.onclick = () => {
    const tip = 0.5;
    TipCalculation(tip)
}

function TipCalculation(tip) {
    const totalPerPerson = bill.value / numberOfPeople.value;
    const tipAmount = totalPerPerson * tip;
    const total = tipAmount + totalPerPerson;

    Number.isInteger(tipAmount) ? tipAmountDiv.innerHTML = `$${tipAmount}.00` : tipAmountDiv.innerHTML = `$${tipAmount.toFixed(2)}`;
    Number.isInteger(total) ? totalDiv.innerHTML = `$${total}.00` : totalDiv.innerHTML = `$${total.toFixed(2)}`;
}

numberOfPeople.onchange = () => {
    if(numberOfPeople.value <= 0) {
        numberOfPeople.style.outline = "2px solid red";
        
    }
    const tip = customButton.value / 100;
    TipCalculation(tip)
}


resetButton.addEventListener("click", () => {
    bill.value = "";
    customButton.value = "";
    numberOfPeople.value = "";
    tipAmountDiv.innerHTML = "$0.00";
    totalDiv.innerHTML = "$0.00";
})
