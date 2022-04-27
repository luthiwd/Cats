// Botones para iniciar y reiniciar el juego
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector ("#restart-btn");
const homeBtn = document.querySelector ("#home-btn");

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
        

    //Musica del juego
    audio.play();
    audio.volume = 0.2;

    //Inicialización del Juego
    game = new Game();
    //Score y Nombre mostrado en pantalla de Juego
    score.innerText = 0;    
    nameScore.innerText = namePlayer.value;
    game.addNewConga();
    game.addNewCthulu();
    game.addNewCans();
    game.gameLoop();
    
}

const homeGame = () => {
    gameOverScreen.style.display = "none";
    startScreen.style.display  = "flex";
    namePlayer.value = "";
}


const mouseMove = (e) => {
    let relativeX = e.clientX - canvas.offsetLeft;
    let relativeY = e.clientY - canvas.offsetTop;
    if(relativeX > 0 && relativeX < canvas.width) {
        this.game.cat.x = relativeX - this.game.cat.w;
    }
    if(relativeY > 0 && relativeY < canvas.height) {
        this.game.cat.y = relativeY - this.game.cat.h;
    }
} 


startBtn.addEventListener("click", startGame);
window.addEventListener("mousemove", mouseMove)
restartBtn.addEventListener("click", startGame);
homeBtn.addEventListener("click", homeGame);
