var displayArea = document.getElementById('display');

function btnClicked(digitOrOperator) {
    displayArea.innerText = displayArea.innerText + digitOrOperator;
}

function displayResult() {
    let calculate = displayArea.innerText;
    if (calculate != "") {
        displayArea.innerText = eval(calculate);
    }
}

function clearDisplay() {
    displayArea.innerText = "";
}

function deleteLastDigit() {
    displayArea.innerText = displayArea.innerText.substring(0, displayArea.innerText.length - 1);
}