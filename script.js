// Calculator buttons
const buttons = document.querySelectorAll(".box")
const numberDisplay = document.querySelector("#currentNumber")

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
let currentString = "0";

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

const findAnswer = operator => {
    let lastCharacter = "";
    if (currentString.length >= 4) {
        lastCharacter = currentString.charAt(currentString.length - 2);
    } else {
        lastCharacter = currentString.charAt(currentString.length - 1);
    }

    if (currentString.includes("+")) {
        // +
        if (lastCharacter === "+") {
            currentString = currentString.slice(0, -3) + ` ${operator} `;
            numberDisplay.textContent = currentString;
        } else {
            // First number equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // Second number equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("+") + 1), currentString.length);
            // Current string = remainder of two numbers
            currentString = add(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now remainder of last two numbers
            firstNumber = currentString;
            // Add remainder to currentString
            currentString += ` ${operator} `;
            // Set display to remainder
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("-")) {
        // -
        if (lastCharacter === "-") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // First number equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // Second number equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("-") + 1), currentString.length);
            // Current string = remainder of two numbers
            currentString = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now remainder of last two numbers
            firstNumber = currentString;
            // Add remainder to currentString
            currentString += ` ${operator} `;
            // Set display to remainder
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("*")) {
        // *
        if (lastCharacter === "*") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // First number equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // Second number equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("*") + 1), currentString.length);
            // Current string = remainder of two numbers
            currentString = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now remainder of last two numbers
            firstNumber = currentString;
            // Add remainder to currentString
            currentString += ` ${operator} `;
            // Set display to remainder
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("/")) {
        // /
        if (lastCharacter === "/") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // First number equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // Second number equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("/") + 1), currentString.length);
            // Current string = remainder of two numbers
            currentString = divide(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now remainder of last two numbers
            firstNumber = currentString;
            // Add remainder to currentString
            currentString += ` ${operator} `;
            // Set display to remainder
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("%")) {
        // %
        if (lastCharacter === "%") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // First number equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // Second number equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("%") + 1), currentString.length);
            // Current string = remainder of two numbers
            currentString = remainder(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now remainder of last two numbers
            firstNumber = currentString;
            // Add remainder to currentString
            currentString += ` ${operator} `;
            // Set display to remainder
            numberDisplay.textContent = currentString;
        }
    } else if (currentString) {
        currentString += ` ${operator} `;
        numberDisplay.textContent = currentString;
    }
}

buttons[0].addEventListener("click", function(e) {
    // Clear all function
    currentString = "0";
    numberDisplay.textContent = currentString;
})

buttons[1].addEventListener("click", function(e) {
    // Delete function
    let lastCharacter = currentString.charAt(currentString.length - 2);

    if (currentString.includes("+") && lastCharacter === "+" || currentString.includes("-") && lastCharacter === "-" || currentString.includes("*") && lastCharacter === "*" || currentString.includes("/") && lastCharacter === "/" || currentString.includes("%") && lastCharacter === "%") {
        currentString = currentString.slice(0, -2);
        numberDisplay.textContent = currentString;
    } else if (currentString.length > 1) {
        currentString = currentString.slice(0, -1);
        numberDisplay.textContent = currentString;
    } else {
        currentString = "0";
        numberDisplay.textContent = currentString;
    }
})

buttons[2].addEventListener("click", function(e) {
    // Remainder function
    findAnswer("%");
})

buttons[3].addEventListener("click", function(e) {
    // Add function
    findAnswer("+")
})

buttons[4].addEventListener("click", function(e) {
    // 1

    if (currentString === "0") {
        currentString = "1"
    } else {
        currentString += "1"
    }

    numberDisplay.textContent = currentString;
})

buttons[5].addEventListener("click", function(e) {
    // 2

    if (currentString === "0") {
        currentString = "2"
    } else {
        currentString += "2"
    }

    numberDisplay.textContent = currentString;
})

buttons[6].addEventListener("click", function(e) {
    // 3

    if (currentString === "0") {
        currentString = "3"
    } else {
        currentString += "3"
    }

    numberDisplay.textContent = currentString;
})

buttons[7].addEventListener("click", function(e) {
    // Multiply function
    findAnswer("*")
})

buttons[8].addEventListener("click", function(e) {
    // 4

    if (currentString === "0") {
        currentString = "4"
    } else {
        currentString += "4"
    }

    numberDisplay.textContent = currentString;
})

buttons[9].addEventListener("click", function(e) {
    // 5

    if (currentString === "0") {
        currentString = "5"
    } else {
        currentString += "5"
    }

    numberDisplay.textContent = currentString;
})

buttons[10].addEventListener("click", function(e) {
    // 6

    if (currentString === "0") {
        currentString = "6"
    } else {
        currentString += "6"
    }

    numberDisplay.textContent = currentString;
})

buttons[11].addEventListener("click", function(e) {
    // Divide function
    findAnswer("/")
})

buttons[12].addEventListener("click", function(e) {
    // 7

    if (currentString === "0") {
        currentString = "7"
    } else {
        currentString += "7"
    }

    numberDisplay.textContent = currentString;
})

buttons[13].addEventListener("click", function(e) {
    // 8

    if (currentString === "0") {
        currentString = "8"
    } else {
        currentString += "8"
    }

    numberDisplay.textContent = currentString;
})

buttons[14].addEventListener("click", function(e) {
    // 9

    if (currentString === "0") {
        currentString = "9"
    } else {
        currentString += "9"
    }

    numberDisplay.textContent = currentString;
})

buttons[15].addEventListener("click", function(e) {
    // Subtract function
    findAnswer("-")
})

buttons[16].addEventListener("click", function(e) {
    // 0

    if (currentString === "0") {
        currentString = "0"
    } else {
        currentString += "0"
    }

    numberDisplay.textContent = currentString;
})

buttons[17].addEventListener("click", function(e) {
    // .

    if (currentString === "0") {
        currentString = "."
    // Only adds "." to currentString if there isn't already a decimal
    } else if (currentString.includes(".") === false) {
        currentString += "."
    }

    numberDisplay.textContent = currentString;
})

buttons[18].addEventListener("click", function(e) {
    // Operate function
    let lastCharacter = currentString.charAt(currentString.length - 2);

    if (currentString.includes("+") && lastCharacter != "+") {
        // First number equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // Second number equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("+") + 1), currentString.length);
        // Current string = remainder of two numbers
        currentString = (add(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now remainder of last two numbers
        firstNumber = currentString;
        // Set display to remainder
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("-") && lastCharacter != "-") {
        // First number equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // Second number equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("-") + 1), currentString.length);
        // Current string = remainder of two numbers
        currentString = (subtract(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now remainder of last two numbers
        firstNumber = currentString;
        // Set display to remainder
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("*") && lastCharacter != "*") {
        // First number equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // Second number equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("*") + 1), currentString.length);
        // Current string = remainder of two numbers
        currentString = (multiply(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now remainder of last two numbers
        firstNumber = currentString;
        // Set display to remainder
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("/") && lastCharacter != "/") {
        // First number equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // Second number equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("/") + 1), currentString.length);
        // Current string = remainder of two numbers
        currentString = (divide(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now remainder of last two numbers
        firstNumber = currentString;
        // Set display to remainder
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("%") && lastCharacter != "%") {
        // First number equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // Second number equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("%") + 1), currentString.length);
        // Current string = remainder of two numbers
        currentString = (remainder(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now remainder of last two numbers
        firstNumber = currentString;
        // Set display to remainder
        numberDisplay.textContent = currentString;
    }
})


