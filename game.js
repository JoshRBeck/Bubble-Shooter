class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.enemies = [];
    this.backgroundImages;
    this.playerImage;
    this.bullet;
    this.enemiesImage;
    this.eliminatedEnemies = [];
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
    //This creates enemies every 90 frames and stores them in an array
    if (frameCount % 90 === 0) {
      this.enemies.push(new Enemies(this.enemiesImage));
    }
    //This will take an enemy from previous array and draws them onto the game level
    this.enemies.forEach(function (enemies) {
      enemies.draw();
    });
    //This is a function that represents if an enemy collides with a player shot bullet, remove from the game board
    // and place into a seperate array called eliminated enemies
    // this.eliminatedEnemies = this.enemies.filter(this.enemies => {
    // 	if (this.enemies.collision(this.bullet)) {
    // 		return false
    // 	} else {
    // 		return true
    // 	}
    // })
  }
}
