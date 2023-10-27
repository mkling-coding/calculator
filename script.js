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

// Function for all number event listeners - checks if currentString is 0 and if so make currentString the number. Else, add number to currentString
const addNumberToDisplay = num => {
    if (currentString === "0") {
        currentString = num;
    } else {
        currentString += num;
    }

    numberDisplay.textContent = currentString;
}

// Decimal clicked
const whenDecimalClicked = () => {
    if (currentString === "0") {
        currentString = "."
    // Only adds "." to currentString if there isn't already a decimal in first or second part of equation
    } else if (currentString.includes("+") && (currentString.substring((currentString.indexOf("+") + 1), currentString.length)).includes(".") === false || currentString.includes("-") && (currentString.substring((currentString.indexOf("-") + 1), currentString.length)).includes(".") === false || currentString.includes("*") && (currentString.substring((currentString.indexOf("*") + 1), currentString.length)).includes(".") === false || currentString.includes("/") && (currentString.substring((currentString.indexOf("/") + 1), currentString.length)).includes(".") === false || currentString.includes("%") && (currentString.substring((currentString.indexOf("%") + 1), currentString.length)).includes(".") === false) {
        currentString += ".";
    } else if (currentString.includes(".") === false) {
        currentString += "."
    }

    numberDisplay.textContent = currentString;
}

// Function runs when = is tapped or clicked, checks if operator is last character or not and runs different code for exceptions
const calculateAnswer = () => {
    let lastCharacter = currentString.charAt(currentString.length - 2);

    if (currentString.includes("+") && lastCharacter != "+") {
        // firstNumber equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // secondNumber equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("+") + 1), currentString.length);
        // currentString = sum of two numbers
        currentString = (add(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now sum of last two numbers
        firstNumber = currentString;
        // Set display to currentString
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("-") && lastCharacter != "-") {
        // firstNumber equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // secondNumber equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("-") + 1), currentString.length);
        // currentString = difference of two numbers
        currentString = (subtract(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now difference of last two numbers
        firstNumber = currentString;
        // Set display to currentString
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("*") && lastCharacter != "*") {
        // firstNumber equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // secondNumber equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("*") + 1), currentString.length);
        // currentString = product of two numbers
        currentString = (multiply(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now product of last two numbers
        firstNumber = currentString;
        // Set display to currentString
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("/") && lastCharacter != "/") {
        // firstNumber equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // secondNumber equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("/") + 1), currentString.length);
        // currentString = quotient of two numbers
        currentString = (divide(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now quotient of last two numbers
        firstNumber = currentString;
        // Set display to currentString
        numberDisplay.textContent = currentString;
    } else if (currentString.includes("%") && lastCharacter != "%") {
        // firstNumber equals number before operator
        firstNumber = currentString.substring(0, currentString.indexOf(" "));
        // secondNumber equals number after operator
        secondNumber = currentString.substring((currentString.indexOf("%") + 1), currentString.length);
        // currentString = remainder of two numbers
        currentString = (remainder(parseFloat(firstNumber), parseFloat(secondNumber))).toString();
        // firstNumber is now remainder of last two numbers
        firstNumber = currentString;
        // Set display to currentString
        numberDisplay.textContent = currentString;
    }
}

// Function for all operator event listeners - outputs answer if another operator is clicked when an operator is already present in the equation. Makes the calculator cleaner
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
            // firstNumber equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // secondNumber equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("+") + 1), currentString.length);
            // currentString = sum of two numbers
            currentString = add(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now sum of last two numbers
            firstNumber = currentString;
            // Add inputted operator after firstNumber to currentString
            currentString += ` ${operator} `;
            // Set display to currentString
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("-")) {
        // -
        if (lastCharacter === "-") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // firstNumber equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // secondNumber equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("-") + 1), currentString.length);
            // currentString = difference of two numbers
            currentString = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now difference of last two numbers
            firstNumber = currentString;
            // Add inputted operator to currentString
            currentString += ` ${operator} `;
            // Set display to currentString
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("*")) {
        // *
        if (lastCharacter === "*") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // firstNumber equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // secondNumber equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("*") + 1), currentString.length);
            // currentString = product of two numbers
            currentString = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now product of last two numbers
            firstNumber = currentString;
            // Add inputted operator to currentString
            currentString += ` ${operator} `;
            // Set display to currentString
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("/")) {
        // /
        if (lastCharacter === "/") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // firstNumber equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // secondNumber equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("/") + 1), currentString.length);
            // currentString = quotient of two numbers
            currentString = divide(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now quotient of last two numbers
            firstNumber = currentString;
            // Add inputted operator to currentString
            currentString += ` ${operator} `;
            // Set display to currentString
            numberDisplay.textContent = currentString;
        }
    } else if (currentString.includes("%")) {
        // %
        if (lastCharacter === "%") {
            currentString = currentString.slice(0, -3) + ` ${operator} `
        } else {
            // firstNumber equals number before operator
            firstNumber = currentString.substring(0, currentString.indexOf(" "));
            // secondNumber equals number after operator
            secondNumber = currentString.substring((currentString.indexOf("%") + 1), currentString.length);
            // currentString = remainder of two numbers
            currentString = remainder(parseFloat(firstNumber), parseFloat(secondNumber));
            // firstNumber is now remainder of last two numbers
            firstNumber = currentString;
            // Add inputted operator to currentString
            currentString += ` ${operator} `;
            // Set display to currentString
            numberDisplay.textContent = currentString;
        }
    } else if (currentString) {
        currentString += ` ${operator} `;
        numberDisplay.textContent = currentString;
    }
}

// Event listeners for buttons on keyboard
document.addEventListener("keyup", function(e) {
    // Numbers
    if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0") {
        addNumberToDisplay(e.key)
    // Operators
    } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "%") {
        findAnswer(e.key)
    // =
    } else if (e.key === "=" || e.key === "Enter") {
        calculateAnswer();
    // .
    } else if (e.key === ".") {
        whenDecimalClicked();
    }
})

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
    addNumberToDisplay("1");
})

buttons[5].addEventListener("click", function(e) {
    // 2
    addNumberToDisplay("2")
})

buttons[6].addEventListener("click", function(e) {
    // 3
    addNumberToDisplay("3")
})

buttons[7].addEventListener("click", function(e) {
    // Multiply function
    findAnswer("*")
})

buttons[8].addEventListener("click", function(e) {
    // 4
    addNumberToDisplay("4")
})

buttons[9].addEventListener("click", function(e) {
    // 5
    addNumberToDisplay("5")
})

buttons[10].addEventListener("click", function(e) {
    // 6
    addNumberToDisplay("6")
})

buttons[11].addEventListener("click", function(e) {
    // Divide function
    findAnswer("/")
})

buttons[12].addEventListener("click", function(e) {
    // 7
    addNumberToDisplay("7")
})

buttons[13].addEventListener("click", function(e) {
    // 8
    addNumberToDisplay("8")
})

buttons[14].addEventListener("click", function(e) {
    // 9
    addNumberToDisplay("9")
})

buttons[15].addEventListener("click", function(e) {
    // Subtract function
    findAnswer("-")
})

buttons[16].addEventListener("click", function(e) {
    // 0
    addNumberToDisplay("0")
})

buttons[17].addEventListener("click", function(e) {
    // .
    whenDecimalClicked();
})

buttons[18].addEventListener("click", function(e) {
    // Operate function
    calculateAnswer();
})
