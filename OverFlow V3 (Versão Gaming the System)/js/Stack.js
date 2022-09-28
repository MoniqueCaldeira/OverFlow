class Stack{
   constructor(x,y){
      
      var options = {
         isStatic: true,
      }

      this.color = [random(0,255), random(0,255), random(0,255)];

      this.width = 20;
      this.height = 320;
      this.topo = 0;

      this.bodyLeft = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world, this.bodyLeft);

      this.bodyRight = Bodies.rectangle(x+120,y,this.width,this.height,options);
      World.add(world, this.bodyRight);

      this.bodyBottom = Bodies.rectangle(x+60,y+150,120,this.width,options);
      World.add(world, this.bodyBottom);
   }

   display(){

      push();
      rectMode(CENTER);
      noStroke();
      fill(this.color);
      rect(this.bodyLeft.position.x, this.bodyLeft.position.y, this.width,this.height);
      rect(this.bodyRight.position.x, this.bodyRight.position.y, this.width,this.height);
      rect(this.bodyBottom.position.x, this.bodyBottom.position.y, 120, this.width);
      pop();
   }

   empilhar(n){
      var collisionBottom = Matter.SAT.collides(balls[n].body, this.bodyBottom);
      var collisionRight = Matter.SAT.collides(balls[n].body, this.bodyRight);
      var collisionLeft = Matter.SAT.collides(balls[n].body, this.bodyLeft);
      
      if(collisionBottom.collided || collisionRight.collided || collisionLeft.collided){
        
        if(maquinaPop.topo < balls.length-1){
          maquinaPop.topo +=1;
          jogada +=1;
        }
      }
   }


}