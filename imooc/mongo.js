var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db){
   if(err){throw err}else{
      console.log("database has been built")
     var dbase = db.db("mydb");
     dbase.createCollection("ybao",function(err,res){
        if(err){throw err}
        console.log("collection built")
         db.close();
     })
     
   }
})
