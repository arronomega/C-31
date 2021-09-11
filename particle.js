class Particle {
    constructor(x,y,color){
var options = {
    isStatic:false,
    restituion:0.1,
    friction:1,
    density:1.1,

}
this.x = x;
this.y = y;
this.r = 5;

this.body = Bodies.circle(this.x,this.y,this.r/2,options);
this.color = color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);
    }
    display(){

        var pos = this.body.positon;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        fill(112,222,112);
        ellipse(0,0,this.r,this.r);
        pop();
    }


}