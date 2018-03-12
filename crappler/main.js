var test = require("./test.js");
var http = require('http');
var fs = require('fs');
// console.log(arguments.callee.toString());
/*
http.get('http://www.ssodao.com/',function(res,err){
    var html = ""
    res.on('data',function(txt){
       html += txt
    });

    res.on("end",function(){
       console.log(html)
    })
})
*/

//同步fs.readFileSync()和异步方式fs.readFile()读取文件
// fs.readFile('./data.txt',function(err,txt){
//    console.log(txt.toString())
// });


//var data = fs.readFileSync('./data.txt');
//console.log(data.toString());

// var data = "love you forever";
// fs.writeFile('./love.txt',data,function(err){
//    if(err){
//     throw err;
//    }else{
//       console.log('success')
//    }
// })

fs.unlink("./love.txt",function(err){
    if(err){
      throw err
    }else{
      console.log("unlink success")
    }
})