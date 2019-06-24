var express = require('express');
var router = express.Router();
var books = require('../controllers/books.controllers')

// Create a new Note
router.post('/books', books.create);

// Retrieve all Notes
 router.get('/books', books.findAll);
 router.get('/books/:booksId', books.findOne)
 // Update a Note with noteId
 router.put('/books/:booksId', books.update);

module.exports = router;