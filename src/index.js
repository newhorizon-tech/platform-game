import Phaser from 'phaser'

import {Scene1} from './scenes/scene-1'
import {Scene2} from './scenes/scene-2'



var config = {
    type: Phaser.AUTO,
    width: 896,
    height: 448,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: true
        }
    },
    scene: [Scene1, Scene2]
};

let game = new Phaser.Game(config);
