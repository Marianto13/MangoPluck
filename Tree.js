class Tree {

    constructor(x, y, w,h) {
      const options = {
        isStatic: true,
          friction: 0.5,
            }
      this.body = Matter.Bodies.rectangle(x, y, w,h, options);
      this.image=loadImage("tree.png")
      // this.body.inertia = Infinity
      //Matter.Body.setMass(this.body, this.body.mass * 2);
      Matter.World.add(world, this.body);
      this.w = w;
      this.h=h;
    }
  
    show() {
      const pos = this.body.position;
      //const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      //rect(0, 0, this.w,this.h)
      imageMode(CENTER);
      image(this.image, 0, 0, this.w * 2 + 0, this.h * 2);
      pop();
  
    }
  }