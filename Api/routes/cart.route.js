const express = require('express');

const cartController = require('../controller/cart.controller');

const router = express.Router()

router.get('/',cartController.index);

router.post('/add', cartController.addCart);
router.delete('/delete',cartController.deleteCart);

module.exports = router