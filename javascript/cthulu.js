class Cthulu {

    constructor () {
        this.x = 0; // posicion eje x
        this.y = Math.random() * canvas.height; // posicion eje y
        this.speedX = 1;
        this.speedY = 0;
        this.dx = 0;
        this.dy = 0; 
        this.w = 60; // width - ancho
        this.h = 60; // height - alto
        this.img = new Image();
        this.img.src = "./images/cthulu.png";
    }

    
    
    drawCthulu = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveCthulu = () => {
        this.x += this.speedX;
        this.y += this.speedY;
    }

}