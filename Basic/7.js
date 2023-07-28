/*
 when we do not mention a type of a variable in TypeScript, it can get confused while using
 bult in method for that variable. Like if we mentioned a string type variable without mentioning its type
 we need to explicitly mention the type of that variable while using the built in methods. See the below example.
*/
var myString;
myString = "A sequence of characters";
// creating an enclosure for the string type to fetch its length. It eliminates the transpiler confusion.
var len = myString.length;
console.log(len);
// another type of implementation
len = myString.length;
console.log(len);
