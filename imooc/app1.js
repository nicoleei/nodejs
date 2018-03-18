var express = require('express');
var bodyParser = require('body-parser')
var _ = require('underscore');
// var connect = require('connect');
var port = process.env.PORT || 3000;
var app = express();
var path = require('path')
var mongoose = require("mongoose")
var Movie = require('./models/movie')
console.log('imooc start on port' + port);

mongoose.connect('mongodb://localhost/imooc')
app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'bower_components')))
app.locals.moment = require('moment')
app.listen(port)
console.log('imooc start on port' + port);

//index page 
app.get('/',function(req,res){
   Movie.fetch(function(err,movies){
      if(err){
        console.log(err)
      }
      res.render('index',{
        title:'imooc  首页',
        movies:movies
        // movies:[{
        //   title:'机械战警',
        //   _id:1,
        //   poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2544173152,4120527595&fm=173&app=12&f=JPEG?w=218&h=146&s=4B1219C7CCD23BC478AC19230300F001'
        // },{
        //    title:'机械战警',
        //   _id:2,
        //   poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2544173152,4120527595&fm=173&app=12&f=JPEG?w=218&h=146&s=4B1219C7CCD23BC478AC19230300F001'
        // },{
        //    title:'机械战警',
        //   _id:3,
        //   poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2544173152,4120527595&fm=173&app=12&f=JPEG?w=218&h=146&s=4B1219C7CCD23BC478AC19230300F001'
        // },{
        //    title:'机械战警',
        //   _id:4,
        //   poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2544173152,4120527595&fm=173&app=12&f=JPEG?w=218&h=146&s=4B1219C7CCD23BC478AC19230300F001'
        // }]
     })
   })
  
})

//detail page 
app.get('/movie/:id',function(req,res){
   var id = req.params.id;

   Movie.findById(id,function(err,movie){
      res.render('detail',{
        title:'imooc'+movie.title,
        movie:movie
      })
   })
   // res.render('detail',{
   //    title:'imooc 详情',
   //    movie:{
   //      doctor:'和晒。黛蛾',
   //      country:'美国',
   //      title:'机械战警',
   //      year:2014,
   //      poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5',
   //      language:'english',
   //      flash:'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
   //      // flash:'http://v.youku.com/v_show/id_XMzQwNjg3ODEwMA==.html?spm=a2hww.20027244.m_250379.5~1~3~A',
   //      summary:'一步好的骗子'
   //    }
   // })
})



//admin page 
app.get('/admin/movie',function(req,res){

   res.render('admin',{
      title:'imooc 后台录入',
      movie:{
        title:'',
        doctor:'',
        country:'',
        year:'',
        poster:'',
        flash:'',
        summary:"",
        language:''
      }
   })
})
//admin updata movie
app.get('/admin/update/:id',function(req,res){
   var id = req.params.id;
   if(id){
    Movie.findById(id,function(err,movie){
       res.render("admin",{
          title:'imooc 后台页面更新',
          movie:movie
       })
    })
   }
})

//admin post movie
app.post('/admin/movie/new',function(res,req){
  var id = req.body.movie_id;
  var movieObj = req.body.movie;
  var _movie;
  if(id!=='undefined'){
    Movie.findById(id,function(err,movie){
      if(err){
        console.log(err)
      }

      _movie = _.extend(movie,moveObj)
      _movie.save(function(err,movie){
        if(err){
          console.log(err)
        }
        res.redirect("/movie/"+movie._id)
      })
    })
  }else{
    _movie = new Movie({
      doctor:movieObj.doctor,
      title:movieObj.title,
      country:movieObj.country,
      language:movieObj.language,
      year:movieObj.year,
      poster:movieObj.poster,
      summary:movieObj.summary,
      flash:movieObj.flash
    })
    _movie.save(function(err,movie){
      if(err){
        console.log(err)
      }
      res.redirect('/movie/'+movie._id)
    })
  }

})

//list page 
app.get('/admin/list',function(req,res){
  Movie.fetch(function(err,movies){
    if(err){
      console.log(err)
    }
    res.render('list',{
      title:'imooc 列表页游',
      movies:movies
    })
  })
   res.render('list',{
      title:'imooc 列表',
      movies:movies
      // movies:[{
      //   title:'jixiezhanjing',
      //   _id:1,
      //   doctor:'hellen.yang',
      //   country:'Amercian',
      //   year:2004,
      //   poster:'http://r3.yking.com/05160000530EEB63675839160D0B79D5',
      //   language:'english',
      //   flash:'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
      //   summary:'good action film'
      // }]
   })
})