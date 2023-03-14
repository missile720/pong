let paddle1;
let paddle2;
let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle1 = new Paddle(30,height/2,10,100);
}

function draw() {
  background(150);

  paddle1.create();
}
