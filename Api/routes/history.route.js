const express = require('express');

const historyController = require('../controller/history.controller');
const { route } = require('./user.route');

const router = express.Router()

router.get('/',historyController.index);
router.post('/preOrder',historyController.preOrder)
module.exports = router