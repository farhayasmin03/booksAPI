var express = require('express');
var router = express.Router();
var books = require('../controllers/books.controllers')
router.get('/data', books.data)
router.get("/books", books.data);
// Create a new Note
router.post('/books', books.create);

// Retrieve all Notes
 router.get('/books', books.findAll);

module.exports = router;