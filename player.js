class Player {
  constructor() {
    this.x = 0;
    this.y = 100;
    this.width = 140;
    this.height = 120;
    this.score = 0;
  }
  draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
    image(game.bulletImage, 120, this.y * 1.4, 90, 40);
  }
  moveUp() {
    this.y -= 20;
  }
  moveDown() {
    this.y += 20;
  }
  moveRight() {
    this.x += 20;
  }
  moveLeft() {
    this.x -= 20;
  }
  shoot() {
    this.bulletImage;
  }
}
