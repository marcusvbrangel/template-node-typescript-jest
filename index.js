var sum = function (number1, number2) {
    if (number1 === void 0) { number1 = 0; }
    if (number2 === void 0) { number2 = 0; }
    return number1 + number2;
};
var main = function () {
    var result = sum(5, 2);
    console.log(result);
};
main();
