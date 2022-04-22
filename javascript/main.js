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
  
    //... empezar nuestra logica de juego 
    //nuestro juego sera toda una nueva clase
    //vamos a crear un nuevo objeto de lo que será la clase Game
    game = new Game();
    game.gameLoop();
    
}

// const keyPress = (event) => {
//   if ( event.code === )
// }

startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", keyPress);