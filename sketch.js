
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,650,800,20)
tree=new Tree(500,250,20,20)
stone=new Ball(190,440,20)
boy=new Boy(200,420,20,20)
mango1=new Mangos(550,400,20,20)
mango2=new Mangos(690,420,20,20)
mango3=new Mangos(630,300,20,20)
mango4=new Mangos(600,360,20,20)
mango5=new Mangos(750,360,20,20)
elastic=new Elastic(boy.body,stone.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  elastic.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
      elastic.fly()
  }
function detectCollison(){
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
}
function keyPressed(){
  if (keyCode ===32){
    Matter.Body.serPosition(stone.body,{x:235, y:420})
    lanucherObject.attach(stone.body)
  }
}
