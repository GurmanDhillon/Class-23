const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground1,box1,box2;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
ground1=new Ground(200,390,400,10);
box1=new Box(240,300,50,50);
box2=new Box(240,330,50,50);
}

function draw() {
  background("black");
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
}