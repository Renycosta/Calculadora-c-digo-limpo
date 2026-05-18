import { 
    handleNumberClick, 
    handleOperatorClick, 
    handleEqualsClick, 
    reset 
} from "./handlers.js";

const numberButtons = document.querySelectorAll(".btn-number")
const operatorButtons = document.querySelectorAll(".btn-operator")
const equalsButton = document.querySelector("#btn-equals")
const clearButton = document.querySelector("#btn-clear")
const display = document.querySelector("#display-input")

numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        handleNumberClick(e.target.value)
    });
})

operatorButtons.forEach((button) => {
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