const express = require('express');
const router = express.Router();
const Transaction = require ('../controllers/transactionController');

router.post('/', Transaction.create);
router.get('/', Transaction.findAll);
router.get('/:id', Transaction.findOne);
router.put('/:id', Transaction.update);
router.delete('/:id', Transaction.delete);

module.exports = router
