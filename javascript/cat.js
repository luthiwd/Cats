class Cat  {

    constructor () {
        this.x = canvas.width / 2; // posicion eje x
        this.y = canvas.height / 1.5; // posicion eje y
        this.w = 60; // width - ancho
        this.h = 60; // height - alto
        this.speedX = 5;
        this.speedY = 5;
        this.img = new Image();
        this.img.src = "./images/cat.png";
    }

    drawCat = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    
    

    catCollision = () => {
        //Collision with Humans & food
        // if (ballX< paddleX + paddleW &&
        //     ballX + ballRadius > paddleX &&
        //     ballY < paddleY + paddleH &&
        //     ballRadius + ballY > paddleY) {
        //     // collision detected!
        //     //pelota rebota hacia arriba
        //     ballDirectionY = - 1
        //     ballSpeed = ballSpeed + 1
        // }
            
    }
}