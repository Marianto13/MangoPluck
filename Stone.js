class Stone {

    constructor(x, y, r) {
        const options = {
            isStatic: true,
            restitution: 0,
            friction: 1
           
        }
    
        this.body = Matter.Bodies.circle(x, y, r, options);
        // this.body.inertia = Infinity
        //Matter.Body.setMass(this.body, this.body.mass * 2);
        Matter.World.add(world, this.body);
        this.r = r;
        this.image = loadImage("stone.png");
    }
show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    imageMode(CENTER);
    image(this.image, 0, 0, this.r * 2 + 0, this.r * 2);
    pop();

  }
}