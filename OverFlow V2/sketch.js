const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Body = Matter.Body;


var world,engine;
var balls = [];
var pilha, pilha1;
var ground;
var exit = [];
var topo = 0;
var imgReload, reset;
var jogada = 0;
var maquinaPop, maquinaPush;


function preload(){
  imgReload = loadImage("assets/reload.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  reset = createSprite(windowWidth - 80, 80);
  reset.addImage(imgReload);
  reset.scale = 0.03;

  engine = Engine.create();
  world = engine.world;

  for(var c = 3; c >=0; c--){
    var ball = new Circle(90 + (80 * c),windowHeight-350);
    //var ball = new Circle(150,500 + (20 * c));
    //var exitBox = new Box((windowWidth - 500) + (120*c),500);
    //exitBox.color = ball.color;
    //exit.push(exitBox);
    balls.push(ball);
  }
  
  pilha = new Stack(650,400);
  //pilha1 = new Stack(100,windowHeight-230);
  ground = new Ground(windowWidth/2, windowHeight-25, windowWidth,50);

  maquinaPop = new MachinePop(200,windowHeight-230,2);
  maquinaPush = new MachinePush(windowWidth-200,windowHeight-230,2);
}

function draw() {
  background("#cbe4ea"); 
  Engine.update(engine);

  push();
  textSize(25);
  fill("yellow");
  text("Jogadas: " + jogada, 50,50);
  pop();

  for(var c = 0; c < balls.length; c++){
    balls[c].display();
    //exit[c].display();
  }
  console.log(topo);

  pilha.display();
  //pilha1.display();
  ground.display();

  reload();
  maquinaPop.mouseClick(balls[topo].body, maquinaPop);
  maquinaPop.display();
  maquinaPush.display();

  maquinaPush.collected(balls,0);
  
  collision();

  drawSprites();
}

function mouseDragged(){
  var d = dist(mouseX, mouseY, balls[topo].body.position.x, balls[topo].body.position.y);

  if(d < 50){
    Matter.Body.setPosition(balls[topo].body, {x: mouseX, y: mouseY});
  }
  
}

function collision(){
  
  var collisionBottom = Matter.SAT.collides(balls[topo].body, pilha.bodyBottom);
  var collisionRight = Matter.SAT.collides(balls[topo].body, pilha.bodyRight);
  var collisionLeft = Matter.SAT.collides(balls[topo].body, pilha.bodyLeft);
  
  if(collisionBottom.collided || collisionRight.collided || collisionLeft.collided){
    
    if(topo < balls.length-1){
      topo +=1;
      jogada +=1;
    }
  }
  
}

function reload(){

  if(mousePressedOver(reset)){
    location.reload();
  }
}