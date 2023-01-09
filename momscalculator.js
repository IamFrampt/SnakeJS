let player = 0;
var playerXScore=0;
var playerOScore=0;
var switchPlayer = false;

var topLeft, topMiddle, topRight, left, middle, right, botLeft, botMiddle, botRight;

function checkWinner() {

    topLeft = document.getElementById("top-left").value;
    topMiddle = document.getElementById("top-middle").value;
    topRight = document.getElementById("top-right").value;
    left = document.getElementById("left").value;
    middle = document.getElementById("middle").value;
    right = document.getElementById("right").value;
    botLeft = document.getElementById("bot-left").value;
    botMiddle = document.getElementById("bot-middle").value;
    botRight = document.getElementById("bot-right").value;

    whoIsPlaying();

    /* X WINS */ 

    /* HORIZONTAL */
    if (topLeft == "X" && topMiddle == "X" && topRight == "X") {
        
        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("left").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (left == "X" && middle == "X" && right == "X") {

        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (botLeft == "X" && botMiddle == "X" && botRight == "X") {

        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("right").disabled = true;
    }

    /* VERTICAL */

    if (topLeft == "X" && left == "X" && botLeft == "X") {
        
        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (topMiddle == "X" && middle == "X" && botMiddle == "X") {
        
        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (topRight == "X" && right == "X" && botRight == "X") {
        
        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
    }

    /* DIAGONAL */

    if (topLeft == "X" && middle == "X" && botRight == "X") {
        
        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
    }

    if (topRight == "X" && middle == "X" && botLeft == "X") {
        
        playerXScore++
        document.getElementById('playerTurn').innerHTML = "Player X Won";
        document.getElementById('playerXScore').innerHTML = playerXScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    /* O WINS */

    /* HORIZONTAL */
    if (topLeft == "O" && topMiddle == "O" && topRight == "O") {
        
        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("left").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (left == "O" && middle == "O" && right == "O") {

        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (botLeft == "O" && botMiddle == "O" && botRight == "O") {

        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("right").disabled = true;
    }

    /* VERTICAL */

    if (topLeft == "O" && left == "O" && botLeft == "O") {
        
        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("topMiddle").disabled = true;
        document.getElementById("topRight").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (topMiddle == "O" && middle == "O" && botMiddle == "O") {
        
        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }

    if (topRight == "O" && right == "O" && botRight == "O") {
        
        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("middle").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
    }

    /* DIAGONAL */

    if (topLeft == "O" && middle == "O" && botRight == "O") {
        
        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("top-middle").disabled = true;
        document.getElementById("top-right").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-left").disabled = true;
        document.getElementById("bot-middle").disabled = true;
    }

    if (topRight == "O" && middle == "O" && botLeft == "O") {
        
        playerOScore++
        document.getElementById('playerTurn').innerHTML = "Player O Won";
        document.getElementById('playerOScore').innerHTML = playerOScore;

        document.getElementById("top-left").disabled = true;
        document.getElementById("top-middle").disabled = true;
        document.getElementById("left").disabled = true;
        document.getElementById("right").disabled = true;
        document.getElementById("bot-middle").disabled = true;
        document.getElementById("bot-right").disabled = true;
    }
}

function whoIsPlaying() {
    if (player == 0) {
        document.getElementById('playerTurn').innerHTML = "It's Player X Turn";
    }
    else {
        document.getElementById('playerTurn').innerHTML = "It's Player O Turn";
    }
}

function resetGame()
{
    document.getElementById("top-left").value = " ";
    document.getElementById("top-middle").value = " ";
    document.getElementById("top-right").value = " ";
    document.getElementById("left").value = " ";
    document.getElementById("middle").value = " ";
    document.getElementById("right").value = " ";
    document.getElementById("bot-left").value = " ";
    document.getElementById("bot-middle").value = " ";
    document.getElementById("bot-right").value = " ";

    document.getElementById("top-left").disabled = false;
    document.getElementById("top-middle").disabled = false;
    document.getElementById("top-right").disabled = false;
    document.getElementById("left").disabled = false;
    document.getElementById("middle").disabled = false;
    document.getElementById("right").disabled = false;
    document.getElementById("bot-left").disabled = false;
    document.getElementById("bot-middle").disabled = false;
    document.getElementById("bot-right").disabled = false;

    
    document.getElementById('playerXScore').innerHTML = playerXScore;
    document.getElementById('playerOScore').innerHTML = playerOScore;

    switchPlayer = !switchPlayer;

    if(switchPlayer)
    {
        player=1;
        whoIsPlaying();
    }
    else
    {
        player=0;
        whoIsPlaying();
    }
}


/* TOP ROW FUNCTIONS */

function drawTopLeft() {
    if (player == 0) {
        document.getElementById("top-left").value = "X";
        document.getElementById("top-left").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("top-left").value = "O";
        document.getElementById("top-left").disabled = true;
        player = 0;
    }
}

function drawTopMiddle() {
    if (player == 0) {
        document.getElementById("top-middle").value = "X";
        document.getElementById("top-middle").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("top-middle").value = "O";
        document.getElementById("top-middle").disabled = true;
        player = 0;
    }
}

function drawTopRight() {
    if (player == 0) {
        document.getElementById("top-right").value = "X";
        document.getElementById("top-right").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("top-right").value = "O";
        document.getElementById("top-right").disabled = true;
        player = 0;
    }
}

/* MIDDLE ROW FUNCTIONS */

function drawLeft() {
    if (player == 0) {
        document.getElementById("left").value = "X";
        document.getElementById("left").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("left").value = "O";
        document.getElementById("left").disabled = true;
        player = 0;
    }
}

function drawMiddle() {
    if (player == 0) {
        document.getElementById("middle").value = "X";
        document.getElementById("middle").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("middle").value = "O";
        document.getElementById("middle").disabled = true;
        player = 0;
    }
}

function drawRight() {
    if (player == 0) {
        document.getElementById("right").value = "X";
        document.getElementById("right").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("right").value = "O";
        document.getElementById("right").disabled = true;
        player = 0;
    }
}

/* BOTTOM ROW FUNCTIONS */

function drawBotLeft() {
    if (player == 0) {
        document.getElementById("bot-left").value = "X";
        document.getElementById("bot-left").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("bot-left").value = "O";
        document.getElementById("bot-left").disabled = true;
        player = 0;
    }
}

function drawBotMiddle() {
    if (player == 0) {
        document.getElementById("bot-middle").value = "X";
        document.getElementById("bot-middle").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("bot-middle").value = "O";
        document.getElementById("bot-middle").disabled = true;
        player = 0;
    }
}

function drawBotRight() {
    if (player == 0) {
        document.getElementById("bot-right").value = "X";
        document.getElementById("bot-right").disabled = true;
        player = 1;
    }
    else {
        document.getElementById("bot-right").value = "O";
        document.getElementById("bot-right").disabled = true;
        player = 0;
    }
}