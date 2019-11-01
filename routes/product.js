var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	const data={name:'Váy ngắn S',image:'s-product-1.jpg',slide:['s-product-s-2.jpg','s-product-s-3.jpg','s-product-s-4.jpg'],cost:'200,000',category:['Váy'],status:'Còn hàng',short_desc:'Đây là mô tả ngắn',desc:'Mô tả'}

  	res.render('single-product',{product:data});
});

module.exports = router;
