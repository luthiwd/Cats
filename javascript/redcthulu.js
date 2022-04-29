class RedCthulu {

    constructor () {
        this.x = Math.random() * canvas.width; // posicion eje x
        this.y = 20; // posicion eje y
        this.speedX = 1;
        this.speedY = 1;
        this.w = 60; // width - ancho
        this.h = 60; // height - alto
        this.img = new Image();
        this.img.src = "./images/redcthulu.png";
        
        
    }// this.distance = Math.sqrt((this.dx*this.dx) + (this.dy*this.dy));
     // this.angle = Math.atan2(this.dy,this.dx) * 180 / Math.PI;
           
    
    drawRedCthulu = () => {
         ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    moveRedCthulu = () =>  {

        this.x += this.speedX;
        this.y += this.speedY;
    }


    

}