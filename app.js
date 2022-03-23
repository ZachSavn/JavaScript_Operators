console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

// YOUR CODE HERE
let a1 = 20
let b = 4
let add = a1 + b
let minus = a1 - b
let multiply = a1 * b
let dividing = a1 / b
console.log(add)//24
// Exercise 2
console.log("EXERCISE 2:\n==========\n");

// YOUR CODE HERE
let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

let add1 = a + str //1111
let add2 = a + str2 // 11eleven
let add3 = a + isPresent //12
let add4 = a + firstName //11Jackie
let add5 = a + lastName //11Chan
console.log(add1, add2, add3, add4, add5)
// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// YOUR CODE HERE
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

let answer1 = d ==str3; //true
let answer2 = d ===str3; //false
let answer3 = !isPresent2; //true
let answer4 = ("eleven" == str4 && d >= str3); //false
let answer5 = (!isPresent2 || isPresent2); //true
let answer6 = 0 == false; // true
let answer7 = 0 ===false; //false
let answer8 = 0 != false; //false
let answer9 = 0 != false; //false
console.log(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9)