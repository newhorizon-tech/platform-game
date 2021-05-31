export class Scene3 extends Phaser.Scene {

  constructor() {
    super("Scene3");
  }

  preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
  }


  async create() {
    this.add.text(100, 100, 'Scene Three!', {
      fill: 'purple'
    });
    this.add.image(400, 300, 'sky');
    await new Promise(r => setTimeout(r, 5000));

    this.scene.start("Scene3")
  }
}
