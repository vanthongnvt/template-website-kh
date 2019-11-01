var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	const order_history=[{id:'324',date:'14, Th 2, 2019',status:'Đang chờ',total:'500,000,000'},
						{id:'234',date:'29, Th 3, 2018',status:'Đã giao',total:'400,000,000'},
						{id:'223',date:'31,Th 2, 2018',status:'Hoàn trả',total:'700,000,000'}
						];
	const account_info={username:'supernova',firstname:'Tôn',lastname:'Ngộ Không',email:'tethiendaithanh@gmail.com'};
  	res.render('account',{order_history:order_history,account_info:account_info});
});

module.exports = router;
