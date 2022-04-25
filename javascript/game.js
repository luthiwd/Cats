class Game {

  constructor () {
    this.bg = new Image();
    this.bg.src = "./images/bg.jpg"
    this.cat = new Cat ();
    this.isGameOn = true;
    this.cthuluArr = [
      new Cthulu(0, "./images/cthulu.png")];
  }

  gameOver = () => {
    this.cthuluArr.forEach ((eachCthulu)=> {
      if (this.cat.x < eachCthulu.x + eachCthulu.w &&
            this.cat.x + eachCthulu.w > eachCthulu.x &&
            this.cat.y < eachCthulu.y + eachCthulu.h &&
            this.cat.h + this.cat.y > eachCthulu.y){
            this.isGameOn = false;
            canvas.style.display = "none";
            gameOverScreen.style.display = "flex";
          }

    })
  };
 
  addNewCthulu = () => {
    setInterval ( () => { 
      let newCthulu = new Cthulu();
      console.log("tirando")
      this.cthuluArr.push(newCthulu);
    }, 1000)
  }


  
  gameLoop = () => {

    // 1. Borrar el Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2. Acciones de movimiento de los elementos
    this.gameOver();


    // 3. Dibujar los elementos
    ctx.drawImage (this.bg, 0, 0, canvas.width, canvas.height);
    this.cat.drawCat();
    this.cthuluArr.forEach((eachCthulu) => {
      console.log ("Dibujando")
      eachCthulu.drawCthulu();
    })

    // 4. Control de recursión
    if ( this.isGameOn ){
      requestAnimationFrame(this.gameLoop);
    }
  };
}