const Book = require('../modules/book');
exports.data = (req, res) => {
    res.json("vhhgdhdh")
}
// Create and Save a new Books
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Books content cannot be empty"
        });
    }

    // Create a Books
    const book = new Book({
        title: req.body.title || "Untitled Books",
        content: req.body.content
    });

    // Save Books in the database
    book.save()
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
    Book.find({}, function (err, data) {
        if (err) {
            console.log(err);
            return res.send(500, 'Something Went wrong with Retrieving data');
        } else {
            // console.log(data[0]);
            res.json(data);
            res.render('index',{
                bookdata:data
            })
        }
    });

};

// Find a single Books with a BooksId
exports.findOne = (req, res) => {
    Book.findById(req.params.booksId, function (err, data) {

    });
};

// Update a Books identified by the BooksId in the request
exports.update = (req, res) => {
    // Validate request
    if (!req.body.content && !req.body.title) {
        return res.status(400).send({
            message: "Books content can not be empty"
        });
    }
    // Find books data and update it with the request body
    Book.findById(req.params.booksId, function (err, book) {
        if (err) {
            return res.status(500).send(err.message)
        }

        if (!book) {
            return res.status(400).send({
                message: "Book can't be found"
            });
        }

        if (req.body.title) {
            book.title = req.body.title
        }
        if (req.body.content) {
            book.content = req.body.content
        }
        book.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Books."
                });
            });
    })
};

// Delete a Books with the specified BooksId in the request
exports.delete = (req, res) => {
    Book.remove({ _id: req.params.booksId })
        .then((result)=>{
            res.status(200).send({});
        });
 
};