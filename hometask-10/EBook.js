import { Book } from "./Book.js";

export class EBook extends Book{
    constructor (title, author, year, file) {
        super (title, author, year);
        this.file = file;
    }

    get file() {
        return this._file;
    }
    set file(value) {
        if (typeof value !== 'string') {
            this._file = "pdf";
        }
        else {
            this._file = value;
        }
    }

    static formatToEBook(book, file) {
        if (!(book instanceof Book)) {
            throw new Error("Аргумент має бути екземпляром класу Book");
        }

        return new EBook(book.title, book.author, book.year, file);
    }

    printInfo() {
        console.log(`
            Назва книги: ${this.title}\n
            Автор: ${this.author}\n
            Рік видання: ${this.year}\n
            Формат файлу: ${this.file}
            `);
    }
}