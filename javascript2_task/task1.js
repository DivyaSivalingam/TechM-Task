let book1 = { title: "The Alchemist", author: "Paulo Coelho", isAvailable: true };
let book2 = { title: "Atomic Habits", author: "James Clear", isAvailable: false };


function checkoutBook(bookObj) {
    if (bookObj.isAvailable) {
        bookObj.isAvailable = false;
        return `You have checked out "${bookObj.title}".`;
    } else {
        return `Sorry, "${bookObj.title}" is not available.`;
    }
}

// Testing the function
console.log(checkoutBook(book1)); 
console.log(checkoutBook(book2)); 
