const isAdult = (age) => age >= 18 ? "Adult, enter the club" : "Go to school";

console.log(`Age 25: ${isAdult(25)}\nAge 15: ${isAdult(15)}`);

console.log("/////////////////////////////////////////////////////////////");

const isAdult2 = (age) => age >= 18;

console.log("Чи є особа з віком 25 дорослою?", isAdult2(25));
console.log("Чи є особа з віком 15 дорослою?", isAdult2(15));