var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()

life.setMaxListeners(11)

function gowater(who){
    console.log('给'+ who + '倒水')
}
life.on('求',gowater)

life.on('求',function(who){
   console.log('给'+ who + '肉碱')
})

life.on('求',function(who){
   console.log('给'+ who + '。。3')
})

life.on('求',function(who){
   console.log('给'+ who + '.。。4')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。5')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。6')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。7')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。8')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。9')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。10')
})
life.on('求',function(who){
   console.log('给'+ who + '.。。11')
})

life.on('love',function(who){
   console.log('给'+ who + '.。。买衣服')
})

life.on('love',function(who){
   console.log('给'+ who + '.。。money')
})
// life.removeListener('求',gowater)
life.removeAllListeners('求')
var hasConfortListener = life.emit('求','汉子')
var hasLovedListener = life.emit('love','meizi')
var hasPlayedListener = life.emit('play','meizia and hanzi')
console.log(hasConfortListener)
console.log(hasLovedListener)
console.log(hasPlayedListener)
console.log(life.listeners('求').length)
console.log(EventEmitter.listenerCount(life,'求'))