let paddle1;
let paddle2;
let ball;
let gameState = false; //initial game state
let gameRound = true; //game going but not reset
let ballState = false;

//creates the canvas and the initial position for the ball and paddles
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100);
  paddle2 = new Paddle(width-30,height/2-50,10,100);
  ball1 = new Ball(width/2,height/2,10,10);
}

//function that runs whenever window is resized
function windowResized() {
  //function that resizes the canvas
  resizeCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100,paddle1.score);
  paddle2 = new Paddle(width-30,height/2-50,10,100,paddle2.score);
  ball1 = new Ball(width/2,height/2,10,10);
}


//p5.js draw function constantly runs
function draw() {
  background(150);

  paddle1.create();
  paddle2.create();
  ball1.create();

  //check to see if gameState is true
  if(gameState){
    //function call for moving paddles
    paddleMove();
    //function call for displaying score
    scoreScreen();
    
    if(gameRound){
      //method call for ball move
      ball1.move();
      //method call for ball hitting goal
      ballState = ball1.boundary();
    }
  }
  else{
    //function runs when game not started
    startScreen();
  }

  if(ballState){
    if(ballState === "right"){
      paddle1.score += 1;
      //function call for next round
      nextRound();
    }
    else if(ballState === 'left'){
      paddle2.score += 1;
      //function call for next round
      nextRound();
    }
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
    gameRound = true;
  }
  //this should reset the game to initial conditions
  else if(key === 'r'){
    reset();
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

function scoreScreen(){
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`${paddle1.score} : ${paddle2.score}`, width/2, 100);
}

function nextRound(){
  //change back gameState
  ballState = false;
  gameRound = false;
  //call reset for ball
  ball1.reset();
}

function reset(){
  //change back gameState
  gameState = false;
  gameRound = true;
  //call reset for paddles and ball
  paddle1.reset();
  paddle2.reset();
  paddle1.resetScore();
  paddle2.resetScore();
  ball1.reset();
}