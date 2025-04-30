let personAge = 23;
const minAge = 18;

// Перше рішення, але без булю
const isAdults = personAge >= minAge ? console.log("This person is adult") : console.log("This person is little crybaby");

///////////////////////////////////////////////////////////////////////////////////////////////

//Друге рішення з булем
let isAdult = personAge >= minAge ? true : false;
console.log(isAdult === true ? "This person is adult" : "This person is little crybaby")

///////////////////////////////////////////////////////////////////////////////////////////////