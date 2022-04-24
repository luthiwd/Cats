class Game {

  constructor () {
    this.bg = new Image();
    this.bg.src = "./images/bg.png"
    this.cat = new Cat ();
    this.isGameOn = true;

  }

  gameOver = () => {
    if (this.cat.x < eachHuman.x + eachHuman.w &&
      this.cat.x + this.cat.w > eachHuman.x &&
      this.cat.y < eachHuman.y + eachHuman.h &&
      this.cat.h + this.cat.y > eachHuman.y){
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.getElementsByClassName.display = "flex";
    }
    
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