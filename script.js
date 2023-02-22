// Nodes references //
const addBook = document.querySelector(".add-book");
const form = document.querySelector("#myForm");

// Variables //
let myLibrary = [];

// Classes //
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

function openForm() {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else form.classList.add("hidden");
}
