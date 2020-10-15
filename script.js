let library = [];
let newBook;

// if (!localStorage.getItem('library')) {
//     populateStorage();
// } else {

// }

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

function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBooktoLibary(e) {
    // Pushes new book to library Array and displays in card onscreen
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value; 
    let read = document.getElementById("read").value;

    newBook = new Book(title, author, pages, read)
    
    // if (newBook.title == '' || newBook.author == '' || newBook.pages == '') {
    //     alert("Please complete the form!");
    // } else {
        library.push(newBook);
        displayBook(newBook);
        resetForm();
        console.log(library)
    }
// }

function displayBook() {
    let libraryDisplay = document.querySelector("#libraryDisplay")

    let newBookCard = document.createElement('div');
    newBookCard.classList.add('card','slide-in-right');

    // Create new book card content
        let titleCard = document.createElement('p');
        titleCard.textContent = newBook.title;

        let authorCard = document.createElement('p');
        authorCard.textContent = newBook.author;

        let pagesCard = document.createElement('p');
        pagesCard.textContent = `Pages: ${newBook.pages}`;

        let readCard = document.createElement('p');
        readCard.textContent = newBook.read;

        let closeCard = document.createElement('span');
        closeCard.classList.add('close1','close2');
        closeCard.innerHTML = "&times";

        closeCard.addEventListener('click', () => {
            libraryDisplay.removeChild(newBookCard)
            library.splice(newBook, 1)
        });

        let toggleRead = document.createElement('button');
        toggleRead.classList.add('fas', 'fa-book')

        toggleRead.addEventListener('click', () => {
            if (readCard.innerHTML === "Want to read") {
                readCard.innerHTML = "Currently reading"
            } else if (readCard.innerHTML === "Currently reading") {
                readCard.innerHTML = "Read"
            } else if (readCard.innerHTML === "Read") {
                readCard.innerHTML = "Want to read"
            }
        })

    newBookCard.append(closeCard, authorCard, titleCard, pagesCard, readCard, toggleRead);

    for (book in library) {
        libraryDisplay.append(newBookCard);
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
