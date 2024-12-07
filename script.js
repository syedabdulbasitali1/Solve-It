// Select the input box and buttons
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

// Initialize the current input string
let currentInput = "";

// Function to update the display
function updateDisplay(value) {
    inputBox.value = value;
}

// Function to calculate the result
function calculateResult() {
    try {
        currentInput = eval(currentInput).toString(); // Evaluate the expression
        updateDisplay(currentInput);
    } catch (error) {
        updateDisplay("Error"); // Display "Error" for invalid expressions
        currentInput = ""; // Reset input on error
    }
}

// Function to clear all input
function clearInput() {
    currentInput = "";
    updateDisplay(currentInput);
}

// Function to delete the last character
function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

// Function to handle button clicks
function handleButtonClick(buttonText) {
    if (buttonText === '=') {
        calculateResult();
    } else if (buttonText === 'AC') {
        clearInput();
    } else if (buttonText === 'DEL') {
        deleteLastCharacter();
    } else {
        currentInput += buttonText;
        updateDisplay(currentInput);
    }
}

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        handleButtonClick(buttonText);
    });
});
