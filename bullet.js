class Bullet {
  constructor(player) {
    this.image = image;
    this.x = player.x;
    this.y = player.y;
    this.width = 40;
    this.height = 20;
    this.velocity = 2;
  }
  draw() {
    image(game.bulletImage, this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += 5;
  }
}
