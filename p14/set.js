var redis = require("redis");
var client = redis.createClient(6379,'localhost');
client.set('hello',{a:1,b:2}.toString());
client.get("hello",function(err,v){
  console.log('redis get hello err,v:'+err,v,typeof v);
})