var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');
var cartRouter = require('./routes/cart');
var categoryRouter = require('./routes/category');
var checkoutRouter = require('./routes/checkout');
var contactRouter = require('./routes/contact');
var fpasswordRouter = require('./routes/forgot-password');
var loginRouter = require('./routes/login');
var productRouter = require('./routes/product');
var registrationRouter = require('./routes/registration');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tai-khoan', accountRouter);
app.use('/gio-hang', cartRouter);
app.use('/phan-loai', categoryRouter);
app.use('/thanh-toan', checkoutRouter);
app.use('/quen-mat-khau',fpasswordRouter);
app.use('/lien-he', contactRouter);
app.use('/dang-nhap', loginRouter);
app.use('/san-pham', productRouter);
app.use('/dang-ky', registrationRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//nothing change
module.exports = app;
