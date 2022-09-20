class Box{
   constructor(x,y){
      
      var options = {
         isStatic: true,
      }

      this.color = 0;

      this.width = 15;
      this.height = 120;

      this.bodyLeft = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world, this.bodyLeft);

      this.bodyRight = Bodies.rectangle(x+100,y,this.width,this.height,options);
      World.add(world, this.bodyRight);

      this.bodyBottom = Bodies.rectangle(x+50,y+60,115,this.width,options);
      World.add(world, this.bodyBottom);
   }

   display(){

      push();
      rectMode(CENTER);
      noStroke();
      fill(this.color);
      rect(this.bodyLeft.position.x, this.bodyLeft.position.y, this.width,this.height);
      rect(this.bodyRight.position.x, this.bodyRight.position.y, this.width,this.height);
      rect(this.bodyBottom.position.x, this.bodyBottom.position.y, 115, this.width);
      pop();
   }


}