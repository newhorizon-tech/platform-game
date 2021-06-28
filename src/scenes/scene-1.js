import {gameOptions} from './gameOptions'

export class Scene1 extends Phaser.Scene {

  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('koala_idle', 'assets/koala_idle.png');
    this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
    this.load.tilemapTiledJSON('tilemap','assets/tilemaps/game.json')

  }


  async create() {
    const backgroundImage = this.add.image(0, 0,'background').setOrigin(0, 0);
    const map = this.make.tilemap({ key: 'tilemap'})
    const tileset = map.addTilesetImage('koala_tileset','tiles', 64, 64)
    const player = this.physics.add.sprite(100,100,'koala_idle')

    // this.add.image(400, 300, 'koala_idle');
    // this.add.image

    // await new Promise(r => setTimeout(r, 5000));

  }
}
