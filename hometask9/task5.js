const users = [
    {name: "Satoshi", email: "satoshi.nakamoto@gmail.com", age: 22},
    {name: "Kaiden", email: "kaiden.kamui@gmail.com", age: 20},
    {name: "Kamui", email: "kamui.kaiden@gmail.com", age: 21}
]

for (const {name, email, age} of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}