var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const data={items:[
				{name:'Nho xịn xò S',quantity:2,cost:'200,000',total:'400,000'},
				{name:'Nho xịn xò S',quantity:2,cost:'200,000',total:'400,000'},
				{name:'Nho xịn xò S',quantity:2,cost:'200,000',total:'400,000'}
				],ship:'50,000',subtotal:'1,200,000',total:'1,250,000'};
  	res.render('checkout',{cart:data});
});

module.exports = router;
