// Nodes references //
const addBook = document.querySelector(".add-book");
const form = document.querySelector("#myForm");
const navBar = document.querySelector(".nav-bar");
const sideBar = document.querySelector(".side-bar");
const content = document.querySelector(".content");
const sumbitButton = document.querySelector(".sumbit-button");
const read = document.querySelector(".readOrNotRead");

// Variables //
let myLibrary = [];

// Classes and constructors //
class Book {
  constructor(
    title = "aguante instituto de cordoba",
    author = "el decano",
    pages = "0",
    read = false
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

sumbitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  let newBook = getBook();
  myLibrary.push(newBook);
  let newBox = createBookBox(newBook);
  content.appendChild(newBox);
}

function createBookBox(book) {
  let box = document.createElement("div");
  box.classList.add("book-box");

  let title = document.createElement("h1");
  title.innerText = book.title;
  box.appendChild(title);

  let author = document.createElement("h3");
  author.innerText = book.author;
  box.appendChild(author);

  let pages = document.createElement("h4");
  pages.innerText = "pages:" + book.pages;
  box.appendChild(pages);

  let read = document.createElement("h5");
  read.innerText = bookRead(book.read);
  if (book.read == "checked") read.style.backgroundColor = "green";
  else read.style.backgroundColor = "red";
  box.appendChild(read);

  let boxButtons = document.createElement("div");
  boxButtons.classList.add("box");

  let readButton = document.createElement("div");
  readButton.innerText = "Read📗";
  boxButtons.appendChild(readButton);

  readButton.addEventListener("click", () => {
    if (book.read == true) read.style.backgroundColor = "green";
    else read.style.backgroundColor = "red";
  });

  let deleteButton = document.createElement("div");
  deleteButton.innerText = "Delete⛔";

  deleteButton.addEventListener("click", () => {
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    content.removeChild(box);
  });
  box.appendChild(boxButtons);
  return box;
}
function bookRead(a) {
  if (a == "checked") {
    return "Read";
  } else {
    return "Not Read";
  }
}
