function Block(pos_x,pos_y,width,height){
	this.height;
	this.width;
	this.pos;
	this.color=color(random(255),random(255),random(255));
	this.height=height;
	this.width=width;
	this.pos=createVector(pos_x,pos_y);
	const a = this.pos.x-this.width/2;
	const b = this.pos.x+this.width/2
	const c = this.pos.y-this.height/2;
	const d = this.pos.y+this.height/2;
	
	this.show=function(){
		stroke(0);
		fill(this.color);
		quad(
			a,c,
			a,d,
			b,d,
			b,c
		);
	}
	
}
