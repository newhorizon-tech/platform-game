export class TitleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "TitleScene"
    });

  }


  preload() {
    this.load.image('play', '/assets/play-button.png');


  }
  create() {


    let text = this.add.text(100, 100, "Koala Run", {
      font: 'bold 60pt Arial',
      fill: "yellow",
      align: 'center'
    });

    text.stroke = "#de77ae";
    text.strokeThickness = 16;
    text.setShadow(2, 2, "#333333", 2, true, false);


    const playButton = this.add.image(300, 300, 'play');


    playButton.setInteractive();


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

    // emitter.startFollow(text);
  }

}
