var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	const category_color=['Xanh','Đỏ','Tím','Vàng','Đen','Trắng'];
	const category_brand=['Adidas','Gionee','Apple','Samsung','Asus'];
	const category_type =['Quần áo','Thực phẩm','Đồ điện tử','Đồ gia dụng','Giày dép','Vũ khí'];

	const products=[{name:'Áo sơ mi X',image:'f-p-1.jpg',cost:'100,000'},
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
  	res.render('category',{category_color:category_color,category_brand:category_brand,category_type:category_type,products:products});
});

module.exports = router;
