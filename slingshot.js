class Slingshot {
constructor (bodyA, bodyB){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness: 0.04,
    length: 10,
}
this.slingShot = Constraint.create(options);
World.add(world, this.slingShot);



}
display(){
var pointA = this.slingShot.bodyA.position;
var pointB = this.slingShot.bodyB.position;
strokeWeight(4)
line(pointA.x, pointA.y, pointB.x, pointB.y)
}


}