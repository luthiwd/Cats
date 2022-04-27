class Game {

  constructor () {
    this.bg = new Image();
    this.bg.src = "./images/bg.jpg"
    this.cat = new Cat ("./images/cat.png");
    this.isGameOn = true;
    this.cthuluArr = [
      new Cthulu(0, "./images/cthulu.png")];
    this.cansArr = [
      new Cans (Math.random()*canvas.width, "./image/lata.png")
    ];
    this.totalScore = 0;
    this.delete;
    this.chuluInterval = 2000;
    this.cansInterval = 2500;
    this.congaTimeOut = 3000;
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
        gameDiv.style.display = "none";
        scoreBoard.style.display = "block"
        audio.pause();
        scoreBoard.innerText = namePlayer.value + "  " + this.totalScore
      }

    })
  };



  collisionCans = () => {
    this.cansArr.forEach ((eachCans)=> {
      if (this.cat.x < eachCans.x + eachCans.w &&
            this.cat.x + eachCans.w > eachCans.x &&
            this.cat.y < eachCans.y + eachCans.h &&
            this.cat.h + this.cat.y > eachCans.y){
      this.delete = this.cansArr.indexOf(eachCans)
      this.cansArr.splice(this.delete, 1)      
      this.totalScore++;
      score.innerText = this.totalScore;
      }
         
    })
    
      
  }

  
    

  newSpeed = () => {
    this.cthuluArr.forEach((eachCthulu) => {
      if ( this.totalScore > 5){
        eachCthulu.speedX = 1.5;
      }
    })
  }


  addNewCthulu = () => {
    setInterval ( () => { 
      let newCthulu = new Cthulu();
      this.cthuluArr.push(newCthulu);
    }, this.chuluInterval)
  }

  addNewCans = () =>{
    setInterval (() => {
      let newCans = new Cans();
      this.cansArr.push(newCans);
    }, this.cansInterval)
  }

  
   
  gameLoop = () => {

    // 1. Borrar el Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2. Acciones de movimiento de los elementos
    this.gameOver();

    this.newSpeed();
    
    this.collisionCans();
    
    this.cthuluArr.forEach((eachCthulu) => {
      eachCthulu.moveCthulu();
    })

    this.cansArr.forEach((eachCans) => {
      eachCans.moveCans();
    })

    

    // 3. Dibujar los elementos
    ctx.drawImage (this.bg, 0, 0, canvas.width, canvas.height);

    this.cat.drawCat();

    

    this.cansArr.forEach((eachCans) => {
      eachCans.drawCans();
    });

    this.cthuluArr.forEach((eachCthulu) => {
      eachCthulu.drawCthulu();
    });

    // 4. Control de recursión
    if ( this.isGameOn ){
      requestAnimationFrame(this.gameLoop);
    }
  };
}