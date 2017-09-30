// console.log("I'm loaded");
// console.dir(canvas);
// canvas is just something to draw on...we need a context
//rect takes 4 args - upper x, upper y, lower x, lower y
// context.rect(100,100,300,300)
// context.stroke();

function Ball(x,y){
  this.x = x;
  this.y = y;
  this.velocity = 25;  //pixels per second
  this.xDirection = 1;
  this.yDirection = 1;

  this.randX = Math.ceil(Math.random() * 15);
  this.randY = Math.ceil(Math.random() * 15);

  this.sr = 0; // starting radian
  this.er = Math.PI*2; // ending radian
  this.drawBall = this.drawBall.bind(this);
  this.updateBallPosition = this.updateBallPosition.bind(this);
}
Ball.prototype.radius = 50;

Ball.prototype.drawBall = function(){
  context.beginPath();
  context.arc(this.x, this.y, this.radius, this.sr, this.er);
  context.fill();
}
Ball.prototype.updateBallPosition = function(){

  context.clearRect(0,0,500,500);
  this.drawBall();
// // Randomize x and y directions..
// Get a number between 1 and 3 then subtract 2
// result should be -1, 0, +1
  // var rand = Math.random();
  // this.xDirection = Math.ceil(rand*3) - 2;
  // rand = Math.random();
  // this.yDirection = Math.ceil(rand*3) - 2;

  if (this.x >= (500 - this.radius)){
    this.xDirection = -this.xDirection;
  }
  if (this.x <= (0 + this.radius)){
    this.xDirection = -this.xDirection;
  }

  if (this.y <= (0 + this.radius)){
    this.yDirection = -this.yDirection;
  }
  if (this.y >= (500 - this.radius)){
    this.yDirection = -this.yDirection;
  }
  // this.x += this.velocity * this.xDirection;
  // this.y += this.velocity * this.yDirection;
  this.x += this.randX * this.xDirection;
  this.y += this.randY * this.yDirection;

}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var theBall = new Ball(100,100);

var ball_interval = setInterval(theBall.updateBallPosition,50);
// canvas.addEventListener("click", function(event){console.log(event)});

// TODO: randomize the ball movement
// TODO: keep score?

// var centerX = 200;
// var centerY = 200;
// function drawBall(){
//   centerX += 10;
//   centerY += 10;
//
//   context.clearRect(0,0,500,500);
//   context.arc(centerX,centerY,0,2*Math.PI);
//   context.fill();
// }
// // Vector Approach:  combine angle and velocity to calculate new coordinates...
// // random angle in degrees...
// // Learned that using 360 is too jittery....limit the number of vectors to 8...8*45=360.
// var newXcoord = -1;
// var newYcoord = -1;
//
// // keep trying until x and y are in bounds!
// while ((newXcoord < 0) || (newXcoord > 500) ||
// (newYcoord < 0) || (newYcoord > 500)){
//   console.log("In while loop...randomizing");
//   var rand = Math.random();
//   // var randomAngleDegrees = Math.ceil(rand*360);
//   var randomAngleDegrees = (Math.ceil(rand*8))*45;
//   // need to convert degrees to radians
//   var randomAngleRadians = (randomAngleDegrees * Math.PI) / 180;
//   // Now we can get the new coordinates using the velocity and Trig...
//   var magX = this.velocity * Math.cos(randomAngleRadians);
//   var magY = this.velocity * Math.sin(randomAngleRadians);
//   newXcoord = (this.x + magX/2);
//   newYcoord = (this.y + magY/2);
//   console.log(`newX ${newXcoord} newY ${newYcoord}`);
// }
//
// this.x = newXcoord;
// this.y = newYcoord;
// console.log(`this.x ${newXcoord} this.y ${newYcoord}`);
