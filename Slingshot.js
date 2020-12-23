class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.sling1,150,100,50,120);
        image (this.sling2,118,105,50,65);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            push()
            stroke(color(48,23,8))
            line(pointA.x-10, pointA.y, pointB.x-70, pointB.y+25);
            line(pointA.x-10, pointA.y, pointB.x-10, pointB.y+20);  
            pop()
            image (this.sling3,pointA.x-32, pointA.y-7,15,30) 
        }
    }
    
}