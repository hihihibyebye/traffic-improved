var car,wall,speed,weight;

function setup() {
  createCanvas(800,400);
  wall = createSprite(500, 200, 30, 200);
  car = createSprite(200,200,30,30);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=-(speed);
}

function draw() {
  background(255,255,255);  
  wall.x=World.mouseX
if(wall.x=car.x < (car.width+wall.width)/2)
{
car.velocityX=0;
var deformaton=0.5 * weight * speed * speed/22509;
{
  if (deformaton < 180)
  {
    car.shapeColor=255,0,0;
  }

if (deformaton>180 && deformaton<100)

  {
    car.shapeColor=230,230,0;
  }

  if (deformaton>100)
  {
    car.shapeColor=0,255,0;
  }

}
}

  drawSprites();
}
