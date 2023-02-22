// Nodes references //
const addBook = document.querySelector(".add-book");

// Variables //
let myLibrary = [];

// Clases //
class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    read = "Unknown"
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Functions //
function addBookToLibrary(book) {}
