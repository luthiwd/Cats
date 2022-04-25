class Cans {

    constructor () {
        this.x = Math.random() * canvas.width; // posicion eje x
        this.y = 0; // posicion eje y
        this.w = 60; // width - ancho
        this.h = 60; // height - alto
        this.speed = 2;
        this.img = new Image();
        this.img.src = "./images/lata.png";
        
    }

    drawCans = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    moveCans = () => {
        this.y += this.speed;
    }

};