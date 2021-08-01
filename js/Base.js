class Base{
    constructor(x,y,w,h,) {

        let options ={
            isStatic:true,
            density:0.1,
            friction:0.15
        }

        this.body= Bodies.rectangle(x,y,w,h,options);
         this.w = w;
         this.h= h; 
         this.x = x;
         this.y = y;

        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}