var balls=[];
var blocks=[];
var ship;

function setup() {
	var cant_balls=3;
	createCanvas(windowWidth,windowHeight);
	for (var i = 0; i <cant_balls; i++) {
		balls.push(new Ball());
	}

	var block_lines=5;
	var block_per_line=9;
	var block_height=30;
	var block_width=floor(windowWidth/block_per_line);
	var block_y=block_height/2;
	for (var i = 0; i <block_lines; i++) {
		var block_x=block_width/2;
		for (var j = 0 ; j <block_per_line; j++) {
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
	for (var i = blocks.length - 1; i >= 0; i--) {
			blocks[i].show();
	}
	for (var i = balls.length - 1; i >= 0; i--) {
		if(balls[i].edges()){
			balls[i].collision(ship);	
			for (var j = blocks.length - 1; j >= 0; j--) {
				if(balls[i].collision(blocks[j])){
					blocks.splice(j,1);
					balls[i].update();
				}	
			}
			balls[i].update();
			balls[i].show();
		}
		else{
			balls.splice(i,1);
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