const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(windowWidth, windowHeight);
}
//Draw the game
function draw() {
  game.draw();
}
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
