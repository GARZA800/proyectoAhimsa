var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurantsController');

/* GET gasolinerias. */
router.get('/', restaurantsController.getAll);
// router.get('/blogTitle', blogController.getBlogTitle);
// router.get('/6', function(req, res, next) {
//     res.send('blogs');
//   });
  
// router.post('/insert', gasolineriasController.insert);

module.exports = router;
