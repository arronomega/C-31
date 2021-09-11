class Plinkos {
    constructor(x,y){
var options = {
    isStatic:true,
  

}
this.x = x;
this.y = y;
this.r = 5;

this.body = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body);
this.color = color(random(0,255),random(0,255),random(0,255));
    }
    display(){

        var pos = this.body.positon;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        fill(112,222,112);
        ellipse(0,0,this.r,this.r);
        pop();
    }


}