let library = [];

var submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", addBooktoLibary);


function Book(author, title, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${title} by ${author}, ${pages}, ${read}`)
    }
}

Book.prototype.changeReadStatus = function() {
    // Changes read status
}

function addBooktoLibary(e) {
    e.preventDefault();
    var newBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value, 
        document.getElementById("read").value)

    library.push(newBook);
    console.log(library);
}

// var form = document.querySelector("#newBookForm")
// var title = document.getElementById("title").value;
// var author = document.getElementById("author").value;
// var pages = document.getElementById("pages").value;
// var read = document.getElementById("read").value;


function displayBooks() {
    // Loops through library and displays each book on the page

}

const edgeDancer = new Book('Brandon Sanderson', 'Edgedancer', '268', 'Currently reading');
