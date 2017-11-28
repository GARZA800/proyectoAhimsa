var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET gasolinerias. */
router.get('/', userController.getAll);

module.exports = router;
