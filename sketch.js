var Car1, Car2
function setup() {
  createCanvas(1200,800);
  Car1=createSprite(600,400,50,80);
  Car1.shapeColor="green"
  Car2=createSprite(400, 200, 80, 30);
  Car2.shapeColor="purple"
}

function draw() {
  background(0,0,0);
  Car2.x=World.mouseX;
  Car2.y=World.mouseY;
  if(isTouching(Car1,Car2)){
    Car1.shapeColor="red"
    Car2.shapeColor="red"
  }
  else{
    Car1.shapeColor="green"
    Car2.shapeColor="purple"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object2.x-object1.x < object2.width/2+object1.width/2
    &&object1.x-object2.x < object2.width/2+object1.width/2
    &&object1.y-object2.y < object2.height/2+object1.height/2
    &&object2.y-object1.y < object2.height/2+object1.height/2){
     return true 
      
    }
else{
  return false

}
}