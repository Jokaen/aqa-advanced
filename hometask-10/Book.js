export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string') {
            this._title = "Назва книги невідома";
            return;
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        try {
            const [first, last] = value.split(" ");
            this._author = `${first[0].toUpperCase()}.${last[0].toUpperCase()}`;        
        } catch {
            this._author = value;
        }
    }

    get year() {
        return this._year;
    }
    set year(value) {
        //if (value < 2000) {
        //     this._year = "Ця книга з 19го сторіччя";
        //     return;
        // }
        this._year = value;
    }

    static whichBookIsOldest(...books) {
        let oldestBook = books[0];
        for(const book of books) {
            if(book?.year < oldestBook?.year) {
                oldestBook = book;
            }
        }
        return oldestBook;
    }

    printInfo() {
        console.log(`
            Назва книги: ${this.title}\n
            Автор: ${this.author}\n
            Рік видання: ${this.year}
            `);
    }
}