
let drivingScene = new Phaser.Scene('Driving');

drivingScene.init = function(){
    this.gameW = this.sys.game.config.width;
    this.gameH = this.sys.game.config.height;
    this.iggleLoad=iggleLoadCopySpriteAtlas;
    this.iggleAnimations=iggleAnimations;
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

};

drivingScene.create = function(){
  //create truck and driver
    this.truck=this.add.sprite(this.gameW/2-300,this.gameH/2+150, 'truck').setPipeline('Light2D');
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
    this.hunter.depth=9;
this.hunterArm=this.add.sprite(this.hunter.x,this.hunter.y,'hunterRifle','rifle_1');
this.hunterArm.depth=9;
this.hunterArm.visible=false;
this.hunterArm.setPipeline('Light2D');
this.hunterArm.depth=9;
this.hunterArm.visible=false;
this.hunterArm.setPipeline('Light2D');
this.chickenLeg=this.add.sprite(this.hunterArm.x,this.hunterArm.y,'chickenLeg').setScale(.4).setPipeline('Light2D').setDepth(8);

    
    //create backgrounds
    this.sky=this.add.sprite(this.gameW/2,this.gameH/2-200,'sky').setDepth(-99).setScale(.3).setPipeline('Light2D');


    this.lights.enable().setAmbientColor('0x000000');
    this.sun=this.lights.addLight(this.truck.x,Phaser.Math.Between(0,this.gameH/2),1000000000000).setColor(0xffffff).setIntensity(3);
  
   
    this.bg1=this.add.sprite(this.gameW/2,this.gameH-150,'bg1').setScale(.25).setDepth(7).setPipeline('Light2D')
    this.bg1Copy=this.add.sprite((this.gameW/2+1023),this.gameH-150,'bg1').setScale(.25).setDepth(7).setPipeline('Light2D')

    this.bg2=this.add.sprite(this.gameW/2,this.gameH-250,'bg2').setScale(.25).setDepth(6).setPipeline('Light2D');
    this.bg2Copy=this.add.sprite(this.gameW/2+(1702/2)-1,this.gameH-250,'bg2').setScale(.25).setDepth(6).setPipeline('Light2D');

    this.bg3=this.add.sprite(this.gameW/2,this.gameH-450,'bg3').setScale(.25).setDepth(5).setPipeline('Light2D');
    this.bg3Copy=this.add.sprite((this.gameW/2+(7265/4)),this.gameH-450,'bg3').setScale(.25).setDepth(5).setPipeline('Light2D');
//this.cameras.main.zoom=.2;


};

drivingScene.update = function(){
 this.bg1.x--;this.bg1Copy.x--;this.bg2.x-=2;this.bg2Copy.x-=2;this.bg3.x-=10;this.bg3Copy.x-=10;
 if(this.bg1.x<=(((this.gameW/2+(1023/2))-this.truck.x)*-1)){this.bg1.x=(this.gameW/2)+(1023/2)-this.truck.x};
 if(this.bg1Copy.x<=(((this.gameW/2+(1023/2))-this.truck.x)*-1)){this.bg1Copy.x=(this.gameW/2)+(1023/2)-this.truck.x};
 if(this.bg2.x<=(((this.gameW/2+(1702/2))/2)-this.truck.x-1)*-1){this.bg2.x=(this.gameW/2)+(1702/2)-1-this.truck.x};
 if(this.bg2Copy.x<=(((this.gameW/2+(1702/2))/2)-this.truck.x-1)*-1){this.bg2Copy.x=(this.gameW/2)+(1702/2)-1-this.truck.x};
 if(this.bg3.x<=(((this.gameW/2+(3363/2))/2)-this.truck.x)*-1){this.bg3.x=(this.gameW/2)+(7265/4)-this.truck.x};
 if(this.bg3Copy.x<=(((this.gameW/2+(3363/2))/2)-this.truck.x)*-1){this.bg3Copy.x=(this.gameW/2)+(7265/4)-this.truck.x};

   this.leftWheel.rotation+=.01;
   this.rightWheel.rotation+=.01;
};