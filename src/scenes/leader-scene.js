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

  async create() {
    let text = this.add.text(50, 50, 'Leaderboard', {
      font: 'bold 30pt Arial',
      fill: 'yellow',
      align: 'center',
    });

    const scores = await getScores();
    scores.forEach((score) => {
      text = this.add.text(50, text.y + 50, `${score.user}: ${score.score}`, {
        font: 'bold 10pt Arial',
        fill: 'yellow',
        align: 'center',
      });
    });
  }
}
