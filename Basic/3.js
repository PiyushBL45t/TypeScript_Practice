/* Arrow functions in TypeScript are one of the advanced function declarations for TypeScript.
They are used for reducing the complexity of code and we can actually declare a function with block scopeed variables.
*/
// function printSomething() {
//     console.log(10)
// }
// var getValue = () => {
//     return 10
// }
// console.log(
//     getValue()
// )
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};
var power = function (a, b) {
    return Math.pow(a, b);
};
var a = 40, b = 10;
console.log("Addition: " + add(a, b) + "\n", "Subtraction: " + subtract(a, b) + "\n", "Multiplicatin: " + multiply(a, b) + "\n", "Division: " + divide(a, b) + "\n", "Power: " + power(a, b));
