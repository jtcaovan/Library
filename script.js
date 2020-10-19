let library
let newBook;

window.addEventListener('load', () => {
    library = JSON.parse(localStorage.getItem("library")) || [];
    library.forEach(book => {
        displayBook(book);
        });
    });

document.querySelector("#submitButton").addEventListener("click", addBooktoLibary);
document.querySelector('#deleteBookButton').addEventListener('click', addDeleteCard);

// Display Modal for new book form
    let modal = document.querySelector('#modal')

    document.querySelector('#newBookButton').addEventListener('click', () => {
        modal.style.display = 'block'
    });

    document.querySelector('.close1').addEventListener('click', () => {
        modal.style.display = 'none'
    })

    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = 'none'
        }
    }
//

function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
}


function addBooktoLibary(e) {
    // Pushes new book to library Array and displays in card onscreen
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value; 
    let read = document.getElementById("read").value;

    newBook = new Book(title, author, genre, read)
    
    if (newBook.title == '' || newBook.author == '') {
        alert("Please fill out the title and author!");
    } else {
        library.push(newBook);
        displayBook(newBook);
        localStorage.setItem("library", JSON.stringify(library));
        resetForm();
    }
}

function displayBook(newBook) {
    let unreadDisplay = document.querySelector("#unreadDisplay")
    let currentDisplay = document.querySelector("#currentDisplay")
    let readDisplay = document.querySelector('#readDisplay')

    let newBookCard = document.createElement('div');
    newBookCard.classList.add('card','slide-in-right');

        // Create new book card content
        let titleCard = document.createElement('h4');
        titleCard.textContent = newBook.title;

        let authorCard = document.createElement('p');
        authorCard.textContent = `by ${newBook.author}`;

        let genreCard = document.createElement('p');
        genreCard.textContent = newBook.genre;

        let readCard = document.createElement('p');
        readCard.textContent = newBook.read;

        let closeCard = document.createElement('span');
        closeCard.classList.add('close1','close2');
        closeCard.innerHTML = "&times";

        closeCard.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.removeChild(newBookCard)
            library.splice(newBook, 1)
            addDeleteCard();
        });

        let toggleRead = document.createElement('button');
        toggleRead.classList.add('fas', 'fa-book')

        toggleRead.addEventListener('click', () => {
            if (readCard.innerHTML === "Want to read") {
                readCard.innerHTML = "Currently reading"
                currentDisplay.appendChild(newBookCard)
            } else if (readCard.innerHTML === "Currently reading") {
                readCard.innerHTML = "Read"
                readDisplay.appendChild(newBookCard)
            } else if (readCard.innerHTML === "Read") {
                readCard.innerHTML = "Want to read"
                unreadDisplay.appendChild(newBookCard)
            }
         })
        //

    newBookCard.append(closeCard, titleCard, authorCard, genreCard, readCard, toggleRead);

    for (book in library) {
        if (newBook.read === "Want to read") {
            unreadDisplay.appendChild(newBookCard);
        } else if (newBook.read === "Currently reading") {
            currentDisplay.appendChild(newBookCard)
        } else if (readCard.innerHTML === "Read") {
            readDisplay.appendChild(newBookCard);
        }
    }
}


function addDeleteCard() {
    let closeCard = document.querySelectorAll('.close2');
    closeCard.forEach((x) => {
            if (x.style.visibility === 'visible'){
                x.style.visibility = 'hidden';
                x.classList.remove('scale-in-center')
            } else {
                x.style.visibility = 'visible';
                x.classList.add('scale-in-center')
            }
    })
}

function resetForm() {
    modal.style.display = 'none';
    newBookForm.reset();
}
