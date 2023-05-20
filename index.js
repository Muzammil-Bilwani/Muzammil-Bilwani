
// Question # 04

// Answer
let whats_your_name = prompt("Enter your name:");
let whats_your_age = prompt("Enter your age:");

if (whats_your_age >= 18) {
  console.log(`Welcome ${whats_your_name}, you are an adult.`);
} else {
  console.log(`Sorry ${whats_your_name}, you are not yet an adult.`);
}

// Question # 05

// Answers
let isRaining = true;
let isRaining1 = prompt("It is Raining ? Enter please 'Yes' or 'No' ");


if (isRaining1 == 'Yes' || isRaining1 == 'yes') {
    alert("Bring an umbrella");
} if (isRaining1 == 'No'|| isRaining1 == 'no') {
    alert("Leave the umbrella at home");
}

// Question # 2

// Answers 
let whether = prompt("Enter Number : ");

if (whether % 2 == 0) {
    alert(whether + " is Even Number");
} else {
    alert(whether + "is Odd Number");
}
