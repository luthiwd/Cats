const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#splash-screen");
const restartBtn = document.querySelector ("#restart-btn");
const gameDiv= document.querySelector('#gameDiv');
let score = document.querySelector('#score');
const gameOverScreen = document.querySelector("#gameover-screen");
const scoreBoard = document.querySelector("#boardScore");
let namePlayer = document.querySelector("#catName");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const audio = new Audio ("./music/cute.mp3");



const startGame = () => {
    if (!(namePlayer).value) namePlayer.value = "Misifu"
    startScreen.style.display = "none";
    canvas.style.display = "block";
    gameOverScreen.style.display= "none";
    gameDiv.style.display = "flex"
    scoreBoard.style.display ="none";
    console.log((namePlayer).value);
    score.innerText = 0;
    
    audio.play();
    audio.volume = 0.2;
    game = new Game();
    game.addNewCthulu();
    game.addNewCans();
    game.gameLoop();
    
}

const keyPress = (event) => {
    if ( event.code === "ArrowLeft" && this.game.cat.x > 0  ){
        this.game.cat.x -= this.game.cat.speedX;
    }
    if (event.code === "ArrowRight" && this.game.cat.x < canvas.width - this.game.cat.h){
        this.game.cat.x += this.game.cat.speedX; 
    }
    if (event.code === "ArrowDown" && this.game.cat.y < canvas.height - this.game.cat.h){
        this.game.cat.y += this.game.cat.speedY;
    }
     if (event.code === "ArrowUp" && this.game.cat.y > 0){
         this.game.cat.y -= this.game.cat.speedY;
    }
     
 }




startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyPress);

restartBtn.addEventListener("click", startGame);
