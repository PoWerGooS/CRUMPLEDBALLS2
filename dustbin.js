class dustbin{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image=loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
       image(this.image,0, 0, 100,100);
        pop();
      }
}