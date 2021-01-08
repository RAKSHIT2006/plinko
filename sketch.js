const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine, world;
var ground;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);



}
function draw() {
  background(255,255,255);  
  drawSprites();

 division.display();
 ground.display();
 particles.display();
 plinkos.display();
 
}