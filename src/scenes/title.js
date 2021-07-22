export class TitleScene extends Phaser.Scene {
  constructor() {
    super("titlescene");
  }


  preload() {
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }
  create() {
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
      speed: 100,
      scale: {
        start: 1,
        end: 0
      },
      blendMode: 'ADD'
    });

    let text = this.add.text(200, 100, "Koala Run", {
      font: 'bold 60pt Arial',
      fill: "#8888FF",
      align: 'center'
    });

    text.stroke = "#de77ae";
    text.strokeThickness = 16;
    text.setShadow(2, 2, "#333333", 2, true, false);


    let textSprite = this.add.sprite();
    textSprite.addChild(text);
    this.physics.enable(textSprite, Phaser.Physics.ARCADE);


    textSprite.setVelocity(100, 200);
    textSprite.setBounce(1, 1);
    textSprite.setCollideWorldBounds(true);

    emitter.startFollow(textSprite);
  }
}
