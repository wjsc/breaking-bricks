function Ball(){
	this.r=Math.max(10, Math.floor(Math.rand() * 50));
	this.pos=createVector(windowWidth/2,windowHeight/2);
	this.color=color(random(255),random(255),random(255));
	this.vel=createVector(random(-1,1),random(0.8,1));
	// this.vel=createVector(0,1);
	this.mag=Math.max(10, Math.floor(Math.rand() * 30));
	this.collision=function(block){
		let colision=false;
		if(this.pos.x-this.r<=block.pos.x+block.width/2 && this.pos.x+this.r>=block.pos.x-block.width/2){
			if(this.pos.y-this.r<=block.pos.y+block.height/2 && this.pos.y+this.r>=block.pos.y-block.height/2){
				colision=true;
			}
		}
		if(colision){
			let distancia=(abs(block.pos.x-this.pos.x))/(block.width/2);	
			vel_x=(1/(1-0.1*distancia))*this.vel.x;
			this.vel=createVector(vel_x,-this.vel.y);
		}
		return colision;
	}
	this.edges=function(){
		let edges=true;
		if(this.pos.y+this.r>windowHeight){
			// this.pos.y=this.r;
			// this.color=color(random(255),random(255),random(255));
			// this.vel=createVector(this.vel.x, -this.vel.y);
			edges=false;
		}
		else if(this.pos.y-this.r<0){
			this.vel=createVector(this.vel.x, -this.vel.y);
		}
		if(this.pos.x+this.r>windowWidth){
			this.vel=createVector(-this.vel.x, this.vel.y);
		}
		else if(this.pos.x-this.r<0){
			this.vel=createVector(-this.vel.x, this.vel.y);
		}
		return edges;
	}
	this.update=function(){
		// console.log(this.vel);
		this.vel.setMag(this.mag);
		this.pos.add(this.vel);
	}
	this.show=function(){		
		noStroke();
		fill(this.color);
		ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2);
	}
}
