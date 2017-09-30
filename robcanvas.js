// console.log("I'm loaded!!");
// go and get the tag from the DOM (document object) with an ID of canvas (canvas tag)
var canvas = document.getElementById('canvas');
// make sure the canvas is what we think it is
// console.dir(canvas);
// canvas by itself is just a "something" to draw on. In JS, we need a "context" which is like a brush
var context = canvas.getContext('2d');
// rect takes 4 arg:
// 1. upper x
// 2. upper y
// 3. lower x
// 4. lower y

// context.rect(100,100,300,300);
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(100,400);
// context.lineTo(400,100);
// context.lineTo(100,100);
// context.stroke();

// context.moveTo(200,200);

// A constructor function to make a new ball.
function Ball(x,y){
  this.x = x;
  this.y = y;
  this.sr = 0;
  this.xDirection = 1;
  this.yDirection = 1;
  // ending radian
  this.er = Math.PI * 2;
  this.randX = Math.ceil(Math.random() * 15);
  console.log(this.randX)
  this.randY = Math.ceil(Math.random() * 15);
  console.log(this.randY)
  this.drawBall = this.drawBall.bind(this);
  this.updateBallPosition = this.updateBallPosition.bind(this);
}

Ball.prototype.radius = 50;
Ball.prototype.drawBall = function(){
  context.beginPath();
  context.arc(this.x,this.y,this.radius,this.sr,this.er);
  // context.closePath();
  context.fill();
}
Ball.prototype.updateBallPosition = function(){
  context.clearRect(0,0,500,500);
  // console.log(this);
  this.drawBall()
  if(this.x >= 500 - this.radius){
    this.xDirection = -this.xDirection;
  }
  if(this.x <= 0 + this.radius){
    this.xDirection = -this.xDirection;
  }

  if(this.y >= 500 - this.radius){
    this.yDirection = -this.yDirection;
  }
  if(this.y <= 0 + this.radius){
    this.yDirection = -this.yDirection;
  }

  // var randX = Math.ceil(Math.random() * 15)
  // var randY = Math.ceil(Math.random() * 15)
  this.x += this.randX * this.xDirection;
  this.y += this.randY * this.yDirection;
  // console.log(this.x)
}


theBall = new Ball(100,100);
console.log(theBall);
var ball_interval = setInterval(theBall.updateBallPosition,50);

canvas.addEventListener("click", function(event){
  console.log(event);
})

// var centerX = 200;
// var centerY = 200;

// function drawBall(){
//   centerX +=10 ;
//   centerY += 10;
//   context.clearRect(0,0,500,500);
//   context.closePath();
//   context.arc(centerX,centerY,50,0,2*Math.PI);
//   // context.stroke();
//   // just like pygame.screen.flip(), we have clearRect()
//   context.fill();
// }
