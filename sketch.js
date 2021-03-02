
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject, groundObject
var dustbin2,dustbin3
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

 
	engine = Engine.create();
	world = engine.world;
	
	
	dustbinObj = new dustbin(1200,610,100,20);
	dustbin2 = new dustbin(1200,610,20,100)
	dustbin2 = new dustbin(1200,610,20,100)
	paperObject = new paper(200,450,40);
	groundObject = new Ground(0,670,3000,20);
		

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			hieght: 700,
			wireframes: false
		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  dustbin2.display();
  drawSprites();

}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:87,y:-87});
	}
}



