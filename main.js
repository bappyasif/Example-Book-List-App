// Book Class : Represents Any Book Object

class Book {
    
    constructor(title, author, isbn) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;

        // this.titleReferenced = title;
        // this.authorReferenced = author;
        // this.isbnReferenced = isbn;
    }
}

// UI Class : Handle UI

class UI {
    static displayBooks() {
        
        // Dummy Books
        const storedBooks = [
            {
                title: "First Book",
                author: "John Doe",
                isbn: "77559977"
            },

            {
                title: "Second Book",
                author: "Sicko Demio",
                isbn: "88994433"
            }
        ];

        const books = storedBooks;
        
        // Displaying All Stored Books 
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        
        // Targeting Tag Which Will Accommodate Our Stored Books, A Table
        var list = document.querySelector("#table-for-book-list");

        // Creting New Row For Book Object Underneath That Targeted Table Tag As tr
        const newRow = document.createElement("tr");

        // Each Book Will Contain td Element For Each Constructor Element.
        newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;

            // Lsiting Each Books Within Table As Appending Child Elements.
            list.appendChild(newRow);
    }
}

// Store Class : Handles Storage

// Event : Display Books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event : Add A Book Object

document.querySelector("#book-form").addEventListener("submit", (event)=> 
{
    // Prevent Default Actual Submit.
    event.preventDefault();

     // Get Values From Form.
     const bookTitle = document.querySelector("#title").value;
     const bookAuthor = document.querySelector("#author").value;
     const bookISBN = document.querySelector("#isbn").value;

     // Instantiate Book
     const bookCreated = new Book(bookTitle, bookAuthor, bookISBN);

     console.log(bookCreated);
 });

// Event : Remove Book