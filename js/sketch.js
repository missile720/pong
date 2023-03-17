let paddle1;
let paddle2;
let ball;
let gameState = false; //initial game state

//creates the canvas and the initial position for the ball and paddles
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100);
  paddle2 = new Paddle(width-30,height/2-50,10,100);
  ballInit = new Ball(width/2,height/2,10,10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100);
  paddle2 = new Paddle(width-30,height/2-50,10,100);
  ballInit = new Ball(width/2,height/2,10,10);
}


//p5.js draw function constantly runs
function draw() {
  background(150);

  paddle1.create();
  paddle2.create();
  ballInit.create();

  //check to see if gameState is true
  if(gameState){
    //function call for moving paddles
    paddleMove();
  }
  else{
    //function runs when game not started
    startScreen();
  }

}

//function that moves the paddle when key is down
function paddleMove(){
  //ascii 87 is W
  if (keyIsDown(87)) {
    paddle1.move(-5);
  }
  //ascii 83 is S
  else if (keyIsDown(83)) {
    paddle1.move(5);
  }
  //ascii 79 is O
  else if (keyIsDown(79)) {
    paddle2.move(-5);
  }
  //ascii 75 is K
  else if (keyIsDown(75)) {
    paddle2.move(5);
  }
}

function keyPressed(){
  //when spacebar is pressed game starts
  if(key === ' '){
    gameState = true;
  }
  //this should reset the game to initial conditions
  else if(key === 'r'){
    //change back gameState
    gameState = false;
    //call reset for paddles and ball
    paddle1.reset();
    paddle2.reset();
    ball.reset();
  }
}

function startScreen(){
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Start Game:', width/2, 100);
  text('Spacebar', width/2, height-100);
}