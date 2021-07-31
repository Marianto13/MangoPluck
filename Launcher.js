class Launcher{
    constructor(body,anchor)
    {
        var options ={
            bodyA:body,
            pointB:anchor,
            stiffness:1,
            length:150
        }
        this.bodyA= body;
        this.pointB=anchor;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body1)
    {this.bodyA=body1;
    console.log("attach :" + body1);
    console.log("Ax :"+this.bodyA.position.x);
    console.log("Ay :"+this.bodyA.position.y);
    if(this.launcher.bodyA)
        {
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        //console.log("A:"+pointA.x,pointA.y);
        //console.log("B:"+pointB.x,pointB.y);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
    fly()
    {
        this.launcher.bodyA=null;

    }
    show()
    {
        if(this.launcher.bodyA)
        {
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        //console.log("A:"+pointA.x,pointA.y);
        //console.log("B:"+pointB.x,pointB.y);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}