function Block(pos_x,pos_y,width,height){
	this.height;
	this.width;
	this.pos;
	this.color=color(random(255),random(255),random(255));
	this.height=height;
	this.width=width;
	this.pos=createVector(pos_x,pos_y);
	this.show=function(){
		stroke(0);
		fill(this.color);
		quad(
			this.pos.x-this.width/2,this.pos.y-this.height/2,
			this.pos.x-this.width/2,this.pos.y+this.height/2,
			this.pos.x+this.width/2,this.pos.y+this.height/2,
			this.pos.x+this.width/2,this.pos.y-this.height/2
			);
	}
	
}