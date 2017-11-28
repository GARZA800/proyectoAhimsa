var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

/* GET gasolinerias. */
router.get('/', userController.getAll);
// router.get('/blogTitle', blogController.getBlogTitle);
// router.get('/6', function(req, res, next) {
//     res.send('blogs');
//   });
  
// router.post('/insert', gasolineriasController.insert);

module.exports = router;
