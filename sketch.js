var fixedRect, movingRect;
var g1,g2,g3,g4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1=createSprite(100,100,50,50);
  g1.shapeColor="green";
  g2=createSprite(200,100,50,50);
  g2.shapeColor="green";
  g3=createSprite(300,100,50,50);
  g3.shapeColor="green";
  g4=createSprite(400,100,50,50);
  g4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,g3)===true){
    movingRect.shapeColor = "blue";
    g3.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    g3.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  return true;
}
else {
  return false;
}
}