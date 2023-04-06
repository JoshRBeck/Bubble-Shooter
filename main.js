let game = new Game();
let start = "Start";
let mode = start;
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(windowWidth, windowHeight);
  start = createButton("Start Game");
  start.position(windowHeight / 2, windowWidth / 2);
}
// Resize canvas to viewport
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// Start screen
function startScreen() {
  textSize(36);
  Text("START GAME", windowWidth / 2, windowHeight / 2);
}
//Draw the game
function draw() {
  game.draw();
  if (mode === start) {
    startScreen();
  } else if (mode === game) {
    new Game();
  }
}
function mousePressed() {
  if (mode === start) {
    game();
  }
}
//Designate the key functions to move and shoot
function keyPressed() {
  if (keyCode === UP_ARROW) {
    game.player.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    game.player.moveDown();
  }
  if (keyCode === RIGHT_ARROW) {
    game.player.moveRight();
  }
  if (keyCode === LEFT_ARROW) {
    game.player.moveLeft();
  }
  if (keyCode === ENTER) {
    game.player.shoot();
  }
}
