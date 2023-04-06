class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemies = [];
    this.backgroundImages;
    this.playerImage;
    this.bullet;
    this.enemiesImage;
  }
  preload() {
    this.backgroundImages = loadImage("./Assets/BackgroundImage.jpg");
    this.playerImage = loadImage("./Assets/PlayerShip2.png");
    this.bulletImage = loadImage("./Assets/GreenLaser.png");
    this.enemiesImage = loadImage("./Assets/EnemyShip.png");
    // [
    //   { src: loadImage("./Assets/EnemyShip.png") },
    //   { src: loadImage("./Assets/EnemyShip2.png") },
    // ];
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    if (frameCount % 90 === 0) {
      this.enemies.push(new Enemies(this.enemiesImage));
    }
    this.enemies.forEach(function (enemies) {
      enemies.draw();
    });
  }
}
