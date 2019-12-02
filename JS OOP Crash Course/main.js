// Sub Classes
class BookObject {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} 
        Was Written By ${this.author} 
        Year Was ${this.year}`;
    }
}


class MagazineClass extends BookObject {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instatntiate Object
const magazineSample = new MagazineClass("New Magazine", "Jimmy Hoe", "2018", "Jan");

console.log(magazineSample);

console.log(magazineSample.getSummary());


/*


// Using Class
class BookObject {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} 
        Was Written By ${this.author} 
        Year Was ${this.year}`;
    }

    getAge() {
        const bookAge = new Date().getFullYear() - this.year;
        return `${this.title} Is ${bookAge} Years Old`;
    }

    yearRevised(revisedYear) {
        this.year = revisedYear;
        this.revised = true;
    }

    static topBooks() {
        return "David Hume";
    }
}

// Instantiate Object
const book_new = new BookObject("Just Created", "John Doel", "2018");

console.log(book_new);

//book_new.yearRevised = "2019";
book_new.yearRevised("2019");

console.log(book_new);

// Calling A Static Method
//book_new.topBooks(); // This Does Not Work Because It's Not Calling From Class Itself. 

console.log(BookObject.topBooks()); // This Works Because It's Calling Form Class Itself.




// Protos Object 

const bookProtos = {
    getSummary : function() {
        return `${this.title} 
        Was Written By ${this.author} 
        Year Was ${this.year}`;
    },

    getAge : function() {
        const bookAge = new Date().getFullYear() - this.year;
        return `${this.title} Is ${bookAge} Years Old`;
    }
}

// Instatantiate Object
// First Method
// const bookCreated = Object.create(bookProtos);
// bookCreated.title = "New Book";
// bookCreated.author = "John Doyle";
// bookCreated.year = "2018";

// Second Method
const bookCreated = Object.create(bookProtos, {
    title : {value: 'New Book'},
    author : {value: 'John Dyle'},
    year : {value: '2018'}
});

console.log(bookCreated);



// Inheritence Example

const bookSample = {
    title : "Book One",
    author : "John Doe",
    year : "2018",
};

// Using Constructor
function BookSample(bookTitle, bookAuthor, bookPublished) {
    console.log("Book Instantiated..");
    this.title = bookTitle;
    this.author = bookAuthor;
    this.year = bookPublished;
}

// Using Prototype For getSummary
BookSample.prototype.getSummary = function() {
    return `${this.title} Was Written By ${this.author} Year Was ${this.year}`;
};

// Magazine Constructor
function MagazineConstructor(title, author, year, month) {
    BookSample.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
MagazineConstructor.prototype = Object.create(BookSample.prototype);

// Instantiate Magazine Sample Object
const magSample = new MagazineConstructor("Magazine Sample", "John Doe", "2018", "Jan");

console.log(magSample); // Currently Using BookSample Constructor

// To Change To Magazine Constructor
//MagazineConstructor.prototype.constructor = MagazineConstructor; // Now using Magazine Constructor

console.log(magSample.getSummary());



// const sample_one = "Hello";
// console.log(sample_one.toLocaleUpperCase());
// console.log(typeof sample_one);
// console.log(sample_one.toLowerCase());

// const sample_two = new String("Hello");
// console.log(typeof sample_two);
// console.log(sample_two.toLocaleUpperCase());
// console.log(sample_two.toLowerCase());

// console.log(window);
// window.alert("1");
// alert("2");
// console.log(navigator.geolocation.getCurrentPosition);

// console.log(navigator.appVersion);
// console.log(navigator.appCodeName);
// console.log(navigator.appName);

const bookSample = {
    title : "Book One",
    author : "John Doe",
    year : "2018",
    getSummary : function() {
        return `${this.title} Was Written By ${this.author} Year Was ${this.year}`;
    }
};

console.log(bookSample);
console.log(bookSample.title);
console.log(bookSample.author);
console.log(bookSample.year);
console.log(bookSample.getSummary());
console.log(Object.values(bookSample));
console.log(Object.keys(bookSample));

// Using Constructor
function BookSample(bookTitle, bookAuthor, bookPublished) {
    console.log("Book Instantiated..");
    this.title = bookTitle;
    this.author = bookAuthor;
    this.year = bookPublished;

    // this.getSummary = function() {
    //     return `${this.title} Was Written By ${this.author} Year Was ${this.year}`;
    // }
}

// Objct Instantiation
const new_book = new BookSample("Book One", "John Doel", "2018");
const another_book = new BookSample("Book Two", "Joan Dee", "2018");

console.log(new_book.title);
console.log(another_book.title);

console.log(new_book.getSummary());
console.log(another_book.getSummary());

console.log(new_book);
console.log(another_book);


// Using Prototype For getSummary
BookSample.prototype.getSummary = function() {
    return `${this.title} Was Written By ${this.author} Year Was ${this.year}`;
};

console.log(new_book.getSummary());
console.log(another_book.getSummary());

console.log(new_book);
console.log(another_book);

// Using Prototype For Book Age
BookSample.prototype.getBookPublishedAge = function() {
    const bookAge = new Date().getFullYear() - this.year;
    return `${this.title} Is ${bookAge} Years Old`;
};

console.log(new_book.getBookPublishedAge());
console.log(another_book.getBookPublishedAge());

// Using Prototype For Book Revised
BookSample.prototype.bookRevised = function(revisedYear) {
    this.year = revisedYear;
    this.revised = true;
}

console.log(new_book);
new_book.bookRevised("2019");
console.log(new_book);

console.log(another_book);
another_book.bookRevised("2019");
console.log(another_book);

*/