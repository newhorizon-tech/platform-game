import Phaser from 'phaser';

import TitleScene from './scenes/title';
import Scene1 from './scenes/scene-1';

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#4488aa',
  height: 600,
  width: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
      },
    },
  },
  scene: [TitleScene, Scene1],
};

const game = new Phaser.Game(config);
game.load.crossOrigin = true;
