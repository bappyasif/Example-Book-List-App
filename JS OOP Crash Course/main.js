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

// console.log(new_book.getSummary());
// console.log(another_book.getSummary());

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