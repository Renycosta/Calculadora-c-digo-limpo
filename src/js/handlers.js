import { calculate } from "./calculator.js"

const display = document.querySelector("#display-input")

let firstValue = ""
let secondValue = ""
let currentOperator = ""
let currentResult = ""

export function reset(){
    firstValue = ""
    secondValue = ""
    currentOperator = ""
    display.value = ""
}

export function handleNumberClick(buttonValue){
    if (display.value === String(display.value === firstValue && !currentOperator)) {
        display.value = ""
    }

    if (!currentOperator) {
        firstValue += buttonValue
        display.value += buttonValue
    } else {
        secondValue += buttonValue
        display.value += buttonValue
    }
}

export function handleOperatorClick(buttonValue){
    if (firstValue && !currentOperator) {
        currentOperator = buttonValue
        display.value += currentOperator
    }
}

export function handleEqualsClick(){
    if (!firstValue || !secondValue || !currentOperator) return

    const result = calculate(firstValue, secondValue, currentOperator)

    display.value = result
    secondValue = ""
    currentOperator = ""
}