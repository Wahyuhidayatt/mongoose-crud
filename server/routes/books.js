const express = require('express');
const router = express.Router();
const book = require ('../controllers/bookController');

router.post('/', book.create);
router.get('/', book.findAll);
router.get('/:id', book.findOne);
router.put('/:id', book.update);
router.delete('/:id', book.delete);

module.exports = router
