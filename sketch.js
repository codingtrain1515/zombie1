const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1;
var base2;

var bridge
var bridge_con;
var stones =[];
var zombie1;
var zombie2;

var zombie;
var zombieRight;
var zombieLeft;
var btn;
var turner;

function preload(){

  zombieRight = loadAnimation("zombie 1 right.png","zombie2right.png");
  zombieLeft = loadAnimation("zombie1left.png","zombie2left.png");
  
  bkImg = loadImage("background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  base1  = new Base(width -1890 ,height/3,300,30);
  base2  = new Base(width - 100,height/3,500,30);

  stone = new Stone(width/2 , height/9,20);      

  bridge = new Bridge(15,{x: base1 .x,y: base1.y}); 

  Matter.Composite.add(bridge.body,base2.body);

  bridge_con = new Link(bridge,base2);

  

  btn= createImg("axe.png");
  btn.position(width-80,height/2.5 -30);
  btn.size(70,70);
  btn.mouseClicked(cut)

zombie=createSprite(width/2,height-110);
zombie.addAnimation("right",zombieRight);
zombie.addAnimation("left",zombieLeft);
zombie.scale = 0.1;
zombie.velocityX = 10;

//console.log(zombie.position.x);




  for(var i = 0;i<= 8;i++){
    var x= random(width/2 -200,width/2 +300);
   var y = random(-10,140);
 stone = new Stone(x,y,80);      
   stones.push(stone);
} 

  frameRate(650);

}

function draw() {
  background(bkImg);

  Engine.update(engine);
  
  turning();
  bridge.show();



 // stone.create()

for(var i=0; i<stones.length; i++){
  stones[i].display();
}



drawSprites();
 

}

function cut()
{
  bridge.break();
  bridge_con.detach();
  bridge_con = null; 
  
}

function turning(){

  if(zombie.x >= 1300){
    zombie.changeAnimation("left");
    zombie.velocityX = -10;
  }
  else if(zombie.x <= 250){
    zombie.changeAnimation("right");
    zombie.velocityX =10;
  
}

}