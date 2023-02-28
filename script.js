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
  constructor(title, author, pages, read) {
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
  const read = document.getElementById("readOrNotRead").checked;

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
  console.log(newBook.read);
}

function createBookBox(book) {
  let box = document.createElement("div");
  box.classList.add("book-box");

  let title = document.createElement("h1");
  title.innerText = book.title;
  title.classList.add("title-box");
  box.appendChild(title);

  let author = document.createElement("h4");
  author.innerText = "-" + book.author;
  author.classList.add("author-box");
  box.appendChild(author);

  let pages = document.createElement("h4");
  pages.innerText = "Pages:" + " " + book.pages;
  box.appendChild(pages);

  let read = document.createElement("h5");
  read.innerText = bookRead(book.read);
  if (book.read == true) read.style.backgroundColor = "green";
  else read.style.backgroundColor = "red";
  box.appendChild(read);

  let boxButtons = document.createElement("div");
  boxButtons.classList.add("box-buttons");

  let readButton = document.createElement("div");
  readButton.innerText = "Read📗";
  boxButtons.appendChild(readButton);

  readButton.addEventListener("click", () => {
    if (book.read == true) read.style.backgroundColor = "red";
    else read.style.backgroundColor = "green";
    book.read = !book.read;
    read.innerText = bookRead(book.read);
  });

  let deleteButton = document.createElement("div");
  deleteButton.innerText = "Delete⛔";
  boxButtons.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    content.removeChild(box);
  });
  box.appendChild(boxButtons);
  return box;
}
function bookRead(a) {
  if (a == true) {
    return "Read";
  } else {
    return "Not Read";
  }
}
