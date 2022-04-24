class Cthulu {

    constructor () {
        this.x = 30; // posicion eje x
        this.y = 30; // posicion eje y
        this.w = 80; // width - ancho
        this.h = 80; // height - alto
        this.img = new Image();
        this.img.src = "./images/cthulu.png";
        this.speed = 2;
    }

    drawCthulu = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    randomMoveCthulu = () => {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    }

}