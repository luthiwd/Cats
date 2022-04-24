class Game {

    constructor () {
      this.bg = new Image();
      this.bg.src = "./images/bg.png"
      this.cat = new Cat ();
      this.isGameOn = true;

    }

      gameLoop = () => {
    
      // 1. Borrar el Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      // 2. Acciones de movimiento de los elementos
      


      // 3. Dibujar los elementos
      ctx.drawImage (this.bg, 0, 0, canvas.width, canvas.height);
      this.cat.drawCat();

      // 4. Control de recursión
      if ( this.isGameOn ){
      requestAnimationFrame(this.gameLoop);
      }  
    };
}