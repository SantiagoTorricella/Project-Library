// Nodes references //
const addBook = document.querySelector(".add-book");
const form = document.querySelector("#myForm");
const navBar = document.querySelector(".nav-bar");
const sideBar = document.querySelector(".side-bar");
const content = document.querySelector(".content");
const sumbitButton = document.querySelector(".sumbit-button");

// Variables //
let myLibrary = [];

// Classes and constructors //
class Book {
  constructor(
    title = "aguante instituto de cordoba",
    author = "el decano",
    pages = "0",
    read = "caco virgo"
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Functions //

function openForm() {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    navBar.classList.add("blurredElement");
    sideBar.classList.add("blurredElement");
    content.classList.add("blurredElement");
  } else {
    form.classList.add("hidden");
    navBar.classList.remove("blurredElement");
    sideBar.classList.remove("blurredElement");
    content.classList.remove("blurredElement");
  }
}

function getBook() {
  const title = document.getElementById("bookName").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("readOrNotRead").value;

  return new Book(title, author, pages, read);
}

sumbitButton.addEventListener("click", () => {
  addBookToLibrary();
});

function addBookToLibrary() {
  let newBook = getBook();
  myLibrary.push(newBook);
}

myLibrary.forEach((book) => {
  content.appendChild(book);
});
