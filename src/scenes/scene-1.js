export class Scene1 extends Phaser.Scene {

  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('boat', 'assets/boat.jpg');
  }


  async create() {
    this.add.text(100, 100, 'Scene One!', {
      fill: 'purple'
    });
    this.add.image(400, 300, 'boat');
    await new Promise(r => setTimeout(r, 5000));

    this.scene.start("Scene2")
  }
}
