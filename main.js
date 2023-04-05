const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Resize canvas to viewport
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//Draw the game
function draw() {
  game.draw();
  // if (frameCount % 90 === 0) {
  //   this.enemies.push(new Enemies(this.enemiesImage));
  // }
  // this.enemies.forEach(function (enemies) {
  //   enemies.draw();
  // });
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
