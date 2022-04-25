class Cthulu {

    constructor () {
        this.x = Math.random() * canvas.width; // posicion eje x
        this.y = Math.random() * canvas.height; // posicion eje y
        this.w = 60; // width - ancho
        this.h = 60; // height - alto
        this.img = new Image();
        this.img.src = "./images/cthulu.png";
        this.speed = 2;
    }

    
    
    drawCthulu = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}