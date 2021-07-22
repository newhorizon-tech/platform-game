import Phaser from 'phaser'

import {TitleScene} from './scenes/title'
import {Scene1} from './scenes/scene-1'



var config = {
    type: Phaser.AUTO,
    width: 896,
    height: 448,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [TitleScene, Scene1]
};

let game = new Phaser.Game(config);
