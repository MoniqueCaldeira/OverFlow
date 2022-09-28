const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Body = Matter.Body;


var world,engine;
var balls = [];
var pilha, pilha1;
var ground;
var exit = [];
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

    balls.push(ball);
  }
  
  pilha = new Stack(650,400);
  //pilha1 = new Stack(100,windowHeight-230);
  ground = new Ground(windowWidth/2, windowHeight-25, windowWidth,50);

  maquinaPop = new MachinePop(200,windowHeight-230,2);
  maquinaPush = new MachinePush(windowWidth-200,windowHeight-230,2);

  console.log(balls[3].color);
  //console.log(maquinaPush.ball0.shapeColor);
}

function draw() {
  background("#cbe4ea"); 
  Engine.update(engine);

  push();
  textSize(25);
  fill("black");
  text("Jogadas: " + jogada, 50,50);
  text("Topo Maquina Pop: " + maquinaPop.topo, 50,80);
  text("Topo Maquina Push: " + maquinaPush.topo, 50,110);
  pop();

  /*for(var c = 0; c < balls.length; c++){
    if(balls[c] != undefined){
      balls[c].display();
    }
  }*/
  
  pilha.display();
  //pilha1.display();
  ground.display();
  pilha.empilhar(maquinaPop.topo);

  reload();

  
  mousepressed();
  for(var i = 0; i < balls.length; i++){
    balls[i].display();
  }

  if(balls[maquinaPop.topo] !== undefined){
    maquinaPop.mouseClick(maquinaPop, maquinaPop.topo);
    maquinaPush.collected(maquinaPop.topo);
  }

  drawSprites();

  //collision();
}

function mousepressed(){
  if(balls[maquinaPop.topo] !== undefined){
    var d = dist(mouseX, mouseY, balls[maquinaPop.topo].body.position.x, balls[maquinaPop.topo].body.position.y);
    if(d < 50 && mouseIsPressed){
      Matter.Body.setPosition(balls[maquinaPop.topo].body, {x: mouseX, y: mouseY});
    }
  }
}

function collision(){
  
  var collisionBottom = Matter.SAT.collides(balls[maquinaPop.topo].body, pilha.bodyBottom);
  var collisionRight = Matter.SAT.collides(balls[maquinaPop.topo].body, pilha.bodyRight);
  var collisionLeft = Matter.SAT.collides(balls[maquinaPop.topo].body, pilha.bodyLeft);
  
  if(collisionBottom.collided || collisionRight.collided || collisionLeft.collided){
    
    if(topo < balls.length-1){
      maquinaPop.topo +=1;
      jogada +=1;
    }
  }
  
}

function reload(){

  if(mousePressedOver(reset)){
    location.reload();
  }
}