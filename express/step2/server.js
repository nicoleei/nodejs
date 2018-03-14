var http = require("http")
var path = require('path')
var url = require('url')
var fs = require('fs')

var routes = {
  '/a':function(req,res){
    res.end('match /a,query is:'+ JSON.stringify(req.query))
  },
  '/b':function(req,res){
    res.end('match /b')
  },
  '/a/c':function(req,res){
    res.end('match /a/c')
  },
  '/search':function(req,res){
    res.end('username='+req.body.username+',password='+req.body.password)
  }
}

var server = http.createServer(function(req,res){
   routePath(req,res)
})
server.listen(8080)
console.log('visit http://localhost:8080')

function routePath(req,res){
  var pathObj = url.parse(req.url,true)
  // console.log(pathObj)
  var handleFn = routes[pathObj.pathname]
  if(handleFn){
    req.query = pathObj.query
    var body = ''
    req.on('data',function(chunk){
       body += chunk
    }).on("end",function(){
       // console.log("body------------")
       // console.log(body)
       req.body = parseBody(body)
       handleFn(req,res)
    })
  }else{
    staticRoot(path.resolve(__dirname,'static'),req,res)
  }
}

function staticRoot(staticPath,req,res){
   var pathObj = url.parse(req.url,true)
   var filePath = path.join(staticPath,pathObj.pathname)
   fs.readFile(filePath,'binary',function(err,content){
     if(err){
        res.writeHead(404,'haha not found')
        res.end()
     }else{
         res.write(content,'binary')
         res.end()
     }
   })
}

function parseBody(body){
  var obj = {}
  body.split('&').forEach(function(str){
     obj[str.split('=')[0]] = str.split('=')[1]
  })
  console.log(obj)
  return obj
}