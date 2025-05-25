const book = {
    title: "BitCoin",
    author: "Satoshi Nakamoto",
    year: 2008
}
const {title = "no title", author = "no author", year = "no year"} = book;

console.log(title);
console.log(author);
console.log(year);