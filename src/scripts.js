const numberButtons = document.querySelectorAll(".btn-number")
const operatorButtons = document.querySelectorAll(".btn-operator")
const equalsButton = document.querySelector("#btn-equals")
const clearButton = document.querySelector("#btn-clear")
const display = document.querySelector("#display-input")

let firstValue = ""
let secondValue = ""
let currentOperator = ""
let currentResult = ""

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(currentOperator === ""){
            if(display.value == currentResult){
                display.value = ""
            }
            firstValue = firstValue + e.target.value
            display.value = display.value + e.target.value
            console.log(firstValue)
        }else{
            secondValue = secondValue + e.target.value
            display.value = display.value + e.target.value
            console.log(secondValue)
        }
        
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(currentOperator === "" && firstValue !== ""){
            currentOperator = currentOperator + e.target.value
            display.value = display.value + currentOperator
            console.log(currentOperator)
        }else{
            return
        }
    })
})

equalsButton.addEventListener("click", (e) => {
    if(currentOperator == "+"){
        currentResult = +firstValue + +secondValue
    }else if(currentOperator == "-"){
        currentResult = +firstValue - +secondValue
    }else if(currentOperator == "*"){
        currentResult = +firstValue * +secondValue
    }else if(currentOperator == "/"){
        currentResult = +firstValue / +secondValue
    }else{
        return
    }
    console.log(currentResult)
    reset()
    display.value = currentResult
})

clearButton.addEventListener("click", (e) => {
    reset()
})

function reset(){
    firstValue = ""
    secondValue = ""
    currentOperator = ""
    display.value = ""
}
