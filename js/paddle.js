//Initialize paddle class
class Paddle {
    //constructor for the position and size of the paddles
    constructor(_positionX, _positionY, _width, _height){
        this.width = _width;
        this.height = _height;
        this.positionX = _positionX;
        this.positionY = _positionY;
    }

    //method that creates the paddles
    create(){
        noStroke();
        fill(255);
        rect(this.positionX, this.positionY, this.width, this.height);
    }

}