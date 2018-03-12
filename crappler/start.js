var http = require("http");
var fs = require("fs");
var path = require("path");
http.get("http://www.itsource.cn/",function(res){
   var content = "";
    res.on('data',function(str){
        content +=str
    })
    res.on("end",function(){
        var reg =/src="(.*?\.jpg)"/img;
        //var data1 =  content.match(reg);
        var data2;
        while(data2 = reg.exec(content)){
           // url = 'http://www.itsource.cn/'+data2[1];
           // console.log(data2[1])
           getImg(data2[1])
        }
       
        
    })
})

function getImg(url){
  // console.log(data2[1])
   // console.log(url)
   var fileObj = path.parse(url);
   var fileObjName = fileObj.base;

   var stream1 = fs.createWriteStream('./images/'+fileObjName)
   if(fileObj.root.length===0){
    
    url = '/'+ url;

   }
   url = 'http://www.itsource.cn' + url;
   // console.log(url)
   http.get(url,function(res){
      res.pipe(stream1)
   })
   // fs.writeFile("./filename.txt",filen,function(){
      
   // })
}

