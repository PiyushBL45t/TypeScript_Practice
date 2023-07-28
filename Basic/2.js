// Implementing For Loops in TypeScript
var _loop_1 = function (index) {
    setTimeout(function () {
        console.log(index);
    }, 1000
    // set the timeout to 1 second
    );
};
for (var index = 1; index <= 5; index++) {
    _loop_1(index);
}
