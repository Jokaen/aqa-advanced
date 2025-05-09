function checkOrder (available, order) {
    if (order === 0) return "Your order is empty";
    else if (available < order) return"Your order is too large, we don’t have enough goods.";
    else return "Your order is accepted";
}

console.log(checkOrder(10, 0))
console.log(checkOrder(10, 10));
console.log(checkOrder(10, 5));

console.log("////////////////////////////////////////////////////////////////////////")

const checkOrder2 = (available, order) =>
    order === 0
        ? "Your order is empty"
        : order > available
        ? "Your order is too large, we don’t have enough goods."
        : "Your order is accepted";

console.log(checkOrder2(10, 0))
console.log(checkOrder2(10, 10));
console.log(checkOrder2(10, 5));
        