class Enemies {
  constructor() {
    this.x = windowWidth;
    this.y = 100 + Math.floor(Math.random() * windowHeight + 1);
    this.width = 140;
    this.height = 100;
    this.velocity = 2;
  }
  draw() {
    image(game.enemiesImage, this.x, this.y, this.width, this.height);
    this.x -= this.velocity;
  }
  update() {
    this.x -= 20;
  }
  collision(bulletInfo) {
    // Get the middle of the enemies
    let EnemiesX = this.x + this.width / 2;
    let EnemiesY = this.y + this.height / 2;
    // Get the middle of the bullet
    let bulletX = bulletInfo.x + bulletInfo.width / 2;
    let bulletY = bulletInfo.y + bulletInfo.height / 2;
    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(EnemiesX, EnemiesY, bulletX, bulletY) >= 25) {
      return false;
    } else {
      return true;
    }
  }
  touch(playerInfo) {
    let EnemiesX = this.x + this.width / 2;
    let EnemiesY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;
    if (dist(EnemiesX, EnemiesY, playerX, playerY) >= 25) {
      return false;
    } else {
      fill(230, 184, 0);
      text("GAME OVER!!!", windowHeight / 2, windowWidth / 2);
      textSize(windowWidth / 3);
      textAlign(CENTER, CENTER);
      noLoop();
      return true;
    }
  }
}
