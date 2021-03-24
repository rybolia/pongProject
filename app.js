let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Player1's x and y coordinates
let leftPaddleX = 10;
let leftPaddleY = 265;

// Player2's x and y coordinates
let rightPaddleX = 780;
let rightPaddleY = 265;

// Height and Weight of both paddles
let paddleWidth = 10;
let paddleHeight = 75;

let UpArrowPressed = false;
let DownArrowPressed = false;
let wKeyIsPressed = false;
let sKeyIsPressed = false;

function drawLeftPaddle() {
    // Left Paddle
    ctx.fillStyle = "white";
    ctx.fillRect(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight);
}

function drawRightPaddle() {
    // Right Paddle
    ctx.fillStyle = "white";
    ctx.fillRect(rightPaddleX, rightPaddleY, paddleWidth, paddleHeight);
}

function drawBall() {
    // Pong ball
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(400, 300, 7, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}

function drawMidLine() {
    // Middle Line
    // setLineDash, separation size of space between lines
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.setLineDash([10]);
    ctx.moveTo(c.width / 2, 0);
    ctx.lineTo(c.width / 2, c.height);
    ctx.stroke();
    ctx.closePath();
}

function updateCanvas() {
    // draw the canvas every 20 milliseconds
    ctx.clearRect(0, 0, c.width, c.height);
    drawLeftPaddle();
    drawRightPaddle();
    drawMidLine();
    drawBall();

    // Add event handler to record arrow key presses
    window.addEventListener('keydown', function (e) {
        let key = e.code;

        if (key == "KeyW") {
            wKeyIsPressed = true;
        } else if (key == "KeyS") {
            sKeyIsPressed = true;
        } else if (key == "ArrowUp") {
            UpArrowPressed = true;
        } else if (key == "ArrowDown") {
            DownArrowPressed = true;
        }
    })

    window.addEventListener('keyup', function (e) {
        let key = e.code;

        if (key == "KeyW") {
            wKeyIsPressed = false;
        } else if (key == "KeyS") {
            sKeyIsPressed = false;
        } else if (key == "ArrowUp") {
            UpArrowPressed = false;
        } else if (key == "ArrowDown") {
            DownArrowPressed = false;
        }
    })

    if (wKeyIsPressed) {
        leftPaddleY -= 7;
        if (leftPaddleY < 0) {
            leftPaddleY = 0;
        }
    } else if (sKeyIsPressed) {
        leftPaddleY += 7;
        if (leftPaddleY + paddleHeight > c.height) {
            leftPaddleY = c.height - paddleHeight;
        }
    } else if (UpArrowPressed) {
        rightPaddleY -= 7;
        if (rightPaddleY < 0) {
            rightPaddleY = 0;
        }
    } else if (DownArrowPressed) {
        rightPaddleY += 7;
        if (rightPaddleY + paddleHeight > c.height) {
            rightPaddleY = c.height - paddleHeight;
        }
    }
}
setInterval(updateCanvas, 20);