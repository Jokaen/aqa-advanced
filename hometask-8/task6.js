const numbersList = [1,10,14,2,4,5,43,34];
const copyNumbersList = [...numbersList];

copyNumbersList.sort((a, b) => a - b);
console.log(copyNumbersList);
