class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.backgroundImages;
    this.playerImage;
    this.bulletImage;
  }
  preload() {
    this.backgroundImages = loadImage("./Assets/BackgroundImage.jpg");
    //  [
    //   { src: loadImage("./Assets/Background Image.jpg"), x: 0, speed: 0 },
    //   { src: loadImage("./Assets/Background Image.jpg"), x: 0, speed: 1 },
    //   { src: loadImage("./Assets/Background Image.jpg"), x: 0, speed: 2 },
    // ];
    this.playerImage = loadImage("./Assets/PlayerShip2.png");
    this.enemiesImage = [
      { src: loadImage("./Assets/Enemy Ship.png") },
      { src: loadImage("./Assets/Enemy Ship 2.png") },
    ];
    this.bulletImage = loadImage("./Assets/GreenLaser.png");
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.bulletImage.draw();
    // this.enemiesImage.draw();
  }
}
