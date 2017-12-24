var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//json 类型body
app.use(bodyParser.json());

//query string类型body
app.use(bodyParser.urlencoded({
  extended:false
}))

//静态文件目录
app.use(express.static(__dirname + '/public'));

//路由和业务逻辑
// app.get('/',function(req,res){
//   res.send("hello")
// })
// 
app.use('/user',require('./routes/users.js'))
app.listen(80);

