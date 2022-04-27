class catConga {

    constructor (catX, catY) {
        this.x = catX; // posicion eje x
        this.y = catY; // posicion eje y
        this.w = 60; // width - ancho
        this.h = 48; // height - alto
        this.speedX = 20;
        this.speedY = 20;
        this.img = new Image();
        this.img.src = "./images/catconga.png";
        this.keys ={up:false,down:false,left:false,right:false};

    }

    drawCatConga = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

}