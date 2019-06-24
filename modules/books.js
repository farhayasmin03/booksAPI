const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Books', BooksSchema);