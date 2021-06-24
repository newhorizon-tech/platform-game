import {gameOptions} from './gameOptions'

export class Scene1 extends Phaser.Scene {

  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('boat', 'assets/boat.jpg');
    this.load.image('koala_idle', 'assets/koala_idle.png');
    this.load.image('tiles', 'assets/tiles.png');
    this.load.tilemapTiledJSON('tilemap','assets/tileset.json')

  }


  async create() {

    const map = this.make.tilemap({ key: 'tilemap'})
    const tileset = map.addTilesetImage('JumpingKoala','tiles', 16, 16)
    const player = this.physics.add.sprite(100,100,'koala_idle')

    // this.add.image(400, 300, 'koala_idle');
    // this.add.image

    // await new Promise(r => setTimeout(r, 5000));

  }
}
