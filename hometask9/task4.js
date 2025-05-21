const person = {
    firstName: "Satoshi",
    lastName: "Nakamoto",
    age: 22
}

person.email = "satoshi.nakamoto@gmail.com";
delete person.age;

console.log(person);