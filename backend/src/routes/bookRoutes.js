const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook } = require('../controllers/bookController');

router.route('/').get(getAllBooks).post(createBook);
router.route('/:id').get(getBookById);

module.exports = router;
