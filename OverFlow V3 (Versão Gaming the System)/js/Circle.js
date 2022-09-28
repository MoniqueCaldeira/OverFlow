class Circle{
   constructor(x,y){
      
      var options = {
         restitution: 0.5,
         isStatic: true,
      }

      this.color = [random(0,255), random(0,255), random(0,255)];
      this.stackInit = 1;

      this.radius = 30;

      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
   }

   display(){

      push();
      ellipseMode(RADIUS);
      noStroke();
      fill(this.color);
      ellipse(this.body.position.x, this.body.position.y, this.radius);
      pop();
   }


}