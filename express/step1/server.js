var http = require("http")
var path = require("path")
var fs = require("fs")
var url = require("url")
function staticRoot(staticPath,req,res){
   
   // console.log("req.url------------")
   // console.log(req.url)
   // console.log("staticPath---------")
   // console.log(staticPath)
   var pathObj = url.parse(req.url,true)
   // console.log('pathObj--------------')
   // console.log(pathObj)
   var filePath = path.join(staticPath,pathObj.pathname)
   var fileContent = fs.readFileSync(filePath,'binary')
   res.write(fileContent,'binary')
   res.end()
}
var server = http.createServer(function(req,res){
     staticRoot(path.resolve(__dirname,'static'),req,res)
})

server.listen(8080)