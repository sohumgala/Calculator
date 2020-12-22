let displayValue = '';
let mathOperator = '';
let mathOperator2 = '';
let valOne = null;
const nums = document.querySelectorAll('.digit');
nums.forEach((num) => {
    num.addEventListener('click', () => {
       if (displayValue.length < 14) {
        displayValue = displayValue + num.id;
        document.getElementById("display").innerHTML = displayValue;
       }
    });
});
const ops = document.querySelectorAll('.operation');
ops.forEach((op) => {
    op.addEventListener('click', () => {
        operatorPress(op.id);
    });
});
const equalsBut = document.querySelector("#equals");
equalsBut.addEventListener('click', () => {
    displayValue = operate(mathOperator, parseFloat(valOne, 10), parseFloat(displayValue, 10));
    document.getElementById("display").innerHTML = displayValue;
    valOne = null;
    mathOperator = '';
});
const clearBut = document.querySelector("#clear");
clearBut.addEventListener('click', () => {
    clear();
});
const factBut = document.querySelector('.factorial');
factBut.addEventListener('click', () => {
    displayValue = factorial(displayValue);
    document.getElementById("display").innerHTML = displayValue;
    valOne = displayValue;
    displayValue = ''; 
});
// math functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function exponentiate(a, b) {
    return Math.pow(a, b);
}
function operate(operator, a, b) {
    if (operator === '+') {
        return "" + add(a, b);
    } else if (operator === '-') {
        return "" + subtract(a, b);
    } else if (operator === '*') {
        return "" + multiply(a, b);
    } else if (operator === '/') {
        return "" + divide(a, b);
    } else if (operator === '^') {
        return "" + exponentiate(a, b);
    }
}
function factorial(a) {
    if (a < 0) {
        return 0;
    }
    else if (a === 0) {
        return 1;
    } else if (a === 1) {
        return 1;
    } else {
        let sum = 1;
        for (let i = 1; i <= a; i++) {
            sum *= i;
        }
        return sum;
    }
}
// other necessary functions
function clear() {
    displayValue = '';
    mathOperator = '';
    valOne = null;
    document.getElementById("display").innerHTML = displayValue;
}
function operatorPress(operator) {
    if (valOne != null && displayValue != '' && mathOperator != '') {
        displayValue = operate(mathOperator, parseFloat(valOne, 10), parseFloat(displayValue, 10));
        document.getElementById("display").innerHTML = displayValue;
        valOne = displayValue;
        displayValue = '';
        mathOperator = operator;
    }
    mathOperator = operator;
    if (valOne === null && displayValue != '') {
        valOne = displayValue;
        displayValue = '';
    } 
}
