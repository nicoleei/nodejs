var MongoClient = require("mongodb").MongoClient;
var Dburl = 'mongodb://localhost:27017/mydb';

var insertData = function(db,callback){
   var collection = db.getCollection('ybao');
   var data = [{"name":"ybao课程","url":"www.ybao.org"},{"name":"元宝工具","url":"code.yabao.org"}]
   collection.insert(data,function(err,result){
    if(err){
       console.log(err)
    }
      callback(result)
   })

}

MongoClient.connect(Dburl,function(err,db){
   console.log("connect success")
   insertData(db,function(result){
       console.log(result)
       db.close()
   })
})
