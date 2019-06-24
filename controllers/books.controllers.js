const Books = require('../modules/books');
exports.data=(req,res)=>{
    res.json("vhhgdhdh")
}
// Create and Save a new Books
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Books content can not be empty"
        });
    }

    // Create a Books
    const books = new Books({
        title: req.body.title || "Untitled Books", 
        content: req.body.content
    });

    // Save Books in the database
    books.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Books."
        });
    });
};

// Retrieve and return all books from the database.
exports.findAll = (req, res) => {
    books.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};

// Find a single Books with a BooksId
exports.findOne = (req, res) => {
    books.findOne(req.params.bookId)
    .then()
};

// Update a Books identified by the BooksId in the request
exports.update = (req, res) => {

};

// Delete a Books with the specified BooksId in the request
exports.delete = (req, res) => {

};