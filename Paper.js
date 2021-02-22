class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          
      }
     
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      
      push();
      translate(pos.x, pos.y);
    
      strokeWeight(0) ;
      stroke("white");
      fill("darkBlue");
      image(this.image, 0, 0, 90, 50);
      pop();
    }
  }
  