var client = require('./client');

// client.rpush('testlists','a');
// client.rpush('testlists','b');
// client.rpush('testlists','c');
// client.lpush('testlists','1');

client.lpop('testlists',function(err,v){
   console.log('client.lpop,err,v:',err,v)
})

client.rpop('testlists',function(err,v){
   console.log('client.lpop,err,v:',err,v)
})
client.lrange("testlists",0,-1,function(err,lists){
   console.log('client.lrange,err,lists:',err,lists)
})