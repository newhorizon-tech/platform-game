export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });

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
      fill: "yellow",
      align: 'center'
    });

    text.stroke = "#de77ae";
    text.strokeThickness = 16;
    text.setShadow(2, 2, "#333333", 2, true, false);



    let textContainer = this.add.container(0, 0);

    textContainer.add(text).setSize(200,200);


    textContainer.setInteractive();


        this.input.on('gameobjectdown', (e) => {
            console.log("Scene change")
            this.scene.start('Scene1');

        });




    //
    // textContainer.add(text);
    //
    //
    // textContainer.setVelocity(100, 200);
    // textContainer.setBounce(1, 1);
    // textContainer.setCollideWorldBounds(true);

    emitter.startFollow(text);
  }

}
