const numberButtons = document.querySelectorAll(".btn-number")
const operatorButtons = document.querySelectorAll(".btn-operator")
const equalsButton = document.querySelector("#btn-equals")
const clearButton = document.querySelector("#btn-clear")
const display = document.querySelector("#display-input")

let firstValue = ""
let secondValue = ""
let currentOperator = ""
let currentResult = ""

function calculate(Num1, Num2, Operator){
    const Number1 = Number(Num1)
    const Number2 = Number(Num2)

    return operations(Number1, Number2, Operator);
}

function operations(Number1, Number2, Operator){
    if (Operator == '+') return Number1 + Number2
    else if (Operator == '-') return Number1 + Number2
    else if (Operator == '*') return Number1 + Number2 
    else if (Operator == '/') return Number1 + Number2 
}

function reset(){
    firstValue = ""
    secondValue = ""
    currentOperator = ""
    display.value = ""
}

function handleNumberClick(buttonValue){
    if (display.value === String(display.value === firstValue && !currentOperator)) {
        display.value = "";
    }

    if (!currentOperator) {
        firstValue += buttonValue;
        display.value += buttonValue;
    } else {
        secondValue += buttonValue;
        display.value += buttonValue;
    }
}

function handleOperatorClick(buttonValue){
    if (firstValue && !currentOperator) {
        currentOperator = buttonValue;
        display.value += currentOperator;
    }
}

function handleEqualsClick(){
    if (!firstValue || !secondValue || !currentOperator) return;

    const result = calculate(firstValue, secondValue, currentOperator);

    display.value = result;
}

numberButtons.forEach((btn) => {
    button.addEventListener("click", (e) => {
        handleNumberClick(e.target.value)
    });
})

operatorButtons.forEach((btn) => {
    button.addEventListener("click", (e) => {
        handleOperatorClick(e.target.value)
    });
})

equalsButton.addEventListener("click", (e) => {
    handleEqualsClick()
})

clearButton.addEventListener("click", (e) => {
    reset()
})

