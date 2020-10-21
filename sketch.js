let balls=[];
let blocks=[];
let ship;
let fr = 25;

function setup() {
	startupTouch();
	let cant_balls=Math.max(1, Math.floor(Math.random() * 5));
	createCanvas(windowWidth,windowHeight);
	
	for (let i = 0; i <cant_balls; i++) {
		balls.push(new Ball());
	}
	frameRate(fr)
	let block_lines=5;
	let block_per_line=Math.max(4, Math.floor(Math.random() * 10));
	let block_height=Math.max(50, Math.floor(Math.random() * 100));
	let block_width=floor(windowWidth/block_per_line);
	let block_y=block_height/2;
	for (let i = 0; i <block_lines; i++) {
		let block_x=block_width/2;
		for (let j = 0 ; j <block_per_line; j++) {
			blocks.push(new Block(block_x,block_y,block_width,block_height));
			block_x=block_x+block_width;
		}
		block_y=block_y+block_height;
	}
	ship=new Ship();
	
}

function draw() {
	background(0);
	ship.update();
	ship.edges();
  	ship.show();
	// mouse();
	for (let i = blocks.length - 1; i >= 0; i--) {
			blocks[i].show();
	}
	for (let i = balls.length - 1; i >= 0; i--) {
		if(balls[i].edges()){
			balls[i].collision(ship);	
			for (let j = blocks.length - 1; j >= 0; j--) {
				if(balls[i].collision(blocks[j])){
					blocks.splice(j,1);
					if(!blocks.length) setTimeout(()=>window.location.reload(true), 3000) 
					balls[i].update();
				}	
			}
			balls[i].update();
			balls[i].show();
		}
		else{
			balls.splice(i,1);
			if(!balls.length) setTimeout(()=>window.location.reload(true), 3000) 
		}
	}
}
function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		ship.move(createVector(-1,0));
	} else if (keyCode === RIGHT_ARROW) {
		ship.move(createVector(1,0));
	}
}
function mouse(){
	if (mouseX < ship.pos.x-ship.width/2) {
		ship.move(createVector(-1,0));
	} else if (mouseX > ship.pos.x+ship.width/2) {
		ship.move(createVector(1,0));
	}
}


function handleStartTouch(evt) {
	evt.preventDefault();
	let touches = evt.changedTouches;
	const surface = windowWidth * 0.3;  
	if(surface >= touches[0].clientX){
		ship.move(createVector(-1,0));
	}
	else if(windowWidth - surface <= touches[0].clientX) {
		ship.move(createVector(1,0));
	}
  }

function startupTouch() {
	let el = document.getElementById("defaultCanvas0");
	el.addEventListener("touchstart", handleStartTouch, false);

}
