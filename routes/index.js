var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {

	const data=[{name:'Áo sơ mi X',image:'f-p-1.jpg',cost:'100,000'},
				{name:'Áo thun Y',image:'f-p-2.jpg',cost:'100,000'},
				{name:'Áo khoác A',image:'f-p-3.jpg',cost:'200,000'},
				{name:'Váy dài B',image:'f-p-4.jpg',cost:'300,000'},
				{name:'Váy ngắn S',image:'f-p-5.jpg',cost:'200,000'},
				{name:'Áo da T',image:'f-p-1.jpg',cost:'400,000'},
				{name:'Áo sơ mi M',image:'f-p-2.jpg',cost:'200,000'},
				{name:'Áo thun N',image:'f-p-3.jpg',cost:'200,000'},
				{name:'Áo khoác K',image:'f-p-5.jpg',cost:'200,000'},
				{name:'Đầm D',image:'f-p-4.jpg',cost:'200,000'}
				];

  	res.render('index',{products:data});
});
module.exports = router;
