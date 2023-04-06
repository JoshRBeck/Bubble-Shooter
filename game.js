class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemies = [];
    this.backgroundImages;
    this.playerImage;
    this.enemiesImage;
  }
  preload() {
    this.backgroundImages = loadImage("./Assets/BackgroundImage.jpg");
    this.playerImage = loadImage("./Assets/PlayerShip2.png");
    this.bulletImage = loadImage("./Assets/GreenLaser.png");
    this.enemiesImage = loadImage("./Assets/EnemyShip.png");
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    //This creates enemies every 50 frames and stores them in an array
    if (frameCount % 50 === 0) {
      this.enemies.push(new Enemies(this.enemiesImage));
    }
    //This will take an enemy from previous array and draws them onto the game level
    this.enemies.forEach(function (enemies) {
      enemies.draw();
    });
    for (let i = 0; i < this.enemies.length; i++) {
      for (let j = 0; j < this.player.bullets.length; j++) {
        const enemy = this.enemies[i];
        if (enemy.collision(this.player.bullets[j])) {
          // Increase score by 100
          this.player.score += 100;
          document.querySelector("span").innerHTML = this.player.score;
          // Remove bullet
          this.player.bullets.splice(j, 1);
          // Remove enemy
          this.enemies.splice(i, 1);
          // Exit loop, because bullet can only hit one enemy
          break;
        }
      }
    }
    for (let w = 0; w < this.enemies.length; w++) {
      const enemy = this.enemies[w];
      if (enemy.touch(this.player)) {
        noLoop();
        text("GAME OVER", windowHeight / 2, windowWidth / 2);
        textSize(400);
        textAlign(CENTER, CENTER);
      }
    }
    this.player.checkWinningCondition();
  }
}

