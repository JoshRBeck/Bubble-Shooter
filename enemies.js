class Enemies {
  constructor() {
    this.x = windowWidth;
    this.y = Math.floor(Math.random() * windowHeight + 1);
    this.width = 140;
    this.height = 100;
    this.velocity = 2;
  }
  draw() {
    image(game.enemiesImage, this.x, this.y, this.width, this.height);
    this.x -= this.velocity;
  }
  update() {
    this.x -= 10;
  }
}
