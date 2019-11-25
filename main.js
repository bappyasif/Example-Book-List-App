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

    static deleteBook(element) {
        // Checking Whether Containg Elements Class Carries 'delete'
        if(element.classList.contains("delete")) {
            element.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        // Creating Expected Tag Element
        const alertDiv = document.createElement("div");
        // Asigning Class Name For Tag Element.
        alertDiv.className = `alert alert-${className}`;
        // Placing Div Elemnt Within D.O.M.
        alertDiv.appendChild(document.createTextNode(message));
        // Selecting Container For Div Tag
        const alertContainer = document.querySelector(".container");
        // Selecting Next Element Tag
        const bookForm = document.querySelector("#book-form");
        // Placing Element Within Tags
        alertContainer.insertBefore(alertDiv, bookForm);
        // Making It Go Dissapppear 
        setTimeout(() => document.querySelector(".alert").remove(), 2000);

    }

    static clearFields() {
        // Grab And Clear Fields
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
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

     // Validate Inputs For Books.
     if( bookTitle == "" || bookAuthor == "" || bookISBN == "" ) {
         
        //alert("Please Enter All Fields");
         UI.showAlert("Please Enter All Fields", "danger");
         //UI.showAlert("Please Enter All Fields", "info");
         //UI.showAlert("Please Enter All Fields", "success");

     } else {

        // Instantiate Book
        const bookCreated = new Book(bookTitle, bookAuthor, bookISBN);
        //console.log(bookCreated);
        // Add Book To UI
        UI.addBookToList(bookCreated);

        // Success Message
        UI.showAlert("New Book Successfully Added", "success");

        // Clear Fields
        UI.clearFields();

     }

    //  // Instantiate Book
    //  const bookCreated = new Book(bookTitle, bookAuthor, bookISBN);
    //  //console.log(bookCreated);
    //  // Add Book To UI
    //  UI.addBookToList(bookCreated);

    //  // Clear Fields
    //  UI.clearFields();
 });

// Event : Remove Book

// Creating Event Listener For Deleting A Book From Table.
document.querySelector("#table-for-book-list").addEventListener("click", (event) => {
    
    //console.log(event.target);
    // Triggering Delete
    UI.deleteBook(event.target);

    // Success Message
    UI.showAlert("Book Deleted", "info");
    //UI.showAlert("Book Deleted", "success");

});
