const num = document.querySelectorAll("#num")
const sinal = document.querySelectorAll("#sinal")
const resul = document.querySelector("#resul")
const sC = document.querySelector("#C")
const calc = document.querySelector("#calc")

let val1 = ""
let val2 = ""
num.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(sin === ""){
            if(calc.value == total){
                calc.value = ""
            }
            val1 = val1 + e.target.value
            calc.value = calc.value + e.target.value
            console.log(val1)
        }else{
            val2 = val2 + e.target.value
            calc.value = calc.value + e.target.value
            console.log(val2)
        }
        
    })
})

let sin = ""
sinal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(sin === "" && val1 !== ""){
            sin = sin + e.target.value
            calc.value = calc.value + sin
            console.log(sin)
        }else{
            return
        }
    })
})

let total = ""
resul.addEventListener("click", (e) => {
    if(sin == "+"){
        total = +val1 + +val2
    }else if(sin == "-"){
        total = +val1 - +val2
    }else if(sin == "*"){
        total = +val1 * +val2
    }else if(sin == "/"){
        total = +val1 / +val2
    }else{
        return
    }
    console.log(total)
    reset()
    calc.value = total
})

sC.addEventListener("click", (e) => {
    reset()
})

function reset(){
    val1 = ""
    val2 = ""
    sin = ""
    calc.value = ""
}
