var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/places',function(req,res,next){
	res.render('places',{'title':'haha'});
});
module.exports = router;
