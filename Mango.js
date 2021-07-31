class Mango {

    constructor(x, y, r) {
      const options = {
        isStatic: true,
          restitution: 0.4,
          friction: 0.5,
            }
      this.body = Matter.Bodies.circle(x, y, r, options);
      this.image=loadImage("mango.png")
      // this.body.inertia = Infinity
      //Matter.Body.setMass(this.body, this.body.mass * 2);
      Matter.World.add(world, this.body);
      this.r = r;
    }
  
    show() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noFill()
      noStroke()
      circle(0, 0, this.r)
      imageMode(CENTER);
      image(this.image, 0, 0, this.r * 2 + 0, this.r * 2);
      pop();
  
    }
   
  }