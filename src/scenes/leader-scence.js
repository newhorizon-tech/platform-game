import Phaser from 'phaser';

import { getScores } from '../lib/leaderboard';

export default class Leader extends Phaser.Scene {
  constructor() {
    super({
      key: 'leader',
    });
  }

  preload() {
    this.load.image('play', '/assets/play-button.png');
  }

  create() {
    const text = this.add.text(50, 50, 'Leaderboard', {
      font: 'bold 30pt Arial',
      fill: 'yellow',
      align: 'center',
    });

    text.stroke = '#de77ae';
    text.strokeThickness = 16;
    text.setShadow(2, 2, '#333333', 2, true, false);

    const Button = playButton.setInteractive();

    this.input.on('gameobjectdown', async () => {
      getScores();
      this.scene.start('Scene1');
    });
  }
}
