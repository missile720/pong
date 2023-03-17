//Initialize ball class
class Ball {
    //constructor for the position and size of the ball
    constructor(_positionX, _positionY, _width, _height){
        this.width = _width;
        this.height = _height;
        this.positionX = _positionX;
        this.positionY = _positionY;
        this.originX = _positionX;
        this.originY = _positionY;
        this.xMove = 4 * (Math.random() < 0.5 ? -1 : 1); //randomize starting directional movement
        this.yMove = 4 * (Math.random() < 0.5 ? -1 : 1);
    }

    //method that creates the ball
    create(){
        noStroke();
        fill(0,0,255);
        ellipse(this.positionX, this.positionY, this.width, this.height);
    }

    //method that moves ball
    move(){
        this.positionX += this.xMove;
        this.positionY += this.yMove;

        //checks if ball hits top or bottom of canvas
        if(this.positionY < 0 || this.positionY > windowHeight){
            this.positionY = constrain(this.positionY,0,windowHeight); //contrains the position inside the canvas box
            this.yMove *= -1;
        }

        //checks if ball hits paddle
        for(let paddle of [paddle1,paddle2]){
            //check for x axis
            if((this.positionX + this.width/2 < paddle.positionX + paddle.width) && (this.positionX + this.width/2 > paddle.positionX)){
                //check for y axis
                if((this.positionY + this.height/2 < paddle.positionY + paddle.height) && (this.positionY + this.height/2 > paddle.positionY)){
                    this.xMove *= -1.1; //change direction as well as increase speed
                    this.yMove *= 1.1
                }
            }
        }
        
    }

    //method for checking if ball hits left or right wall
    boundary(){
        //checks if ball hits left or right of canvas
        if(this.positionX < 0){
            return "left";
        }
        else if(this.positionX > windowWidth){
            return 'right';
        }
    }

    reset(){
        this.positionX = this.originX;
        this.positionY = this.originY;
        this.xMove = 4 * (Math.random() < 0.5 ? -1 : 1); //randomize starting directional movement
        this.yMove = 4 * (Math.random() < 0.5 ? -1 : 1);
    }
}