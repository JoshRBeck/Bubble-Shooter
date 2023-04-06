class Player {
  constructor() {
    this.x = 0;
    this.y = 200;
    this.width = 90;
    this.height = 80;
    this.score = 0;
    this.bullets = [];
  }
  draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height);
    this.bullets.forEach((bullet) => {
      bullet.draw();
      bullet.update();
    });
    // image(game.bulletImage, this.x + 80, this.y + 15, 90, 40);
  }
  moveUp() {
    if (this.y >= this.height - 50) {
      this.y -= 30;
    }
  }
  moveDown() {
    if (this.y <= this.height + 400) {
      this.y += 30;
    }
  }
  moveRight() {
    if (this.x <= this.width + 1150) {
      this.x += 30;
    }
  }
  moveLeft() {
    if (this.x >= this.width - 80) {
      this.x -= 30;
    }
  }
  shoot() {
    let bullet = new Bullet(this);
    this.bullets.push(bullet);
    bullet.update();
    // if (keyPressed === true) {
    //   game.bulletImage.draw();
    // }
  }
}
