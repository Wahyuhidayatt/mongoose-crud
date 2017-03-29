const express = require('express');
const router = express.Router();
const Customer = require ('../controllers/customerController');

router.post('/', Customer.create);
router.get('/', Customer.findAll);
router.get('/:id', Customer.findOne);
router.put('/:id', Customer.update);
router.delete('/:id', Customer.delete);

module.exports = router
