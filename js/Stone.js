class Stone{
    constructor(x,y,r){

        let options={
            isStatic: false,
            restitution:0.86,
            density:0.001
        }
        this.stone = Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r =r
        this.image=loadImage("stone.png")
        World.add(world,this.stone)
    }
    
  

    display(){

      
      push()
      fill("red")
      var pos = this.stone.position
      image(this.image,pos.x,pos.y,this.r,80);
      imageMode(CENTER)
      pop()

    }

}