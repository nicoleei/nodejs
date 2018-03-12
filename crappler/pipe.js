var fs = require("fs");
// fs.createReadStream()
var stream1 = fs.createReadStream('./data.txt');
stream1.on("data",function(txt){
   console.log(txt)
})
stream1.on("end",function(){
  console.log("end1")
})
stream1.on("error",function(err){
   if(err){throw err}else{console.log("no err")}
})

var stream2  = fs.createWriteStream("./end.txt");
stream2.write("test text");
stream2.end()
stream2.on("finish",function(){
   console.log("yi liu de fangshi xieru chengggong")
})

var stream3 = fs.createReadStream("./work.txt");
var stream4 = fs.createWriteStream("./worked.txt");
stream3.pipe(stream4)