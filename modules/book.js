const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);