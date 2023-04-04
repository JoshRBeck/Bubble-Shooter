const game = new Game();
// Load game assets
function preload() {
  game.preload();
}
// Set up Game
function setup() {
  createCanvas(1000, 600);
}
//Draw the game
function draw() {
  game.draw();
}
