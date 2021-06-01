class Box
{
    constructor(x,y,width,height)
    {
        var option={'restitution' : 0.8 }

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(myWorld,this.body)
    }

    display() 
    {

    push();

    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
        
    rectMode(CENTER); 
    rect(0,0,this.bodyW,this.bodyH);

    pop();

    }

}
