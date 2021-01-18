class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2

			
            }
            this.image = loadImage("Plucking mangoes/stone.png")
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			
            rectMode(CENTER)
		   
		   image(this.image, this.body.position.x, this.body.position.y, 90,90);
			//strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}