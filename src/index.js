import Phaser from 'phaser'

import {Scene1} from './scenes/scene-1'
import {Scene2} from './scenes/scene-2'


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Scene1, Scene2]
};

var game = new Phaser.Game(config);
