import Phaser from 'phaser'

import {Scene1} from './scenes/scene-1'
import {Scene2} from './scenes/scene-2'


var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: [Scene2, Scene1]
};

var game = new Phaser.Game(config);
