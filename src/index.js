import Phaser from 'phaser'

import {
  TitleScene
} from './scenes/title'
import {
  Scene1
} from './scenes/scene-1'



var config = {
  type: Phaser.AUTO,
  backgroundColor: '#4488aa',
  height: 600,
  width: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300
      },
      debug: true
    }
  },
  scene: [Scene1]
};

let game = new Phaser.Game(config);
