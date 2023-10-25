// Basic math operators
const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1/num2;
}

// Variables for each part of a calculator operation
let firstNumber;
let secondNumber;
let operator;

// Takes an operator and 2 numbers and then calls one of the above functions on the numbers
const operate = (num1, num2, operator) => {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2)
    } else {
        return "Error: invalid operator"
    }
};