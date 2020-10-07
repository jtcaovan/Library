let library = [];

let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", addBooktoLibary);

let libraryDisplay = document.querySelector("#libraryDisplay")

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `Title: ${title} Author: ${author} Pages: ${pages} Read: ${read}`
    }
}

function addBooktoLibary(e) {
    e.preventDefault();
    library.push(new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value, 
        document.getElementById("read").value)
        )
    
    displayBooks();
}

function displayBooks() {
    // Loops through library and displays each book on the page
        let newBookCard = document.createElement('div');
        newBookCard.classList.add('card')
        libraryDisplay.appendChild(newBookCard);

        for (book in library) {
            newBookCard.textContent = library[book].info();
        }
    }

let newBookButton = document.querySelector('#newBookButton')
newBookButton.addEventListener('click', toggleNewBook);

function toggleNewBook() {
    let newBookForm = document.querySelector('#newBookForm')

    if (newBookForm.style.display === 'none') {
        newBookForm.style.display = 'block'; 
    } else {
        newBookForm.style.display = 'none';
    }
}

Book.prototype.changeReadStatus = function() {
    // Changes read status
}

