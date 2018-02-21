$(function(){

$("circle").each(function() {
   var opacity = Math.random() *.3 + .7;
  var xPos = Math.random() * 1000 -500;
  var yPos = Math.random() * 500 - 250 ;
  var randomDelay = Math.random();
  
  TweenMax.set(this, {
    x: xPos, 
    y: yPos,
    scale: 2.5 
  });
  
  TweenMax.to(this, 2, {
    opacity: opacity,
    x: 0,
    y: 0,
    scale: 1,
    ease: Bounce.easeOut,
    delay: randomDelay
  })
});

})



