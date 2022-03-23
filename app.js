console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a1 = 20
let b = 4
let add = a1 + b //24
let minus = a1 - b //16
let multiply = a1 * b //80
let dividing = a1 / b //5
console.log(add, minus, multiply, dividing)
// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

let add1 = a + str //"1111" this cacatenates due to str 
let add2 = a + str2 // "11eleven" same reason as above
let add3 = a + isPresent //12 *true converted to 1 int
let add4 = a + firstName //"11Jackie" refer to 1&2
let add5 = a + lastName //11Chan
let add6 = isPresent + lastName //trueChan same reason as 1&2
console.log(add1, add2, add3, add4, add5, add6)
// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

let answer1 = d ==str3; //true loose allows for type coercion 
let answer2 = d ===str3; //false *different operand types will not compute
let answer3 = !isPresent2; //true *! reads as not
let answer4a = !d; // false only looking through boolean any number is true so logical not is false
let answer4 = ("eleven" == str4 && d >= str3); //false first condition is false 
let answer5 = (!isPresent2 || isPresent2); //true or statements only need one true
let answer6 = 0 == false; //true
let answer7 = 0 ===false; //false *2 different data types can't be evaluated
let answer8 = 0 != false; //false 0 equates to false
let answer9 = 0 !== false; //true
console.log(answer1, answer2, answer3, answer4, answer4a, answer5, answer6, answer7, answer8, answer9)
//do console.log() for each answer to have them in a vertical line