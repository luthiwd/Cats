class Cat  {

    constructor (srcParam) {
        this.x = canvas.width / 2; // posicion eje x
        this.y = canvas.height / 1.5; // posicion eje y
        this.w = 60; // width - ancho
        this.h = 48; // height - alto
        this.speedX = 10;
        this.speedY = 10;
        this.img = new Image();
        this.img.src = srcParam;
        this.keys ={up:false,down:false,left:false,right:false};

    }

    drawCat = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}