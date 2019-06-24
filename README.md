# Book Application


## Steps to run this project

1. Clone the project.
2. If you don't have node 8.12.0, use nvm to install node 8.12.0 by following the steps [here](https://gist.github.com/d2s/372b5943bce17b964a79)
3. Install MongoDB 4.0.2 from [here](https://www.mongodb.com/download-center#community)
4. Open the project in terminal and run `yarn`.
5. To start the application, supply env variables such as `MONGO_URL` and then run `node app.js`.
6. Hit `http://localhost:3000` to add the title and contents of books.

## Functionalities
1. This project is node api for books that is used to get data,Add data,Find data by id ,Update data and delete data
2. In local host you can add data which is in a form containing title and contents,it will add data to mongoDB
3. postman is used in this project for performing integration testing with your API

## Routes

1. Hit `http://localhost:3000/api/books/` GET request is used to retrieve all books data
2. `http://localhost:3000/api/books/` POST request is used to create a new book data
3. `http://localhost:3000/api/books/:booksId` GET request is used to retrieve one book data
4. `http://localhost:3000/api/books/:booksId` PUT request is used to update data by using Id
5. `http://localhost:3000/api/books/:booksId` DELETE request is used to delete data by Id

