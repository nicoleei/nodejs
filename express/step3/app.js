var express = require('./lib/express')
var path = require("path")

var app = express()

app.use(function(req,res,next){
   console.log("middleware 1")
   next()
})

app.use(function(req,res,next){
  console.log(middleware 2)
})

app.use('/hello',function(req,res){
   console.log('/hello')
   res.send('hello wold')
})

app.use("/getWeather",function(req,res){
   res.send({url:'/getWeather',city:req.query.city})
})

app.use(function(req,res){
  res.send(404,'not found oyao')
})

modle.exports = app