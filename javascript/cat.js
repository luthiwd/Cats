class Cat  {

    constructor () {
        this.x = 40; // posicion eje x
        this.y = 40; // posicion eje y
        this.w = 40; // width - ancho
        this.h = 40; // height - alto
        this.DX = 1;
        this.DY= 0;
        this.img = new Image();
        this.img.src = "./images/cat.png";
        this.speed = 1;
        this.jumpSpeed = 40;
    }

    drawCat = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveCat =() => {
        this.x += this.DX;
        this.y += this.DY;
    }
}