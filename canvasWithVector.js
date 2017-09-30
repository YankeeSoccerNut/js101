// console.log("I'm loaded");

function Ball(x,y){
  this.x = x;
  this.y = y;
  this.velocity = 1;  //pixels per second
  this.xDirection = 1;
  this.yDirection = 1;
  this.prevTimestamp = 0;
  this.intervalTimer = 0;

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
Ball.prototype.updateBallPosition = function(timestamp){
  console.log(`timestamp: ${timestamp}`);
  var deltaTime = timestamp - this.prevTimestamp;
  this.intervalTimer += deltaTime;
  console.log(`deltaTime: ${deltaTime}`);


  context.clearRect(0,0,500,500);
  this.drawBall();
  // Vector Approach:  combine angle and velocity to calculate new coordinates...
  // random angle in degrees...
  // Learned that using 360 is too jittery....limit the number of vectors to 8...8*45=360.
  if (deltaTime != timestamp){ // not first timestamp
    if (this.intervalTimer/1000 >= 1){ //one second passed, random change
      this.intervalTimer = 0;
      var newXcoord = -1;
      var newYcoord = -1;

      // keep trying until x and y are in bounds!
      while ((newXcoord < 0) || (newXcoord > 500) ||
      (newYcoord < 0) || (newYcoord > 500)){
        console.log("In while loop...randomizing");
        var rand = Math.random();
        // var randomAngleDegrees = Math.ceil(rand*360);
        var randomAngleDegrees = (Math.ceil(rand*8))*45;
        // need to convert degrees to radians
        var randomAngleRadians = (randomAngleDegrees * Math.PI) / 180;
        // Now we can get the new coordinates using the velocity and Trig...
        var magX = this.velocity * Math.cos(randomAngleRadians);
        var magY = this.velocity * Math.sin(randomAngleRadians);
        newXcoord = (this.x + magX);
        newYcoord = (this.y + magY);
        this.x = newXcoord;
        this.y = newYcoord;
        console.log(`newX ${newXcoord} newY ${newYcoord}`);
      }
    }
    else {
      newXcoord = (this.x += this.velocity);
      newYcoord = (this.y += this.velocity);
      console.log("Not quite 1 second...just add velocity")
      console.log(`this.x ${newXcoord} this.y ${newYcoord}`);
    }
  }
  this.prevTimestamp = timestamp;
  console.log(`this.x ${this.x} this.y ${this.y}`);
  window.requestAnimationFrame(this.updateBallPosition);
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var theBall = new Ball(100,100);
var ball_interval = window.requestAnimationFrame(theBall.updateBallPosition);

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
