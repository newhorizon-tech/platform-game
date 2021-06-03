import Phaser from 'phaser'

import {Scene1} from './scenes/scene-1'
import {Scene2} from './scenes/scene-2'



let gameConfig = {
    type: Phaser.AUTO,
    width: 1334,
    height: 750,
    scene: Scene1,
    backgroundColor: 0x0000CD,

    // physics settings
    physics: {
        default: "arcade"
    },
}

// var config = {
//     type: Phaser.AUTO,
//     width: 900,
//     height: 700,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 400 }
//         }
//     },
//     scene: [Scene2, Scene1]
// };

let game = new Phaser.Game(gameConfig);
