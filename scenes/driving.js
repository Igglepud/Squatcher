
let drivingScene = new Phaser.Scene('Driving');

drivingScene.init = function(){
    this.gameW = this.sys.game.config.width;
    this.gameH = this.sys.game.config.height;
    this.iggleLoad=iggleLoadCopySpriteAtlas;
    this.iggleAnimations=iggleAnimations;
    this.loadingScreen=iggleLoadingScreen;
};

drivingScene.preload = function(){
   this.load.image('truck',['assets/sprites/vehicles/car10.png','assets/sprites/vehicles/car10_n.png']);
   this.load.image('truckback',['assets/sprites/vehicles/car10part2.png','assets/sprites/vehicles/car10part2_n.png']);
this.iggleLoad('hunter','assets/sprites/');
this.load.image('chickenLeg',['assets/sprites/items/chicken_leg.png','assets/sprites/items/chicken_leg_n.png'])
this.load.atlas('wheels',['assets/sprites/vehicles/wheels1.png','assets/sprites/vehicles/wheels1_n.png'], 'assets/sprites/vehicles/wheels1.json');

this.load.image('sky', ['assets/backgrounds/driving/desert/sky.png','assets/backgrounds/driving/desert/sky_n.png']);
this.load.image('bg1',['assets/backgrounds/driving/desert/bg1.png','assets/backgrounds/driving/desert/bg1_n.png']);
this.load.image('bg2',['assets/backgrounds/driving/desert/bg2.png','assets/backgrounds/driving/desert/bg2_n.png']);
this.load.image('bg3',['assets/backgrounds/driving/desert/bg3.png','assets/backgrounds/driving/desert/bg3_n.png']);
this.load.image('bg4',['assets/backgrounds/driving/desert/bg4.png','assets/backgrounds/driving/desert/bg4_n.png']);
this.load.image('bg1',['assets/backgrounds/driving/desert/bg5.png','assets/backgrounds/driving/desert/bg5_n.png']);
this.load.image('bg6',['assets/backgrounds/driving/desert/bg6.png','assets/backgrounds/driving/desert/bg6_n.png']);
this.loadingScreen('Loading your drive through the desert...');
this.load.image('streetLine','assets/backgrounds/driving/desert/streetLine.png')
};

drivingScene.create = function(){
  //create truck and driver
    this.truck=this.add.sprite(this.gameW/2-300,this.gameH/2+200, 'truck').setPipeline('Light2D');
    this.truckback=this.add.sprite(this.truck.x-126,this.truck.y-28,'truckback').setPipeline('Light2D');
    this.iggleAnimations('hunter');
    this.leftWheel=this.add.sprite(this.truck.x-130,this.truck.y+100,'wheels','wheel_2').setPipeline('Light2D');
    this.rightWheel=this.add.sprite(this.truck.x+130,this.truck.y+100,'wheels','wheel_2').setPipeline('Light2D');
    this.truck.depth=10;
    this.truckback.depth=8;
    this.leftWheel.depth=11;
    this.rightWheel.depth=11;
    this.hunter=this.add.sprite(this.truck.x+5,this.truck.y-35,'hunter').play('hunterIdleSide').setPipeline('Light2D');
    this.hunter.flipX=true;
    this.hunter.setScale(.4);
    this.hunter.depth=7;
this.hunterArm=this.add.sprite(this.hunter.x,this.hunter.y,'hunterRifle','rifle_1').setPipeline('Light2D');
this.hunterArm.depth=9;
this.hunterArm.flipX=true;
this.hunterArm.setScale(.4);
this.chickenLeg=this.add.sprite(this.hunterArm.x,this.hunterArm.y,'chickenLeg').setScale(.15).setPipeline('Light2D').setDepth(8).setAngle(180).setPosition(this.hunterArm.x+20, this.hunterArm.y+10);

    
    //create backgrounds
    this.sky=this.add.tileSprite(0,this.gameH/2-200, 5*4093, 1*2894,'sky').setDepth(-99).setScale(.3).setPipeline('Light2D');


    this.lights.enable().setAmbientColor('0x000000');
    this.sun=this.lights.addLight(this.truck.x-Phaser.Math.Between(300,1000),Phaser.Math.Between(0,this.gameH/2),1000000000000).setColor(0xffffff).setIntensity(Phaser.Math.Between(1,2));
    this.bg1 = this.add.tileSprite(0,this.gameH-50, 5*4093, 1*1340, 'bg1').setScale(.25).setDepth(6).setPipeline('Light2D') ; 
    this.bg2 = this.add.tileSprite(0,this.gameH-200, 5*3403, 1*2046, 'bg2').setScale(.25).setDepth(5).setPipeline('Light2D') ; 
    this.bg3 = this.add.tileSprite(0,this.gameH-400, 5*7265, 1*2446, 'bg3').setScale(.25).setDepth(4).setPipeline('Light2D') ; 

   
  
    // this.truckTween=this.tweens.add({
    //     targets: [ this.truck, ],
    //     x: {

    //         getEnd: function (target, key, value)
    //         {
    //             return value + Phaser.Math.Between(-15, 15);
    //         }

    //     },
    //     y: {

    //         getEnd: function (target, key, value)
    //         {
    //             return value + Phaser.Math.Between(-15, 15);
    //         }

    //     },
    //     angle:{
    //         getEnd: function (target, key, value)
    //         {
    //             return value + Phaser.Math.Between(-45, 45);
    //         }
    //     },
    //     ease: 'Power1',
    //     duration: 35,
    //     yoyo: true,
    //     repeat: -1
    // });
    // this.truckBackTween=this.tweens.add({
    //     targets: [ this.truckback, ],
    //     x: this.truck.x-126,
    //     y: this.truck.y-28,
    //     angle:this.truck.angle,
    //     ease: 'Power1',
    //     duration: 35,
    //     yoyo: true,
    //     repeat: -1
    // });
    // this.wheelsTween=this.tweens.add({
    //     targets: [ this.leftWheel,this.rightWheel ],
    //     x: {

    //         getEnd: function (target, key, value)
    //         {
    //             return value + Phaser.Math.Between(-15, 15);
    //         }

    //     },
    //     y: {

    //         getEnd: function (target, key, value)
    //         {
    //             return value + Phaser.Math.Between(-15, 0);
    //         }

    //     },
    //     ease: 'Power1',
    //     duration: 35,
    //     yoyo: true,
    //     repeat: -1
    // });

    // this.armTween=this.tweens.add({
    //     targets: [ this.hunterArm, ],
    //    angle:-90,
    //     ease: 'Power1',
    //     duration: 2000,
    //     yoyo: true,
    //     repeat: -1
    // });

    //this.cameras.main.zoom=.2;
this.falling=false;

this.cursors=this.input.keyboard.createCursorKeys();


//create road
this.road=this.add.rectangle(this.truck.x+300,850,1600,200,0x000000).setDepth(this.rightWheel.depth-1);
this.streetLine=this.add.tileSprite(this.truck.x,this.road.y-50, 20*128,1*128, 'streetLine').setDepth(this.road.depth);
};

drivingScene.update = function(){
 this.bg1.tilePositionX+=10; this.bg2.tilePositionX+=.2;this.bg3.tilePositionX+=.01;//this.bg1Copy.x-=10;this.bg2.x-=10;this.bg2Copy.x-=10;this.bg3.x-=.01;this.bg3Copy.x-=.01;
this.streetLine.tilePositionX+=3;

//if(this.sun.y<-1000&&this.falling==false){this.sun.x++,this.sun.y++, this.falling=true;}else{this.sun.x++,this.sun.y--};
this.truckback.setPosition(this.truck.x-126,this.truck.y-28);
this.hunter.setPosition(this.truck.x+5,this.truck.y-35);
this.hunterArm.setPosition(this.hunter.x-10,this.hunter.y+10);
this.chickenLeg.setPosition(this.hunterArm.x+20, this.hunterArm.y+10);
   this.leftWheel.rotation+=.3;
   this.rightWheel.rotation+=.3;
   console.log(this.sun.x,this.sun.y)
   iggleResize();
   if(this.cursors.left.isDown){this.truck.x--};
   if(this.cursors.right.isDown){this.truck.x++};

};