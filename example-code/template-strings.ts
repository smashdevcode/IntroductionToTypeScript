
var value = 10;
var stringValue = `My daughter is ${value} years old.`;

var value1 = 2;
var value2 = 3;
var stringValue2 = `My dog is ${value1 * value2} years old.`;

// Tagged template strings are only available when outputting to ES6.

// var a = 5;
// var b = 10;
//
// function tag(strings, ...values) {
//   console.log(strings[0]); // "Hello "
//   console.log(strings[1]); // " world "
//   console.log(values[0]);  // 15
//   console.log(values[1]);  // 50
//
//   return "Bazinga!";
// }
//
// tag`Hello ${ a + b } world ${ a * b}`;
