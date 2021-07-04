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


  create() {
    const backgroundImage = this.add.image(0, 0, 'background').setOrigin(0, 0);
    const map = this.make.tilemap({
      key: 'tilemap'
    })
    const tileset = map.addTilesetImage('koala_tileset', 'tiles')

    const platform = map.createLayer('platform', tileset, 0, 0);
    const obsctacles = map.createLayer('obstacles', tileset, 0, 0);

    platform.setCollisionByExclusion(-1, true);

    this.player = this.physics.add.sprite(100, 100, 'player')
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, platform);

    //Player animations

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'koala_walk0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: [{
        key: 'player',
        frame: 'koala_idle'
      }],
      frameRate: 10,
    });

    this.anims.create({
      key: 'jump',
      frames: [{
        key: 'player',
        frame: 'koala_jump'
      }],
      frameRate: 10,
    });

    // Create a sprite group for all spikes, set common properties to ensure that
    // sprites in the group don't move via gravity or by player collisions
    this.spikes = this.physics.add.group({
      allowGravity: false,
      immovable: true
    });

    const objectLayer = map.getObjectLayer('objects');

    // const spikobjectLayer.objects['spikes']

    // Let's get the spike objects, these are NOT sprites
    const spikeObjects = objectLayer.objects["spikes"]
    console.log(spikeObjects);
  //
  //   // Now we create spikes in our sprite group for each object in our map
    spikeObjects.forEach(spikeObject => {
      // Add new spikes to our sprite group, change the start y position to meet the platform
      const spike = this.spikes.create(spikeObject.x, spikeObject.y + 200 - spikeObject.height, 'spike').setOrigin(0, 0);
    });
  //
  //
  //
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
    } else {
      this.player.setVelocityX(0);
      if (this.player.body.onFloor()) {
        this.player.play('idle', true);
      }
    }

    if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
      this.player.setVelocityY(-350);
      this.player.play('jump', true);
    }

    // Flipped movement

    if (this.player.body.velocity.x > 0) {
      this.player.setFlipX(false);
    } else if (this.player.body.velocity.x < 0) {
      this.player.setFlipX(true);
    }


  }



}
