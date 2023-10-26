// Calculator buttons
const buttons = document.querySelectorAll(".box")
const numberDisplay = document.querySelector("#displayedNumber p")

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
    return num1 / num2;
}

const remainder = (num1, num2) => {
    return num1 % num2;
}

// Variables for each part of a calculator operation
let firstNumber;
let secondNumber;
let operator;
let currentString;

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

// Checks if operator is in currentString or if value passed is an operator -- if so, add space before number. If not, just add number.

const checkForSpace = (characterInput) => {
    // If currentString isn't empty
    if (currentString) {
        let lastCharacter = currentString.charAt(currentString.length - 1);
        console.log(lastCharacter)
        // If lastCharacter is operator, add space before character
        if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/" || lastCharacter === "%") {
            currentString += ` ${characterInput}`
        // Else if characterInput is an operator, add space before character
        } else if (characterInput === "+" || characterInput === "-" || characterInput === "*" || characterInput === "/" || characterInput === "%") {
            currentString += ` ${characterInput}`
        // Else just add character
        } else {
            currentString += characterInput
        }
    // Else if currentString is empty
    } else {
        currentString = characterInput
    }
}

//
checkForSpace("+")
console.log(currentString)

// Add clear all function that makes the calculator start from scratch again

// Add delete function that deletes one number

// 1. Click number

buttons[0].addEventListener("click", function(e) {
    // Clear all function
})

buttons[1].addEventListener("click", function(e) {
    // Delete function
})

buttons[2].addEventListener("click", function(e) {
    // Check if currentString isn't empty - if so, characterInput = 0 %
    // Remainder function
})

buttons[3].addEventListener("click", function(e) {
    // Check if currentString isn't empty - if so, characterInput = 0 %
    // Add function
})

buttons[4].addEventListener("click", function(e) {
    // 1
})

buttons[5].addEventListener("click", function(e) {
    // 2
})

buttons[6].addEventListener("click", function(e) {
    // 3
})

buttons[7].addEventListener("click", function(e) {
    // Check if currentString isn't empty - if so, characterInput = 0 %
    // Multiply function
})

buttons[8].addEventListener("click", function(e) {
    // 4
})

buttons[9].addEventListener("click", function(e) {
    // 5
})

buttons[10].addEventListener("click", function(e) {
    // 6
})

buttons[11].addEventListener("click", function(e) {
    // Check if currentString isn't empty - if so, characterInput = 0 %
    // Divide function
})

buttons[12].addEventListener("click", function(e) {
    // 7
})

buttons[13].addEventListener("click", function(e) {
    // 8
})

buttons[14].addEventListener("click", function(e) {
    // 9
})

buttons[15].addEventListener("click", function(e) {
    // Check if currentString isn't empty - if so, characterInput = 0 %
    // Subtract function
})

buttons[16].addEventListener("click", function(e) {
    // 0
})

buttons[17].addEventListener("click", function(e) {
    // .
})

buttons[18].addEventListener("click", function(e) {
    // Operate function
})

// 2. Store number in currentString.
// If operator is [-1] in currentString, add space and THEN number


// Once operator is clicked, store the number(s) in firstNumber and add operator to currentString.

// 2. Check if firstNumber exists -- if firstNumber exists, current number is going to be stored in secondNumber. Else, current number is stored in firstNumber. Store as strings so the numbers can be displayed.

// 3. User clicks an operator
// - Exception: User clicks operator first, before entering any numbers
// Store operator in the operator variable, display in displayedNumber p after number.

// 4. User clicks equal sign
// - Exception: User enters equal first
// - Exception: No second number, return 0
// Run operate function, make answer firstNumber in case they do another operation with the first number

// Optional: add past equations at the top like google calculator


