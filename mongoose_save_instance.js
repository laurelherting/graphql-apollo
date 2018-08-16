const db = require('./mongoDB_connection');

const Book = require('./server/models/book');
const author = new Book({
  name: "author"
});

author.save()
  .then( (book) => {
    console.log(book);
  });

db.connection.close();

