var express = require('express');
var router = express.Router();
var baseURL = 'https://api.tiles.mapbox.com/v4/';
/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log('requestReceived!!!!');
	var requestURL = baseURL+req.query.id+'/'+req.query.z+'/'+req.query.x+'/'+req.query.y+'.png?access_token='+req.query.access_token;
	//console.log(requestURL);
	var syncReq = require('sync-request');
	//console.log('processing request');
	try{
	var result = syncReq('GET',requestURL);
	 res.set('Content-Type',result.headers['content-type']);
	res.set('content-length',result.headers['content-length']);
	res.send(result.body);
	//console.log(result);
  }
  catch(err){
	  console.log(err);
  }
  //console.log(result.headers);
 
});



module.exports = router;