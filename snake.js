const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snakeSpeed = 7;
var changed_direction = false;
let gameStart = false;
var score = 0;

var snakeTailPartsX = [];
var snakeTailPartsY = [];
var tailLength = 2;
var tailXPosition;
var tailYPosition;
var preHeadX;
var preHeadY;



//Board prop
let tileCount = 20;
let tileSize = canvas.width / tileCount;

//Snake prop
let snakeHeadX = 7;
let snakeHeadY = 11;
let snakeSpeedX = 1;
let snakeSpeedY = 0;
let snakeDead = false;

//Food prop
let foodX = Math.floor(Math.random() * 20);
let foodY = Math.floor(Math.random() * 20);

/* Main */
document.body.addEventListener('keydown', keyDown);
gameUpdate();

/* FUNCTIONS */

function gameUpdate() {


    if (gameStart) {

        checkIfDead();

        if (snakeDead) {

            clearScreen();
            ctx.fillStyle = "dodgerblue";
            ctx.font = "bold 30px Orbitron";
            ctx.fillText("You Died", (canvas.width / 2) - 70, (canvas.height / 2));

            ctx.font = " 12px Orbitron";
            ctx.fillText("Press 'R' to restart game", 119, (canvas.height / 2) + 30);

        }
        else {

            preHeadX = snakeHeadX
            preHeadY = snakeHeadY
            changeSnakePosition();
            snakeTailPartsX[0] = preHeadX
            snakeTailPartsY[0] = preHeadY

            clearScreen();
            spawnNewFood();
            drawFood(foodX, foodY);
            drawSnake();

            setTimeout(gameUpdate, 1000 / snakeSpeed)
            setTimeout(allowNewDirection, 1000 / snakeSpeed)
        }
    }
    else {
        clearScreen();
        ctx.fillStyle = "dodgerblue";
        ctx.font = "bold 20px Orbitron";
        ctx.fillText("Press", (canvas.width / 2) - 40, (canvas.height / 2) - 50);
        ctx.fillText("'Enter'", (canvas.width / 2) - 40, (canvas.height / 2));
        ctx.fillText("to start game", (canvas.width / 2) - 80, (canvas.height / 2) + 50);

        ctx.font = "bold 12px Orbitron";
        ctx.fillText("Controls: W,A,S,D or Arrow keys", 5, (canvas.height) - 5);
    }
}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {

    for (let i = 0; i <= tailLength; i++) {
        ctx.fillStyle = 'green'

        let tempX = snakeTailPartsX[i];
        let tempY = snakeTailPartsY[i];
        snakeTailPartsX[i] = preHeadX
        snakeTailPartsY[i] = preHeadY
        preHeadX = tempX
        preHeadY = tempY

        ctx.fillRect(snakeTailPartsX[i] * tileCount, snakeTailPartsY[i] * tileCount, tileSize, tileSize);

    }
    ctx.fillStyle = 'Yellow'
    ctx.fillRect(snakeHeadX * tileCount, snakeHeadY * tileCount, tileSize, tileSize);
}

function drawFood(x, y) {
    ctx.fillStyle = 'Red'
    ctx.fillRect(x * tileCount, y * tileCount, tileSize, tileSize);
}

function resetValues() {
    snakeDead = false;
    score = 0;
    snakeHeadX = 7;
    snakeHeadY = 11;
    snakeSpeedX = 1;
    snakeSpeedY = 0;
    snakeSpeed = 7;
    tailLength = 2;
    document.getElementById("scoreText").textContent = score;
    randomizeFoodPosition();

    for (let i = 0; i < tailLength; i++)
    {
        snakeTailPartsX[i] = -1;
        snakeTailPartsY[i] = -1;
    }
}

function allowNewDirection() {
    changed_direction = false;
}

function keyDown(event) {
    const leftKey = 37;
    const rightKey = 39;
    const upKey = 38;
    const downKey = 40;
    const w_Key = 87;
    const a_Key = 65;
    const s_Key = 83;
    const d_Key = 68;
    const r_Key = 82;
    const enterKey = 13;


    if (!changed_direction) {
        if (event.keyCode == leftKey || event.keyCode == a_Key) {
            changed_direction = true;
            if (snakeSpeedX == 1) return;
            snakeSpeedX = -1;
            snakeSpeedY = 0;
        }
        if (event.keyCode == rightKey || event.keyCode == d_Key) {
            changed_direction = true;

            if (snakeSpeedX == -1) return;
            snakeSpeedX = 1;
            snakeSpeedY = 0;
        }
        if (event.keyCode == upKey || event.keyCode == w_Key) {
            changed_direction = true;

            if (snakeSpeedY == 1) return;
            snakeSpeedY = -1;
            snakeSpeedX = 0;
        }
        if (event.keyCode == downKey || event.keyCode == s_Key) {
            changed_direction = true;

            if (snakeSpeedY == -1) return;
            snakeSpeedY = 1;
            snakeSpeedX = 0;
        }

        if (event.keyCode == r_Key && snakeDead) {
            resetValues();
            gameUpdate();
        }

        console.log(event.which);

        if (!gameStart && event.keyCode == enterKey) {
            gameStart = true;
            gameUpdate();
        }
    }
}

function changeSnakePosition() {
    snakeHeadX = snakeHeadX + snakeSpeedX;
    snakeHeadY = snakeHeadY + snakeSpeedY;
}

function spawnNewFood() {
    if (snakeHeadX == foodX && snakeHeadY == foodY) {
        score++;
        document.getElementById("scoreText").textContent = score;
        randomizeFoodPosition();
        tailLength++

        changeSnakeSpeed();
    }
}

function checkIfDead() {
    if (snakeHeadX < 0 || snakeHeadY < 0 || snakeHeadX > 19 || snakeHeadY > 19) {
        snakeDead = true;
    }

    for (let i = 0; i < tailLength; i++)
    {
        if(snakeTailPartsX[i] == snakeHeadX && snakeTailPartsY[i] == snakeHeadY)
        snakeDead = true;
    }
}

function changeSnakeSpeed()
{
    if (score % 5 == 0) {
        snakeSpeed += 0.5
    }
}

function randomizeFoodPosition() {
    foodX = Math.floor(Math.random() * 20);
    foodY = Math.floor(Math.random() * 20);
}
