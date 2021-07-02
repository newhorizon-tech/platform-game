import {
  gameOptions
} from './gameOptions'

export class Scene1 extends Phaser.Scene {

  constructor() {
    super("Scene1");
  }

  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.atlas('player', 'assets/koala/koala.png', 'assets/koala/koala_atlas.json');
    this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
    this.load.tilemapTiledJSON('tilemap', 'assets/tilemaps/game.json')

  }


  async create() {
    const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    const map = this.make.tilemap({
      key: 'tilemap'
    })
    const tileset = map.addTilesetImage('koala_tileset', 'tiles')

    const platform = map.createLayer('platform', tileset, 0, 0);
    platform.setCollisionByExclusion(-1, true);

    this.player = this.physics.add.sprite(100, 100, 'player')
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, platform);

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'koala_player',
        start: 2,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: [{
        key: 'player',
        frame: 'koala_player_0'
      }],
      frameRate: 10,
    });



    // await new Promise(r => setTimeout(r, 5000));

  }
}
