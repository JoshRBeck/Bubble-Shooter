class Bullet {
  constructor(player) {
    this.image = image;
    this.x = player.x + player.width - 12;
    this.y = player.y + player.height / 2.6;
    this.width = 60;
    this.height = 20;
    this.velocity = 2;
  }
  draw() {
    image(game.bulletImage, this.x, this.y, this.width, this.height);
  }
  update() {
    this.x += 10;
  }
}
