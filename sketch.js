const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var mango1,mango2,mango3;
var slingshot;
var stone;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var particles=[];
var plinko =[];
var division=[];
var dH = 3--
	engine = Engine.create();
	world = engine.world;

  for(var k =0;k<=width;k=k+80){
  division.push(new Division(k,h-dH/2,10,dH));
  }
  for(var j =40;j<=width;j=j+50){
    
  plinkos.push(new Plinkos(j,75));
  }
  for(var j =15;j<=width;j=j+50){
    plinkos.push(new Plinkos(j,175));
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
    Engine.run(engine);
 
	ground = new Ground(400,10,1000,20);
 
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
for ( var j =0;j<particles.length;j++){
  particles[j].display();
}
for ( var k =0;k<particles.length;k++){
  particles[k].display();
}
}

