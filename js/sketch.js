let paddle1;
let paddle2;
let ball;
let gameState = false; //initial game state
let gameRound = false; //game going but not reset
let ballState = false;
let winState = false; //holder for if winner was determined
let winningPlayer; //holder for winning player

//creates the canvas and the initial position for the ball and paddles
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100);
  paddle2 = new Paddle(width-30,height/2-50,10,100);
  ball = new Ball(width/2,height/2,10,10);
}

//function that runs whenever window is resized
function windowResized() {
  //function that resizes the canvas
  resizeCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100,paddle1.score);
  paddle2 = new Paddle(width-30,height/2-50,10,100,paddle2.score);
  ball = new Ball(width/2,height/2,10,10);
}


//p5.js draw function constantly runs
function draw() {
  background(150);

  paddle1.create();
  paddle2.create();
  ball.create();

  //check to see if gameState is true
  if(gameState){
    if(!winState){
      //function call for moving paddles
      paddleMove();
    }
    else{
      win(winningPlayer);
    }
    //function call for displaying score
    scoreScreen();
    
    if(gameRound){
      //method call for ball move
      ball.move();
      //method call for ball hitting goal
      ballState = ball.boundary();
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
      if(paddle1.score === 5){
        winningPlayer = "Player 1";
        winState = true;
      }
      else{
        nextRound();
      }
    }
    else if(ballState === 'left'){
      paddle2.score += 1;
      //function call for next round
      if(paddle2.score === 5){
        winningPlayer = "Player 2";
        winState = true;
      }
      else{
        nextRound();
      }
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

//function runs whenever key is pressed
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
  text('Start Game: Spacebar', width/2, 100);
  text('First to 5 wins!', width/2, height-100);

  textAlign(LEFT);
  text('Controls:', 10, 150);
  text('Up: W', 10, 200);
  text('Down: S', 10, 250);

  textAlign(RIGHT);
  text('Controls:', width-10, 150);
  text('Up: O', width-10, 200);
  text('Down: K', width-10, 250);
}

function scoreScreen(){
  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`${paddle1.score} : ${paddle2.score}`, width/2, 100);
}

function nextRound(){
  //change back gameRound
  ballState = false;
  gameRound = false;
  //call reset for ball
  ball.reset();
}

function reset(){
  //change back gameState, gameRound and winState
  gameState = false;
  gameRound = true;
  winState = false;
  //call reset for paddles and ball
  paddle1.reset();
  paddle2.reset();
  paddle1.resetScore();
  paddle2.resetScore();
  ball.reset();
}

function win(winner){
  //change back gameRound
  ballState = false;
  gameRound = false;

  noStroke();
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text(`${winner} wins!`, width/2, height/2);
  text(`Press R to reset`, width/2, height-100);
}