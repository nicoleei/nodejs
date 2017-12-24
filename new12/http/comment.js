var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
  'content':'waiting for your next course',
  'mid':348
})

var options = {
  hostname : 'www.imooc.com',
  port :80,
  path:'/course/document',
  method:'post',
  headers:{
    'Accept':'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding':'gzip, deflate, br',
    'Accept-Language':'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,und;q=0.6',
    'Connection':'keep-alive',
    'Content-Length':postData.length,
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie':'UM_distinctid=15e8a515e79393-0d7dfe18554199-e313761-1fa400-15e8a515e7a302; loginstate=1; apsid=MzZDNjYjViMWRhMzQ3YjU0NzE2MWM1ZTM4NzEyN2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTEyNzQ5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0MTk5NTQ1QHFxLmNvbQAAAAAAAAAAAAAAAAAAAAAAADFmYThhZWM4ZTY2OWNmM2MxYTM3NTk5NmZiZmNhNGZlDyoQWg8qEFo%3DNG; imooc_uuid=1471b01c-52d2-496e-acab-7fd5b36eb7ea; imooc_isnew_ct=1513067429; CNZZDATA1261110065=1915888666-1505553819-https%253A%252F%252Fwww.baidu.com%252F%7C1513299783; IMCDNS=0; imooc_isnew=2; PHPSESSID=dfu3g18bj5mshuloq015dj2857; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1511058723,1511597753,1513067476,1513398303; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1513415224; cvde=5a349fdee8893-45',
    'Host':'www.imooc.com',
    'Origin':'https://www.imooc.com',
    'Referer':'https://www.imooc.com/video/8837',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    'X-Requested-With':'XMLHttpRequest'
  }
}
 
var req = http.request(options,function(res){
   console.log('status:'+res.statusCode)
   console.log('headers:'+JSON.stringify(res.headers))
   res.on('data',function(chunk){
     console.log(Buffer.isBuffer(chunk))
     console.log(typeof chunk)
   })
   res.on('end',function(){
    console.log('comment over')
   })
})

req.on('error',function(e){
   console.log('Error:'+e.message)
})

req.write(postData)

req.end()