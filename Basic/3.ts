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

var add = (a:number, b:number) => {
    return a + b
}

var subtract = (a:number, b:number) => {
    return a - b
}

var multiply = (a:number, b:number) => {
    return a * b
}

var divide = (a:number, b:number) => {
    return a/b
}

var power = (a: number, b:number) => {
    return a**b
}
let a = 40, b = 10;

console.log(
    "Addition: " + add(a, b) + "\n", 
    "Subtraction: " + subtract(a, b) + "\n",
    "Multiplicatin: " + multiply(a, b) + "\n",
    "Division: " + divide(a, b) + "\n",
    "Power: " + power(a, b)
)






