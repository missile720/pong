//Initialize paddle class
class Paddle {
    //constructor for the position, size, and score of the paddles
    constructor(_positionX, _positionY, _width, _height, _score = 0){
        this.width = _width;
        this.height = _height;
        this.positionX = _positionX;
        this.positionY = _positionY;
        this.score = _score;
        this.originX = _positionX;
        this.originY = _positionY;
    }

    //method that creates the paddles
    create(){
        noStroke();
        fill(255);
        rect(this.positionX, this.positionY, this.width, this.height);
    }

    //method that updates the position of the paddles
    move(_y){
        this.positionY += _y;
        this.positionY = constrain(this.positionY,5,windowHeight-105); //contrains the position inside the canvas box
    }

    reset(){
        this.positionX = this.originX;
        this.positionY = this.originY;
    }
}