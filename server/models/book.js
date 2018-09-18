const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

bookSchema.statistics = function(bookID, newName) {
  const Book = mongoose.model('book');

  return Book.findById(bookId)
    .then(book => {
    book.name = newName;
    return book.save();
    })
}

module.exports = mongoose.model('Book', bookSchema);
