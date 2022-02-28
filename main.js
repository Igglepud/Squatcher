// set game configuration



let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    scene: [preloadScene, titleScene, gameScene, gameoverScene,forestHuntScene,drivingScene],
    pixelArt: false,
    mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1000},
            //debug: true,
        }
    },


        
};


//create new game and send configuration
let game = new Phaser.Game(config)