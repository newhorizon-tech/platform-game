import Phaser from 'phaser'

import {Scene1} from './scenes/scene-1'
import {Scene2} from './scenes/scene-2'



var config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    backgroundColor: 0x0000CD,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: [Scene1, Scene2]
};

let game = new Phaser.Game(config);
