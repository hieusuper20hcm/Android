const express = require('express');

const userController = require('../../controller/api/user.api.controller');

const router = express.Router()

router.post('/create', userController.postCreate);

module.exports = router