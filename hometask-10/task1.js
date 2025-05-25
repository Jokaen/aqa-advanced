import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const firstBook = new Book( "Witcher", "Anjei Sapkovskiy", 1986);
const secondBook = new Book("Alchemic", "Paulo Koelyo", 1988);

const firstEBook = new EBook("1984", "George Orwell", 1949, "pdf");
const secondEBook = new EBook("To Kill a MockinBird", "Harper Lee", 1960, "pdf");

firstBook.printInfo();
console.log("//////////////////////");
secondBook.printInfo();


console.log("//////////////////////");


firstEBook.printInfo();
console.log("//////////////////////");
secondEBook.printInfo();

console.log("//////////////////////");
console.log("Найстаріша книга:")
console.log(Book.whichBookIsOldest(firstBook, secondBook, firstEBook, secondEBook));

console.log("//////////////////////");
console.log("Книга була переведена в EBook:")
console.log(EBook.formatToEBook(firstBook, "pdf"));