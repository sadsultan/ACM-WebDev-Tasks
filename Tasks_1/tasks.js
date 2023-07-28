// Task 1
let myBoolean = true;

// Task 2
let myString = "hello world";

// Task 3
let firstNumber = 20;

// Task 4
let secondNumber = 40;

// Task 5
secondNumber = 80;

// Task 6
let myArray = [myBoolean, myString];

// Task 7
myObject = {
    firstProperty: myArray,
    sumProperty: (firstNumber + secondNumber)
};

// Task 8
console.log(myObject);

// Task 9
console.log(myObject.sumProperty);

// Task 10
console.log(myObject.firstProperty[1]);

// Extra Tasks
// Task 1
let numberVariable = 0;
numberVariable += 3;
console.log(numberVariable);

// Task 2
// Both snippets are the exact same with no differences in the code or output.

// Task 3
const expression1 = 100 % 50; // 0
const expression2 = 100 / 50; // 2
const expression3 = expression1 < expression2; // true
const expression4 = expression3 && 300 + 5 === 305 ; // true
const expression5 = !expression4; // false
const unitedExpression = (!(100%5 < 100/50) && 300 + 5 === 305); // true

console.log(expression5);
console.log(unitedExpression);

// Task 4
// It evaluates to true

// Task 5
// Evaluates to true