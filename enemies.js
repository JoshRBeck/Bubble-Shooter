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
  collision(bullet) {
    // Get the middle of the enemies
    let EnemiesX = this.x + this.width / 2;
    let EnemiesY = this.y + this.height / 2;
    // Get the middle of the bullet
    let bulletX = bullet.x + bullet.width / 2;
    let bulletY = bullet.y + bullet.height / 2;
    // dist(x1, y1, x2, y2) returns the distance between the objects
    if (dist(EnemiesX, EnemiesY, bulletX, bulletY) > 25) {
      return false;
    } else {
      // Increment the score
      player.score += 100;
      // Update score in DOM
      document.querySelector("#score span").innerText = player.score;
      return true;
    }
  }
}
