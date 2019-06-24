var express = require('express');
var router = express.Router();
var books = require('../controllers/books.controllers')

// Create a new book data
router.post('/books', books.create);

// Retrieve all books data
 router.get('/books', books.findAll);
 // Retrieve one book data
 router.get('/books/:booksId', books.findOne)
 // Update a book data with booksId
 router.put('/books/:booksId', books.update);
// Delete a book data with bookId
router.delete('/books/:booksId', books.delete);

module.exports = router;