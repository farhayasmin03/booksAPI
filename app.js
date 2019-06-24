const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.set('view engine', 'ejs');
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())
let routes = require("./routes/router")
app.use('/api', routes)
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books-data')
var db = mongoose.connection

//handling error
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('we are connected')
});
// define a simple route
app.get('/', (req, res) => {
    res.render("index")
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
module.exports = app;