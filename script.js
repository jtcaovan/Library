let library = [];

// Query selectors and event listeners
let libraryDisplay = document.querySelector("#libraryDisplay")

let modal = document.querySelector('#modal')

let newBookButton = document.querySelector('#newBookButton')
newBookButton.addEventListener('click', () => {
    modal.style.display = 'block'
});

let close = document.querySelector('.close')
close.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}


// Delete Book
// let deleteBookButton = document.querySelector('#deleteBookButton');
// let closeBook = document.createElement('span')
// closeBook.classList.add('closeButton')


// deleteBookButton.addEventListener('click', () => {
//     for (let i = 0; i < library; i++) {
//         libraryDisplay.div.appendChild('closeBook');
//     }
// });

//

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `Title: ${title} "\n" Author: ${author} Pages: ${pages} Read: ${read}`
    }
}

let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", addBooktoLibary);

function addBooktoLibary(e) {
    e.preventDefault();
    library.push(new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value, 
        document.getElementById("read").value)
        )
    
    displayBooks();
    resetForm();
}

// function createBookCard() {
//     // creates a card div for each new book.
// }

function displayBookCard() {
    // Creates a card div for each new book
    let newBookCard = document.createElement('div');
    newBookCard.classList.add('card')
    libraryDisplay.appendChild(newBookCard);

    let deleteBook = document.createElement('span');
    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let bookRead = document.createElement('p');

        deleteBook.classList.add('close')
        deleteBook.addEventListener('click', deleteBookCard);

    newBookCard.append(deleteBook,bookTitle,bookAuthor,bookPages,bookRead)

// Loops through library and displays each book on the page

    for (book in library) {
        deleteBook.innerHTML = '&times;';
        bookTitle.textContent = `Title: ${library[book].title}`;
        bookAuthor.textContent = `Author: ${library[book].author}`;
        bookPages.textContent = `Pages: ${library[book].pages}`;
        bookRead.textContent = `Status: ${library[book].read}`;
    }

}

function deleteBookCard() {

}

Book.prototype.changeReadStatus = function() {
    // Changes read status
}

function resetForm() {
    modal.style.display = 'none';
    newBookForm.reset();
}
