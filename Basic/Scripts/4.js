"use strict";
/**
 * The lexical this keyword is the object pointing towards some property or a value.
 * We can use the this keyword for referencing a value or a function.
 * In functional programming approach "this " is used for the parameter reference.
 * In OOP concepts "this" is used for the Object referencng of the Class.
 */
console.log("Using normal function: ");
var employee = {
    id: 23,
    data: function () {
        var pointer = this;
        setTimeout(function () {
            console.log(pointer.id);
        }, 100);
    }
};
employee.data();
console.log("Using arrow function: ");
var employee = {
    id: 23,
    data: function () {
        setTimeout(() => {
            console.log(this.id);
        }, 100);
    }
};
employee.data();
//# sourceMappingURL=4.js.map