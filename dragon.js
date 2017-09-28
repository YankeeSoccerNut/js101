var health = 10;  // TODO: implement hit points against dragon

function rollDice(){
  // console.log("User Pressed the Roll Button!")

  // simulate dice roll with random...
  var rand1 = Math.ceil(Math.random()*6);
  var rand2 = Math.ceil(Math.random()*6);

  // use the random numbers change die images accordingly

  var dice = document.getElementById('dice');

  var image1 = dice.children[0];
  var image2 = dice.children[1]
  image1.src = `./dragon-assets/d${rand1}.gif`
  image2.src = `./dragon-assets/d${rand2}.gif`

  //
  if (rand1 + rand2 > 8){
    document.getElementById('dragon').children[0].src = "./dragon-assets/babydragon.jpeg";
    document.getElementById('message').innerHTML = "You have tamed the beast!  Now take it home and train it properly."
    document.getElementById('roll').innerHTML = '<button onclick="window.location.reload();">RESET</button>'
  }
}
