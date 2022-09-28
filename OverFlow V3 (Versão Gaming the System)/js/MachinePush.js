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
      this.isTouching = false;
      this.topo = 0;

      this.image = loadImage("assets/maquina push.png");

      this.ballsResult = [];

      for(var i = 0; i < 4; i++){
         var ballResult = createSprite(this.ww - 190,this.wh - 360 + (80*i),35,35);
         ballResult.shapeColor = balls[4-i-1].color;
         this.ballsResult.push(ballResult);
      }

      /*
      this.ball0 = createSprite(this.ww - 190,this.wh - 360,30,30);
      this.ball0.shapeColor = balls[3].color;

      this.ball1 = createSprite(this.ww - 190,this.wh - 280,30,30);
      this.ball1.shapeColor = balls[2].color;

      this.ball2 = createSprite(this.ww - 190,this.wh - 200,30,30);
      this.ball2.shapeColor = balls[1].color;

      this.ball3 = createSprite(this.ww - 187,this.wh - 120,30,30);
      this.ball3.shapeColor = balls[0].color;
      */
      this.bodyLeft = Bodies.rectangle(this.ww-330,this.wh - 120, 80, 20,options);
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

   collected(n){
      for(var i = 0; i < balls.length; i++){
         var collision = Matter.SAT.collides(balls[i].body,this.bodyLeft);
         if(collision.collided && (balls[i].color == this.ballsResult[i].shapeColor)){
            console.log("Colidiu");
            this.isTouching = false;
            World.remove(world, balls[i].body);
            //balls.pop();

            if(balls[i].color == this.ballsResult[i].shapeColor){
               this.ballsResult[i].x += 10;
               this.ballsResult[i].width = 165;
               this.ballsResult[i].height = 90;
               this.ballsResult[i].topo +=1;
               this.topo += 1;
               jogada +=1;
            }
         
         }
      }
   }
}