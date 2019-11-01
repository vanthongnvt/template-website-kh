var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	const data={items:[
				{name:'Nho xịn xò S',image:'cart-1.jpg',quantity:2,cost:'200,000',total:'400,000'},
				{name:'Nho xịn xò S',image:'cart-1.jpg',quantity:2,cost:'200,000',total:'400,000'},
				{name:'Nho xịn xò S',image:'cart-1.jpg',quantity:2,cost:'200,000',total:'400,000'}
				],total:'1,200,000'};

  	res.render('cart',{cart:data});
});

module.exports = router;
