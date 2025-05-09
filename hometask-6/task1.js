function squereRectangle (height, width) {
    return height * width;
}

const squereRectangle2 = function (height, width) {
    return height * width;
}

const squereRectangle3 = (height, width) => height * width;

console.log(`Function Declaration: ${squereRectangle(8, 10)}`);
console.log(`Function Expression: ${squereRectangle(9, 10)}`);
console.log(`Arrow function expression: ${squereRectangle(10, 10)}`);
