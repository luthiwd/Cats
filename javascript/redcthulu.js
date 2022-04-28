class RedCthulu {

    constructor () {
        this.x = 80; // posicion eje x
        this.y = 20; // posicion eje y
        this.dx;
        this.dy;
        this.hyp; 
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

    moveRedCthulu = (catx, caty) =>  {

        this.dx = catx - this.x;
        this.dy = caty - this.y;

        this.speedX = this.speedX * (this.dx/this.distance);
        this.speedY = this.speedY * (this.dy/this.distance);
        this.dx = catx - this.x;
        this.dy = caty - this.y;
        
        this.x += this.speedX;
        this.y += this.speedY;
    }


    

}