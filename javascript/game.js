class Game {

    constructor () {

      this.cat = new Cat ();

    }

    gameLoop = () => {
    
      // 1. Borrar el Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      // 2. Acciones de movimiento de los elementos



      // 3. Dibujar los elementos
      this.cat.drawCat();


      // 4. Control de recursión
      requestAnimationFrame(this.gameLoop);
    
    
      
    };
}