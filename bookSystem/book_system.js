let books = [];

function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName  = document.getElementById("authorName").value;
    const bookDescription  = document.getElementById("bookDescription").value;
    const pagesNumber  = document.getElementById("pagesNumber").value;

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    }
    else{
        alert('Please fill in all fields correctly.');
    }
}

function showbooks(){
    let booksDiv = "";
    for(i = 0; i < books.length; i++){
        booksDiv = booksDiv + `<h1>book Number: ${i + 1}</h1>
        <p><strong>Book Name: </strong>${books[i].name}</p>
        <p><strong>Author Name:</strong> ${books[i].authorName}</p>
        <p><strong>Book Description:</strong> ${books[i].bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${books[i].pagesNumber} page(s)</p>
        <button onclick="deleteBook(${i})">Delete Book</button>`
    }
    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}