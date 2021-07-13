class PLayerArcher{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            friction : 0.6
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/playerArcher.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        if(keyIsDown(UP_ARROW)&& angle>-0.7){
            angle -= 0.1;
        }

        if(keyIsDown(DOWN_ARROW) && angle< 0.6){
            angle +=0.1;
        }

        //console.log(angle);
        Matter.Body.setAngle(this.body,angle);
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}