class Game {

  constructor () {
    this.bg = new Image();
    this.bg.src = "./images/bg.jpg"
    this.cat = new Cat ("./images/cat.png");
    this.congaArr = [
      new Conga(Math.random()*canvas.width, "./image/conga.png")
    ];
    this.cthuluArr = [
      new Cthulu(0, "./images/cthulu.png")];
    this.cansArr = [
      new Cans (Math.random()*canvas.width, "./image/lata.png")
    ];
    this.totalScore = 0;
    this.delete;
    this.chuluInterval = 800;
    this.cansInterval = 2500;
    this.congaInterval = 10000;
    this.isGameOn = true;
    this.imgCat = "./images/catconga.png";
    this.catInConga = false;
    this.newredC = new RedCthulu();
  }

  gameRun = () => {
    if ( this.catInConga === true){
      this.killCthulus();
    }else {
      this.gameOver();
    }
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
  }


  killCthulus = () => {
    this.cthuluArr.forEach ((eachCthulu, index)=> {
        if (this.cat.x < eachCthulu.x + eachCthulu.w &&
          this.cat.x + eachCthulu.w > eachCthulu.x &&
          this.cat.y < eachCthulu.y + eachCthulu.h &&
          this.cat.h + this.cat.y > eachCthulu.y){
            this.cthuluArr.splice(index, 1)      
            this.totalScore += 2;
            score.innerText = this.totalScore;
            this.cat.img.src = "./images/cat.png"
            this.catInConga = false;  
        }
      })
     
  }
  

  collisionConga = () => {
   
    this.congaArr.forEach ((eachConga, index)=> {
      if (this.cat.x < eachConga.x + eachConga.w &&
            this.cat.x + eachConga.w > eachConga.x &&
            this.cat.y < eachConga.y + eachConga.h &&
            this.cat.h + this.cat.y > eachConga.y){
      this.congaArr.splice(index, 1)
      this.cat.img.src = "./images/catconga.png" 
      this.catInConga = true;     
      }
         
    })
   
  }

  collisionCans = () => {
   
    this.cansArr.forEach ((eachCans, index)=> {
      if (this.cat.x < eachCans.x + eachCans.w &&
            this.cat.x + eachCans.w > eachCans.x &&
            this.cat.y < eachCans.y + eachCans.h &&
            this.cat.h + this.cat.y > eachCans.y){
      this.cansArr.splice(index, 1)      
      this.totalScore++;
      score.innerText = this.totalScore;
      }
         
    })
    
  }

  removeCcs = () => {
    this.cansArr.forEach ((eachCans, index) => {
      if ( (eachCans.x > canvas.width - eachCans.w ) || (eachCans.y > canvas.height - eachCans.h )){
        this.cansArr.splice(index, 1)
      }
      
    })

    this.cthuluArr.forEach ((eachCthulu, index) => {
      if ( (eachCthulu.x > canvas.width - eachCthulu.w ) || (eachCthulu.y > canvas.height - eachCthulu.h )){
        this.cthuluArr.splice(index, 1)
      }
    })

  }

  newSpeed = () => {
    if (this.totalScore > 10){
    this.cthuluArr.forEach((eachCthulu) => {
      
        eachCthulu.speedX = 2.5;
        this.chuluInterval = 500;
      
      })
    }
  }

  addNewCthulu = () => {
    setInterval ( () => { 
      let newCthulu = new Cthulu();
      this.cthuluArr.push(newCthulu);
    }, this.chuluInterval)
  }


  //Intento de funcionalidad para que un enemigo persiga al gato
  // redC = () => {
  //   if ( this.totalScore >= 1 ){
  //     this.newredC.drawRedCthulu();
  //   }
  // }

  // moveRedC = () => {
  //   if ( this.totalScore >= 3 ){
  //     this.newredC.moveRedCthulu(this.cat.x, this.cat.y);
  //   }
  // }

  addNewCans = () => {
    setInterval (() => {
      let newCans = new Cans();
      this.cansArr.push(newCans);
    }, this.cansInterval)
  }

  addNewConga = () => {
    setInterval (() => {
      let newConga = new Conga();
      this.congaArr.push(newConga);
    }, this.congaInterval)
  }

     
  gameLoop = () => {

    // 1. Borrar el Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    // 2. Acciones de movimiento de los elementos
    this.gameRun();

    this.newSpeed();
    
    this.collisionCans();

    this.collisionConga();

    this.removeCcs();
    
    this.cthuluArr.forEach((eachCthulu) => {
      eachCthulu.moveCthulu();
    })

    this.cansArr.forEach((eachCans) => {
      eachCans.moveCans();
    })

    this.congaArr.forEach((eachConga) => {
      eachConga.moveConga();
    })

    //this.moveRedC();
    

    // 3. Dibujar los elementos
    ctx.drawImage (this.bg, 0, 0, canvas.width, canvas.height);

    this.cat.drawCat();
    
    //this.redC();

    this.congaArr.forEach((eachConga) => {
      eachConga.drawConga();
    })

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