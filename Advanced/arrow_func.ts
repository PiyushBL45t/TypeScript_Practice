
/**
 * To reduce the complexity of declaring functions in long parts of code, JavaScript ES6 
 * has Arrow functions. These functions do not specifically use the "function" keyword for declaration
 * of methods. Either it uses the arrow operator "=>". The syntax to declare arrow functions
 * is very siple, just use parenthesis () then an arrow operator and just curly brace {}. Thats it!, 
 * we have our newly declared arrow function.
 * Example: 
 */


/**
 *             PArameters of the function
 *                ^
 *                |
 *                |           
 */ 
let printer = (message) => {
    return message;
}   

console.log(
    "Message from arrow function is :" + printer("Hello, World")
)


// Another example to calculate the volume of cube
let areaOfCircle = (radius:number) => {
    return 3.14 * radius * radius;
}

console.log("Area of circle is: ", areaOfCircle(34))



 