// Get command-line arguments
const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Function to perform the requested operation
function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        case 'exponent':
            return Math.pow(num1, num2);
        default:
            return 'Error: Unsupported operation';
    }
}

// Run the function and display the result
if (!isNaN(num1) && !isNaN(num2)) {
    console.log(`Result: ${calculate(operation, num1, num2)}`);
} else {
    console.log('Error: Please provide valid numbers.');
}
