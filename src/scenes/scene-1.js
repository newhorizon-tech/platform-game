import Phaser from 'phaser';
// import gameOptions from './gameOptions';

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({
      key: 'Scene1',
    });
  }

  preload() {
    this.load.image('background', 'assets/background.png');
    this.load.atlas('player', 'assets/koala/koala.png', 'assets/koala/koala_atlas.json');
    this.load.image('tiles', 'assets/tilesets/platformPack_tilesheet.png');
    this.load.tilemapTiledJSON('tilemap', 'assets/tilemaps/game.json');
    this.load.image('star', 'assets/star.png');
  }

  create() {
    let collects = 0;
    // const {
    //   width,
    //   height,
    // } = this.scale;

    const map = this.make.tilemap({
      key: 'tilemap',
    });
    const tileset = map.addTilesetImage('koala_tileset', 'tiles');

    const platform = map.createLayer('platform', tileset);
    map.createLayer('obstacles', tileset);

    map.createLayer('door', tileset);

    platform.setCollisionByExclusion(-1, true);

    this.player = this.physics.add.sprite(120, 50, 'player');
    this.player.setBounce(0.1);
    this.physics.add.collider(this.player, platform);

    // Camera will follow the Koala
    this.cameras.main.startFollow(this.player);

    // Player animations

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'koala_walk0',
        start: 1,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'idle',
      frames: [{
        key: 'player',
        frame: 'koala_idle',
      }],
      frameRate: 10,
    });

    this.anims.create({
      key: 'jump',
      frames: [{
        key: 'player',
        frame: 'koala_jump',
      }],
      frameRate: 10,
    });

    // Sprite groups

    // Spikes
    this.spikes = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });

    // Stars
    this.stars = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });

    const starObjectLayer = map.getObjectLayer('stars-objects');

    const starObjects = starObjectLayer.objects;

    //

    // Retrieving star objects
    starObjects.forEach((starObject) => {
      this.stars.create(starObject.x + 6, starObject.y - 16, 'star');
    });

    // starSprites

    map.createFromObjects('stars-objects', 37, 'star', 0, true, false, this.stars);

    const collectStar = (player, star) => {
      star.disableBody(true, true);
      collects += 1;
    };

    this.physics.add.collider(this.player, this.stars, collectStar, null, this);

    // Handling spikes

    const objectLayer = map.getObjectLayer('objects');
    const {
      objects,
    } = objectLayer;

    // Retrieving spike objects
    objects.forEach((object) => {
      this.spikes.create(object.x + 16, object.y - 32, 'spike').setOrigin(0, 0);
    });

    const playerHit = (player) => {
      this.add.text(this.player.x - 64, this.player.y, `Score: ${collects}`, {
        fontSize: '32px',
      });

      player.setVelocity(0, 0);
      player.setX(this.player.x - 20);
      player.setY(this.player.y - 20);
      player.play('idle', true);
      player.setAlpha(0);
      this.tweens.add({
        targets: player,
        alpha: 1,
        duration: 100,
        ease: 'Linear',
        repeat: 5,
      });

      this.scene.pause();
    };

    this.physics.add.collider(this.player, this.spikes, playerHit, null, this);
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
