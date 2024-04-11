console.log("Ready to go! 🚀");

const currentYear = new Date().getFullYear();

const birthYear = parseInt(prompt("When were you born?"));

// ------------------------------
// Iteration 1
// ------------------------------
function greet(name) {
  console.log(`Hello, I'm ${name}!`);
}

// greet("João");

// ------------------------------
// Iteration 2
// ------------------------------
function greetWithAge(name) {
  const age = new Date().getFullYear() - birthYear;
  console.log(`Hello, I'm ${name}. I am ${age} years old.`);
}

// greetWithAge("João");

// ------------------------------
// Iteration 3
// ------------------------------
function calculateAge(birthYear) {
  return currentYear - birthYear;
}

function refactoredGreet(name) {
  console.log(`Hello, I'm ${name}. I am ${calculateAge(birthYear)} years old.`);
}

refactoredGreet("João");
