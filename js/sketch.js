let paddle1;
let paddle2;
let ball;
let gameState = false;

//creates the canvas and the initial position for the ball and paddles
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2-50,10,100);
  paddle2 = new Paddle(width-30,height/2-50,10,100);
  ballInit = new Ball(width/2,height/2,10,10);
}

//constantly runs 
function draw() {
  background(150);

  paddle1.create();
  paddle2.create();
  ballInit.create();
}
