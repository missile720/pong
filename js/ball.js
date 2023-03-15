//Initialize ball class
class Ball {
    //constructor for the position and size of the ball
    constructor(_positionX, _positionY, _width, _height){
        this.width = _width;
        this.height = _height;
        this.positionX = _positionX;
        this.positionY = _positionY;
    }

    //method that creates the ball
    create(){
        noStroke();
        fill(0,0,255);
        ellipse(this.positionX, this.positionY, this.width, this.height);
    }
}