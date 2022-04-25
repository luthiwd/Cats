const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#splash-screen");
const restartBtn = document.querySelector ("#restart-btn");
const scoreDOM = document.querySelector("#score")
const gameOverScreen = document.querySelector("#gameover-screen")
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");


const startGame = () => {
    startScreen.style.display = "none";
    canvas.style.display = "block";
    gameOverScreen.style.display= "none";
  
    game = new Game();
    game.addNewCthulu();
    game.gameLoop();
    
}

const keyPress = (event) => {
    if ( event.code === "ArrowLeft" && this.game.cat.x > 0  ){
        this.game.cat.x -= this.game.cat.speedX;
    }else if (event.code === "ArrowRight" && (this.game.cat.x < canvas.width - this.game.cat.h)){
        this.game.cat.x += this.game.cat.speedX; 
    }else if (event.code === "ArrowDown" && this.game.cat.y < canvas.height - this.game.cat.h){
        this.game.cat.y += this.game.cat.speedY;
    }else if (event.code === "ArrowUp" && this.game.cat.y > 0){
        this.game.cat.y -= this.game.cat.speedY;
    }
     
 }

startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyPress); 
restartBtn.addEventListener("click", startGame);