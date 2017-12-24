var express = require('express');
var router = express.Router();

router.all('/list',function(req,res){
   
  console.log(req.method);
  console.log(req.baseUrl);
  console.log(req.path);
  console.log(req.headers['user-agent']);
  console.log(req.get('user-agent'))
  console.log(req.query);
  console.log(req.query.id)
  console.log(req.body)
  console.log(req.body.id1);
  res.send('hello')
})
///user/101 
// router.get('/:id',function(req,res){
//    //rest风格
//    console.log(req.params.id);
//    res.send('ok');
   
// })

router.get('/fb',function(req,res){
   res.status(403).send('^_^ forbidden')
})

router.get('/tt',function(req,res){
    res.contentType('application/javascript');
    res.sendFile('/ok.js',{root:__dirname+'/../public'})
})

router.get('/mm',function(req,res){
   res.json({a:1,b:[true,'ok']})
   // res.send({a:1,b:[true,'ok']})
})
module.exports = router;