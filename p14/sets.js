var client = require('./client');

client.sadd('testSet',1);
client.sadd('testSet',3);
client.sadd('testSet',4);
client.sadd('testSet',45);
client.smembers('testSet',function(err,v){
   console.log("client.sadd.error,v:",err,v)
})