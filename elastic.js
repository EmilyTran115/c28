class Elastic{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:10
            }
            
            this.elastic = Constraint.create(options);
            World.add(world,this.elastic);
    }

    display(){
        var pointA=this.elastic.bodyA.position;
        var pointB=this.elastic.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
