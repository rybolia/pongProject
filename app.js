let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Left Paddle
ctx.fillStyle = "white";
ctx.fillRect(10, 265, 10, 75);
// Right Paddle
ctx.fillStyle = "white";
ctx.fillRect(780, 265, 10, 75);

// Pong ball
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(400, 300, 7, 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();

// Middle Line
// setLineDash, separation size of space between lines
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.setLineDash([10]);
ctx.moveTo(400, 0);
ctx.lineTo(400, 600);
ctx.stroke();
ctx.closePath();

// Player1's x and y coordinates
let playerOneX = 0;
let playerOneY = 0;

// Add event handler to record arrow key presses
document.body.addEventListener('keydown', function (e) {
    let key = e.code;

    if (key == "ArrowUp") {
        console.log("UP ARROW KEY");
    } else if (key == "ArrowDown") {
        console.log("DOWN ARROW KEY");
    }
})