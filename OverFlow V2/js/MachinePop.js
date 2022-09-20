class MachinePop{
   constructor(x,y,scale){
      
      var options = {
         isStatic: true,
      }

      this.x = x;
      this.y = y;
      this.w = 400;
      this.h = 400;
      this.width = 20;
      this.height = 320;
      this.scale = scale;

      this.image = loadImage("assets/maquina pop.png");

      this.sprite = createSprite(this.x,this.y);
      this.sprite.addImage("imagem", this.image);
      this.sprite.scale = this.scale;

      this.button = createSprite(this.x, this.y + 110, 80,80);
      this.button.visible = false;

      this.bodyLeft = Bodies.rectangle(x+50,y+50,this.width,150,options);
      World.add(world, this.bodyLeft);

      this.bodyRight = Bodies.rectangle(x+180,y+150,this.width,80,options);
      World.add(world, this.bodyRight);

      this.bodyBottom = Bodies.rectangle(x+120,y+180,120,this.width,options);
      World.add(world, this.bodyBottom);

   }

   mouseClick(ball, machine){
     
      if(mousePressedOver(this.button) && topo < balls.length){
         Body.setPosition(ball, {x: machine.x+120 ,y: machine.y -100});
         Body.setStatic(ball, false);
      }
   }

   display(){

      push();
      rectMode(CENTER);
      noStroke();
      fill("orange");
      //rect(this.bodyLeft.position.x, this.bodyLeft.position.y, this.width,150);
      //rect(this.bodyRight.position.x, this.bodyRight.position.y, this.width,80);
      //rect(this.bodyBottom.position.x, this.bodyBottom.position.y, 120, this.width);
      pop();
   }

}