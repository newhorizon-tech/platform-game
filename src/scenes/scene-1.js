import {gameOptions} from './gameOptions'

export class Scene1 extends Phaser.Scene {

  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('boat', 'assets/boat.jpg');
    this.load.image('koala_idle', 'assets/koala_idle.png');
    this.load.image('background', 'assets/background_tilemap.png');

  }


  async create() {
    this.add.text(200, 200, 'Koala!', {
      fill: 'white'
    });
    this.add.image(400, 300, 'koala_idle');

    // await new Promise(r => setTimeout(r, 5000));

  }
}
