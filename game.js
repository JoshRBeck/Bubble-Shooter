class Game {
  constructor() {
    this.player = new Player();
    this.background = new background();
    this.playerImage;
  }
  preload() {
    this.backgroundImages = [
      { src: loadImage("./Assets/Background Image.jpg"), x: 0, speed: 0 },
      { src: loadImage("./Assets/Background Image.jpg"), x: 0, speed: 1 },
      { src: loadImage("./Assets/Background Image.jpg"), x: 0, speed: 2 },
    ];
    this.playerImage = loadImage("./Assets/Player SpaceShip.jpg");
    this.enemiesImage = [
      { src: loadImage("./Assets/Enemy Ship.png") },
      { src: loadImage("./Assets/Enemy Ship 2.png") },
    ];
  }
  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.enemiesImage.draw();
  }
}
