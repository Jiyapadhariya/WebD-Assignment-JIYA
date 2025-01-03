let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = "Error";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = "";
    document.getElementById('display').value = "";
}
