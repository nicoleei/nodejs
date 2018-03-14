var http = require("http");
var server = http.createServer(function(req,res){
  setTimeout(function(){


    // res.setHeader("content-Type","text/plain;charset=gbk")
    res.setHeader("content-Type","text/html;charset=utf-8")
    res.writeHead(200,'good')
    res.write("<html><head><meta charset='utf-8' /></head>")
    res.write("<body>")
    res.write("<h1>hello 你哈hao </h1>")
    res.write("</body>")
    res.end()
  },3000)
})
console.log("open http://localhost:8080")
server.listen(8080)