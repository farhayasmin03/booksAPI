const Books = require('../modules/books');
exports.data = (req, res) => {
    res.json("vhhgdhdh")
}
// Create and Save a new Books
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
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
    Books.find({}, function (err, data) {
        if (err) {
            console.log(err);
            return res.send(500, 'Something Went wrong with Retrieving data');
        } else {
            // console.log(data[0]);
            res.json(data);
        }
    });

};

// Find a single Books with a BooksId
exports.findOne = (req, res) => {
    Books.findById(req.params.booksId, function (err, data) {

    });
};

// Update a Books identified by the BooksId in the request
exports.update = (req, res) => {
    // Validate request
    if (!req.body.content||!req.body.title) {
        return res.status(400).send({
            message: "Books content can not be empty"
        });
    }
    // Find books data and update it with the request body
    Books.findByIdAndUpdate(req.params.booksId, function (err, data) {
        if (err) {
            return res.status(500).send(err.message)
        }
        if (req.body.title !== undefined) {
            title = req.body.title
        }
        if (req.body.content != undefined) {
            content = req.body.content
        }
        books.save()
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
    Books.findOneAndRemove(req.params.booksId,function(req,res){
        
    })
};