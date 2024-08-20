//
// Simple CLI tool that returns the sum of the first two arguments.
//
// If you call the tool like this:
//   node index.js 5 5
//
// It prints the sum to standard output:
//   10
//

// TODO: Actually do the sum here.

// Get command-line arguments
const args = process.argv.slice(2);


// Convert arguments to numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if both arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.error('Both arguments must be valid numbers.');
    process.exit(1);
}

const sum = num1 + num2;

console.log(sum);