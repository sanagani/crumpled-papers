
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj, leftSide, rightSide;
var wall1, wall2, wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
        restitution:.3,
        friction:0,
		density:1.2
	}
	ball = Bodies.circle(100, 350, 20, ball_options);
	fill(30,144,225);
	World.add(world,ball);
    
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(550,600,20,120);
    rightSide = new Ground(700,600,20,120);
	wall1 = new Ground(0,350,1,800);
	wall2 = new Ground(800,350,1,800);
	wall3 = new Ground(400,0,800,1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
  wall1.display();
  wall2.display();
  wall3.display();

  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 30);

  keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:.3,y:-.2})
	}
}



