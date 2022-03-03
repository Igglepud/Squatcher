// set game configuration
var isMobile = navigator.userAgent.indexOf("Mobile");
var w = 1600;
var h = 900;


window.onload = function() {
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    };
    
    if (isMobile != -1) {
        w = window.innerWidth;
        h = window.innerHeight;
    };
};
let config = {
    type: Phaser.WEBGL,
    width: w,
    height: h,
    scene: [preloadScene, titleScene, gameScene, gameoverScene,forestHuntScene,drivingScene],
    pixelArt: false,
    mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1000},
            debug: true,
        }
    },


        
};


//create new game and send configuration
let game = new Phaser.Game(config)