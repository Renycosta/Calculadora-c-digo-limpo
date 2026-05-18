export function calculate(Num1, Num2, Operator){
    const Number1 = Number(Num1)
    const Number2 = Number(Num2)

    return operations(Number1, Number2, Operator);
}

export function operations(Number1, Number2, Operator){
    if (Operator == '+') return Number1 + Number2
    else if (Operator == '-') return Number1 - Number2
    else if (Operator == '*') return Number1 * Number2 
    else if (Operator == '/') return Number1 / Number2 
}