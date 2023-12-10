var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var indexRouter = require('./routes/index');
var bateausRouter = require('./routes/bateau');
var EmplacementRouter = require('./routes/emplacement');



//connection al base
var mongo=require("mongoose") //ykhalina nconnectiu al base
var mongoconnection=require("./config/dbconnection.json");
mongo.connect(mongoconnection.url,{
useNewUrlparser:true, 
useUnifiedTopology:true //bech yenseri b nafes format f base de donneé

}).then(()=>console.log('mongo connecter')).catch((err)=>console.log(err))



//const { Ser } = require('http');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bateau', bateausRouter);
app.use('/emplacement', EmplacementRouter);



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










const server = http.createServer(app);
const io =require("socket.io")(server);
io.on("connection",(socket)=>{;
  console.log("user connected")
  socket.on("msg",(data)=>{
    io.emit("msg",data.name + "is connected");
  });

  socket.on("msg", (data)=>{
    console.log(data);
    io.emit("msg", data.name +":"+data.object);
  });

  socket.on("typing", (data)=>{
    console.log(data);
    io.emit("typing", data+"is typing ....");
  });



  socket.on("disconnect",()=>{
    console.log("user disconnected");
    io.emit("msg","user disconnected");
  });
});

server.listen(3000, console.log("server run way")); 
module.exports = app;


