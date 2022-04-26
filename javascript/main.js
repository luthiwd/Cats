// Botones para iniciar y reiniciar el juego
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector ("#restart-btn");

//Screens del juego
const startScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

//Score en pantalla y nombre del Jugador
const gameDiv= document.querySelector('#gameDiv');
let score = document.querySelector('#score');
let namePlayer = document.querySelector("#catName"); //Nombre introducido en el input
let nameScore = document.querySelector("#namePlayer"); // Variable donde insertaremos el nombre del Input

//Musica
const audio = new Audio ("./music/cute.mp3");

//ScoreBoard
scoreBoard = document.querySelector("#boardScore")



const startGame = () => {
    //Condicional por si no se inserta nombre en el Input
    if (!(namePlayer).value) namePlayer.value = "Misifu"

    //Estado inicial de las Screens
    startScreen.style.display = "none";
    canvas.style.display = "block";
    gameOverScreen.style.display= "none";
    gameDiv.style.display = "flex";
    scoreBoard.style.display = "none"
    //Test y prubeas de codigo
    console.log((namePlayer).value);

    //Score y Nombre mostrado en pantalla de Juego
    score.innerText = 0;    
    nameScore.innerText = namePlayer.value;

    //Musica del juego
    audio.play();
    audio.volume = 0.2;

    //Inicialización del Juego
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
