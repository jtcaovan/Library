let library = [];

// Query selectors and event listener
let modal = document.querySelector('#modal')
let newBookButton = document.querySelector('#newBookButton')

newBookButton.addEventListener('click', () => {
    modal.style.display = 'block'
});

let close = document.querySelector('.close1')
close.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none'
    }
}

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", addBooktoLibary);

function addBooktoLibary(e) {
    // Pushes new book to Library Array
    e.preventDefault();
    let newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value, 
        document.getElementById("read").value)

    library.push(newBook);
    displayBook();
    resetForm();
}

function createBookCard(index) {
    // creates a card div for each new book.
    let newBookCard = document.createElement('div');
    newBookCard.classList.add('card')
    newBookCard.innerHTML = 
    `<span class="close1 close2" onclick="deleteBook(${index})">&times;</span>
    <p>Title: ${library[index].title}</p>
    <p>Author: ${library[index].author}</p>
    <p>Pages: ${library[index].pages}</p>
    <p>Read: ${library[index].read}</p>`
    
    return newBookCard;
}

function displayBook() {
    let libraryDisplay = document.querySelector("#libraryDisplay")

    libraryDisplay.innerHTML = '';
    for (book in library) {
        libraryDisplay.append(createBookCard(book));
    }
}

let deleteBookButton = document.querySelector('#deleteBookButton');
let closeBook = document.getElementsByClassName('close2')

    deleteBookButton.addEventListener('click', () => {
        closeBook.style.visibility = 'visible'
    });

function deleteBook(index) {
    library.splice(index, 1);
    displayBook();

}


Book.prototype.changeReadStatus = function() {
    // Changes read status
}

function resetForm() {
    modal.style.display = 'none';
    newBookForm.reset();
}
