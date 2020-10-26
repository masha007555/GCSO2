//create all the variables
var car;
var wall;
var speed,weight;
var board,redLight,yellowLight,greenLight;

function setup() {
  //create the canvas
  createCanvas(1600,400);

  //creat speed, weigght of the car and passenger condition
  speed = random(55,90);
  weight = random(400,1500);
  passengerCondition = "Driving";

  //create the board
  board = createSprite(580,300,400,70);
  board.shapeColor = "black";

  //create the lights
  redLight = createSprite(450,300,100,50);
  yellowLight = createSprite(580,300,100,50);
  greenLight = createSprite(710,300,100,50);

  //gives color to the lights
  redLight.shapeColor = "white";
  yellowLight.shapeColor = "white";
  greenLight.shapeColor = "white";

  //create the car
  car = createSprite(50, 100, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "lightBlue";

  //create and gives color to the wall
  wall = createSprite(1200,200,60,380);
  wall.shapeColor = "black";
}

function draw() {
  //make the background orange
  background("orange");
  
if (wall.x-car.x<(car.width+wall.width)/2){

car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22509;

//when deformation is greater than 180
//red light changes its color to red and passenger condition gets to lethal
if (deformation>180){
  redLight.shapeColor = ("red");
  passengerCondition = "Lethal";
}
//when deformation is lesser than 180 and greater than 100
//yellow light changes its color to yellow and passenger condition gets to average
if (deformation<180 && deformation>100){
  yellowLight.shapeColor = "yellow";
  passengerCondition = "Average";
}
//when deformation is lesser than 180
//green light changes its color to green and passenger condition gets to good
if (deformation<100){
  greenLight.shapeColor = "green";
  passengerCondition = "Good";
}
}
  collision();
  drawSprites();

  //displays deformatiom,weight,speed and passenger condition 
  stroke("black");
  fill("black");
  textSize(20);
  text("Deformation = "+Math.round(deformation),230,30);
  text("Weight = "+Math.round(weight),450,30);
  text("Speed = "+Math.round(speed),630,30);
  text("Passenger Condition = "+passengerCondition,800,30);
}

//function for collosion
function collision(){
  if (car.x-wall.x<car.width/2+wall.width/2 && 
    wall.x-car.x<car.width/2+wall.width/2 && 
    car.y-wall.y<car.height/2+wall.height/2 &&
    wall.y-car.y<car.height/2+wall.height/2){
    car.velocityX =0;
  }
}