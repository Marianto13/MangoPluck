
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
Mouse = Matter.Mouse;
MouseConstraint=Matter.MouseConstraint
var boy,bg;
var launcher;

function preload()
{
	boyImg=loadImage("boy.png");
	bgImg=loadImage("bg.png");
}

function setup() {
	createCanvas(800, 700);

  
 
	engine = Engine.create();
  world = engine.world;
  
  var canvasmouse=  Mouse.create(canvas.elt);
  var options = { mouse : canvasmouse};
  mContraint = MouseConstraint.create(engine,options);
  World.add(world,mContraint);
	//Create the Bodies Here.
mango1 = new Mango(200,280,10);
mango2 = new Mango(200,330,10);
mango3 = new Mango(140,300,10);
mango4 = new Mango(200,360,10);
mango5 = new Mango(240,300,10);
mango6 = new Mango(280,400,10);
 tree1 = new Tree(200,400,200,200);
stone = new Stone(410,540,10);
launcher = new Launcher(mango1.body,{ x:stone.body.position.x,y:stone.body.position.y});
ground= new Ground(10,700,1600,10);
	Engine.run(engine);
  //boy.addImage(boyImg);
  //bg.addImage(bgImg);
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(bgImg,0,0,innerWidth,innerHeight);
  image(boyImg,400,500,70,100);
  tree1.show();
  mango1.show();
  mango2.show();
  mango3.show();
  mango4.show();
  mango5.show();
  mango6.show();
  stone.show();
  launcher.show();
  ground.show();
  


 // drawSprites();
 
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y);
  if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }
}
var selectedObj;
function mouseDragged(event)
{
  console.log("%%%% "+event);
  // Set position of stone when mouse is dragged
 // Matter.Body.setPosition(selectedObj, {x:mouseX, y:mouseY});
 Matter.Body.setPosition(mango3.body, {x:mouseX, y:mouseY});
 launcher.attach(mango3.body) ;
 mango3.show();
 
}

function mouseClicked(event)
{
  console.log("mouse :::  "+event);
  // Set position of stone when mouse is dragged
 //selectedObj = this.body;
// console.log(" selectedObj"+selectedObj);
//launcher = new Launcher(stone.body,mango3.body);

//launcher.attach(mango3.body) ;
mango3.show();

}

function mouseReleased()
{
  //launcher.fly();

  detectCollision(stone,mango1);
  detectCollision(stone,mango3);
   detectCollision(stone,mango2);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6); 
  
}


