const car1 = {
    brand: "Porshe",
    model: "Taycan",
    year: 2026
}

const car2 = {
    brand: "Tesla",
    model: "S",
    owner: "Satoshi"
}

const car3 = {...car2, ...car1};
console.log(car3);