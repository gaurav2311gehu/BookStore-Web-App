const Book = require('../models/Book');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404);
      throw new Error('Book not found');
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, price, description, coverImage } = req.body;
    const book = new Book({ title, author, price, description, coverImage });
    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    next(error);
  }
};
