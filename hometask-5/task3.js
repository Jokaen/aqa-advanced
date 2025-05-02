const number = 5;

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}

console.log("//////////////////////////////////////////////////////////////");

let counter = 1;
while (counter <= 10) {
    let result = number * counter;
    console.log(`${number} * ${counter} = ${result}`);
    counter++;
}