class Rain {
    constructor(x,y){
        this.options = {
            restitution:0.5,
            friction:0.1
        }
        this.rain = Bodies.circle(x,y,5)
        this.radius = 5;
        World.add(world, this.drop)    
    }
    display(){
        push();
        fill("blue");
        translate(this.body.position.x,this.body.position.y);
        ellipse(0,0,5,5);
        pop();
        }
}
