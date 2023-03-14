class Paddle {
    constructor(_positionX, _positionY, _width, _height){
        this.width = _width;
        this.height = _height;
        this.positionX = _positionX;
        this.positionY = _positionY;
    }

    create(){
        noStroke();
        fill(255);
        rect(this.positionX, this.positionY, this.width, this.height);
    }
}