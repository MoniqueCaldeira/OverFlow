class MachinePush{
   constructor(x,y,scale){
      
      var options = {
         isStatic: true,
      }

      this.ww = windowWidth;
      this.wh = windowHeight;
      this.x = x;
      this.y = y;
      this.w = 400;
      this.h = 400;
      this.scale = scale;

      this.image = loadImage("assets/maquina push.png");

      this.ball0 = createSprite(this.ww - 190,this.wh - 360,30,30);
      this.ball0.shapeColor = balls[0].color;

      this.ball1 = createSprite(this.ww - 190,this.wh - 280,30,30);
      this.ball1.shapeColor = balls[1].color;

      this.ball2 = createSprite(this.ww - 190,this.wh - 200,30,30);
      this.ball2.shapeColor = balls[2].color;

      this.ball3 = createSprite(this.ww - 187,this.wh - 120,30,30);
      this.ball3.shapeColor = balls[3].color;

      this.bodyLeft = Bodies.rectangle(this.ww-340,this.wh - 180, 80, 20,options);
      World.add(world, this.bodyLeft);

      this.sprite = createSprite(this.x,this.y);
      this.sprite.addImage("imagem", this.image);
      this.sprite.scale = this.scale;

   }

   display(){

      push();
      rectMode(CENTER);
      imageMode(CENTER);
      noStroke();
      fill("orange");
      rect(this.bodyLeft.position.x, this.bodyLeft.position.y, 80, 20);
      pop();
   }

   collected(ball, n){
      
      var collision = Matter.SAT.collides(ball[n].body,this.bodyLeft);
      if(collision.collided){
         topo+=1;
         World.remove(world, ball[n].body);
         ball.pop();
         this.ball0.width = 100;
         this.ball0.height = 50;
      }
   }

}