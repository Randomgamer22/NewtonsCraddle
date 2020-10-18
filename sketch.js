
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(75, 575, 50);
	bobObject2 = new Bob(125, 575, 50);
	bobObject3 = new Bob(175, 575, 50);
	bobObject4 = new Bob(225, 575, 50);
	bobObject5 = new Bob(275, 575, 50);

	roof = new Roof(350, 50, 500);

	rope1 = new Rope(bobObject1.body, roof.body, -bobObject1.radius*4, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobObject2.radius*2, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, +bobObject4.radius*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, +bobObject5.radius*4, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(bobObject1.body, {x: mouseX, y: mouseY});
}



