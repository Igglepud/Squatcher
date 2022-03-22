let drivingScene = new Phaser.Scene("Driving");

drivingScene.init = function () {
  this.gameW = this.sys.game.config.width;
  this.gameH = this.sys.game.config.height;
  this.iggleLoad = iggleLoadCopySpriteAtlas;
  this.iggleAnimations = iggleAnimations;
  this.loadingScreen = iggleLoadingScreen;
  this.policeActive=false;
};

drivingScene.preload = function () {
  this.load.image("truck", [
    "assets/sprites/vehicles/car10.png",
    "assets/sprites/vehicles/car10_n.png",
  ]);
  this.load.image("truckback", [
    "assets/sprites/vehicles/car10part2.png",
    "assets/sprites/vehicles/car10part2_n.png",
  ]);
  this.load.image("redLight", "assets/sprites/vehicles/red.png");
  this.load.image("blueLight", "assets/sprites/vehicles/blue.png");

  this.load.image("policeCar", [
    "assets/sprites/vehicles/car20.png",
    "assets/sprites/vehicles/car20_n.png",
  ]);

  this.iggleLoad("hunter", "assets/sprites/");
  //this.load.image('chickenLeg',['assets/sprites/items/chicken_leg.png','assets/sprites/items/chicken_leg_n.png'])
  this.load.atlas(
    "wheels2",
    [
      "assets/sprites/vehicles/wheels2.png",
      "assets/sprites/vehicles/wheels2_n.png",
    ],
    "assets/sprites/vehicles/wheels2.json"
  );
  this.load.atlas(
    "wheels",
    [
      "assets/sprites/vehicles/wheels1.png",
      "assets/sprites/vehicles/wheels1_n.png",
    ],
    "assets/sprites/vehicles/wheels1.json"
  );

  this.load.image("cloud1", [
    "assets/backgrounds/driving/desert/cloud1.png",
    "assets/backgrounds/driving/desert/cloud1_n.png",
  ]);
  this.load.image("cloud2", [
    "assets/backgrounds/driving/desert/cloud2.png",
    "assets/backgrounds/driving/desert/cloud2_n.png",
  ]);

  this.load.image("sky", [
    "assets/backgrounds/driving/desert/sky.png",
    "assets/backgrounds/driving/desert/sky_n.png",
  ]);
  this.load.image("bg1", [
    "assets/backgrounds/driving/desert/bg1.png",
    "assets/backgrounds/driving/desert/bg1_n.png",
  ]);
  this.load.image("bg2", [
    "assets/backgrounds/driving/desert/bg2.png",
    "assets/backgrounds/driving/desert/bg2_n.png",
  ]);
  this.load.image("bg3", [
    "assets/backgrounds/driving/desert/bg3.png",
    "assets/backgrounds/driving/desert/bg3_n.png",
  ]);
  this.load.image("bg4", [
    "assets/backgrounds/driving/desert/bg4.png",
    "assets/backgrounds/driving/desert/bg4_n.png",
  ]);
  this.load.image("bg1", [
    "assets/backgrounds/driving/desert/bg5.png",
    "assets/backgrounds/driving/desert/bg5_n.png",
  ]);
  this.load.image("bg6", [
    "assets/backgrounds/driving/desert/bg6.png",
    "assets/backgrounds/driving/desert/bg6_n.png",
  ]);
  this.loadingScreen("Loading your drive through the desert...");
  this.load.image(
    "streetLine",
    "assets/backgrounds/driving/desert/streetLine.png"
  );
};

drivingScene.create = function () {
  this.speed=0;
  //make clouds
  this.clouds = this.add.group();
  for (i = 0; i < Phaser.Math.Between(3, 15); i++) {
    let cloud = this.physics.add.sprite(
      0,
      Phaser.Math.Between(0, 300),
      "cloud" + Phaser.Math.Between(1, 2)
    );
    cloud.body.allowGravity = false;
    cloud.body.setVelocityX(Phaser.Math.Between(-800, -50));
    cloud;
    cloud.setDepth(Phaser.Math.Between(1, 5));
    cloud.setScale(Math.random() * Math.random());
    if (Phaser.Math.Between(1, 2) == 2) {
      cloud.flipX = true;
    } else {
      cloud.flipX = false;
    }
    this.clouds.add(cloud);
  }
  //create truck and driver
  this.truck = this.add.sprite(
    this.gameW / 2 - 300,
    this.gameH / 2 + 200,
    "truck"
  );
  this.truckback = this.add.sprite(
    this.truck.x - 126,
    this.truck.y - 28,
    "truckback"
  );
  this.iggleAnimations("hunter");
  this.leftWheel = this.add.sprite(
    this.truck.x - 130,
    this.truck.y + 100,
    "wheels",
    "wheel_2"
  );
  this.rightWheel = this.add.sprite(
    this.truck.x + 130,
    this.truck.y + 100,
    "wheels",
    "wheel_2"
  );
  this.truck.depth = 10;
  this.truckback.depth = 8;
  this.leftWheel.depth = 11;
  this.rightWheel.depth = 11;
  this.hunter = this.add
    .sprite(this.truck.x + 5, this.truck.y - 35, "hunter")
    .play("hunterIdleSide");
  this.hunter.flipX = true;
  this.hunter.setScale(0.4);
  this.hunter.depth = 7;
  this.hunterArm = this.add.sprite(
    this.hunter.x,
    this.hunter.y,
    "hunterRifle",
    "rifle_1"
  );
  this.hunterArm.depth = 9;
  this.hunterArm.flipX = true;
  this.hunterArm.setScale(0.4);
  this.chickenLeg = this.add
    .sprite(this.hunterArm.x, this.hunterArm.y, "chickenLeg")
    .setScale(0.15)
    .setDepth(8)
    .setAngle(180)
    .setPosition(this.hunterArm.x + 20, this.hunterArm.y + 10);
  this.policeCar = this.add.sprite(1600, 850, "policeCar").setDepth(99);
  
  
  this.pWheel1 = this.add
    .sprite(this.policeCar.x - 100, this.policeCar.y + 30, "wheels2", "wheel_1")
    .setDepth(100);
  this.pWheel2 = this.add
    .sprite(this.policeCar.x + 128, this.policeCar.y + 30, "wheels2", "wheel_1")
    .setDepth(100);


  this.red = this.add
    .sprite(this.policeCar.x - 15, this.policeCar.y - 60, "redLight")
    .setDepth(102)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setScale(1.5)
  this.blue = this.add
    .sprite(this.policeCar.x - 15, this.policeCar.y - 60, "blueLight")
    .setDepth(102)
    .setBlendMode(Phaser.BlendModes.ADD)
    .setAlpha(0)
    .setScale(1.5);
  this.lightsMaskRect = this.add
    .graphics().fillRect(
      this.red.x-this.red.frame.width/2,
      this.red.y,
      this.red.width,
      this.red.height,
    ).setDepth(102).setDefaultStyles({fillStyle:0xffffff}).setVisible(false);
   this.lightMask = this.lightsMaskRect
     .createGeometryMask()
     .setInvertAlpha(true);
this.red.setMask(this.lightMask);
this.blue.setMask(this.lightMask);


  //   this.red.movementTween=this.tweens.add({
  // targets:this.red,
  // alpha:0,
  // repeat:-1,
  // yoyo:true,
  // duration:75

  //   });
  //     this.blue.movementTween = this.tweens.add({
  //       targets: this.blue,
  //       alpha: 1,
  //       repeat: -1,
  //       yoyo: true,
  //       duration: 75,
  //     });

  this.blinkTimer = this.time.addEvent({
    delay: 75,
    repeat: -1,
    callback: function () {
      if (this.red.alpha == 1) {
        (this.red.alpha = 0), (this.blue.alpha = 1);
      } else {
        (this.red.alpha = 1), (this.blue.alpha = 0);
      }
    },
    callbackScope: this,
  });
this.wholePoliceCar = this.add.container();
this.physics.add.existing(this.wholePoliceCar);
this.wholePoliceCar.body.allowGravity = false;
this.wholePoliceCar.body.velocity.x = -800;
  this.wholePoliceCar
    .add([this.pWheel1, this.pWheel2, this.policeCar,])
    .setDepth(101);

  //create backgrounds
  this.sky = this.add
    .tileSprite(0, this.gameH / 2 - 200, 5 * 4093, 1 * 2894, "sky")
    .setDepth(-99)
    .setScale(0.3);

  //  this.lights.enable().setAmbientColor('0xffffff');
  //this.sun=this.lights.addLight(0,0,1000).setColor(0xffffff).setIntensity(Phaser.Math.Between(1,2));
  // this.sun2=this.lights.addLight(0,450,10000000).setColor(0xffffff).setIntensity(Phaser.Math.Between(1,2));
  this.bg1 = this.add
    .tileSprite(0, this.gameH - 50, 5 * 4093, 1 * 1340, "bg1")
    .setScale(0.25)
    .setDepth(6);
  this.bg2 = this.add
    .tileSprite(0, this.gameH - 200, 5 * 3403, 1 * 2046, "bg2")
    .setScale(0.25)
    .setDepth(5);
  this.bg3 = this.add
    .tileSprite(0, this.gameH - 400, 5 * 7265, 1 * 2446, "bg3")
    .setScale(0.25)
    .setDepth(4);

  //this is how you truly randomize tweens
  this.truckTween = this.tweens.add({
    targets: [this.truck],
    x: {
      getEnd: function (target, key, value) {
        return value + Phaser.Math.Between(-15, 15);
      },
    },
    y: {
      getEnd: function (target, key, value) {
        return value + Phaser.Math.Between(-15, 15);
      },
    },
    // angle:{
    //     getEnd: function (target, key, value)
    //     {
    //         return value + Phaser.Math.Between(-45, 45);
    //     }
    // },
    ease: "Power1",
    duration: 35,
    yoyo: true,
    repeat: -1,
  });
  this.truckBackTween = this.tweens.add({
    targets: [this.truckback],
    x: this.truck.x - 126,
    y: this.truck.y - 28,
    //angle:this.truck.angle,
    ease: "Power1",
    duration: 35,
    yoyo: true,
    repeat: -1,
  });
  this.wheelsTween = this.tweens.add({
    targets: [this.leftWheel, this.rightWheel],
    x: {
      getEnd: function (target, key, value) {
        return value + Phaser.Math.Between(-15, 15);
      },
    },
    y: {
      getEnd: function (target, key, value) {
        return value + Phaser.Math.Between(-15, 0);
      },
    },
    ease: "Power1",
    duration: 35,
    yoyo: true,
    repeat: -1,
  });

  // this.armTween=this.tweens.add({
  //     targets: [ this.hunterArm, ],
  //    angle:-90,
  //     ease: 'Power1',
  //     duration: 2000,
  //     yoyo: true,
  //     repeat: -1
  // });

  this.falling = false;

  this.cursors = this.input.keyboard.createCursorKeys();

  //create road
  this.road = this.add
    .rectangle(this.truck.x + 300, 900, 3500, 300, 0x000000)
    .setDepth(this.rightWheel.depth - 1);
  this.streetLine = this.add
    .tileSprite(this.truck.x, this.road.y - 80, 22 * 128, 1 * 128, "streetLine")
    .setDepth(this.road.depth);
  this.leftWheelBody = this.add.rectangle(
    this.leftWheel.x,
    this.leftWheel.y,
    this.leftWheel.frame.width,
    this.leftWheel.frame.height
  );
  this.physics.add.existing(this.leftWheelBody);
  this.leftWheelBody.body.allowGravity = false;
  this.wholeTruck = this.add.container();
  this.wholeTruck
    .add([
      this.truckback,
      this.hunter,
      this.hunterArm,
      this.truck,
      this.leftWheel,
      this.rightWheel,
    ])
    .setDepth(99);
  this.physics.add.existing(this.wholeTruck);
  this.wholeTruck.body.allowGravity = false;
  this.wholeTruck.body
    .setOffset(
      this.rightWheel.x - this.rightWheel.frame.width / 2,
      this.rightWheel.y - this.rightWheel.frame.height / 2
    )
    .setSize(this.rightWheel.frame.width, this.rightWheel.frame.height);

  //this.cameras.main.zoom=.7
};

drivingScene.update = function () {
  //move background and road
  this.bg1.tilePositionX += this.speed/2 + 20;
  this.bg2.tilePositionX += this.speed/5 + 1.2;
  this.bg3.tilePositionX += this.speed/10 + 0.1; //this.bg1Copy.x-=10;this.bg2.x-=10;this.bg2Copy.x-=10;this.bg3.x-=.01;this.bg3Copy.x-=.01;
  this.streetLine.tilePositionX += this.speed/6+12;

  //if(this.sun.y<-1000&&this.falling==false){this.sun.x++,this.sun.y++, this.falling=true;}else{this.sun.x++,this.sun.y--};
  this.truckback.setPosition(this.truck.x - 126, this.truck.y - 28);
  this.hunter.setPosition(this.truck.x + 5, this.truck.y - 35);
  this.hunterArm.setPosition(this.hunter.x - 10, this.hunter.y + 10);
  this.leftWheel.rotation += 0.3;
  this.rightWheel.rotation += 0.3;
  this.pWheel1.rotation += 0.9;
  this.pWheel2.rotation += 0.9;

  let clouds = this.clouds.getChildren();
  let numClouds = clouds.length;
  for (i = 0; i < numClouds; i++) {
    if (clouds[i].x < -1500) {
      clouds[i]
        .setPosition(2000, Phaser.Math.Between(0, 300))
        .setScale(Math.random() * Math.random());
      if (Phaser.Math.Between(1, 2) == 2) {
        clouds[i].flipX = true;
      } else {
        clouds[i].flipX = false;
      }
      clouds[i].body.setVelocityX(Phaser.Math.Between(-800, -50));
    }
  }
  if (this.cursors.down.isDown) {
    this.wholeTruck.y++;
    this.leftWheelBody.y++;
  }
  if (this.cursors.up.isDown) {
    this.wholeTruck.y--;
    this.leftWheelBody.y--;
  }
  if (this.cursors.left.isDown) {
    this.speed--;
  }
  if (this.cursors.right.isDown) {
    this.speed++;
  }
  if(this.speed<0){this.speed=0};
  if(this.speed>300){this.speed=300};
  if (this.wholePoliceCar.x<-600) {this.policeActive=true;}
  if(this.wholePoliceCar.x<-2000&&this.policeActive==true&&this.cameras.main.zoom!=.7){
    this.cameras.main.movementTween = this.tweens.add({
      targets: this.cameras.main,
      duration: 2000,
      zoom: 0.7,
      scrollX: -400,
    });
    this.streetLine.movementTween = this.tweens.add({
      targets: this.streetLine,
      duration: 2000,
      y: this.streetLine.y + 50,
    });
    this.wholeTruck.movementTween = this.tweens.add({
      targets: this.wholeTruck,
      duration: 2000,
      y: this.wholeTruck.y + 50,
    });
    this.wholePoliceCar.body.velocity.x=0;
     this.wholePoliceCar.movementTween = this.tweens.add({
       targets: this.wholePoliceCar,
       duration: 3000,
       y: this.wholeTruck.y,
       x:this.wholeTruck.x-1500,
      
     });
  }

this.red.setPosition(this.wholePoliceCar.x + 1580, this.wholePoliceCar.y + 795);
this.blue.setPosition(this.red.x, this.red.y);
this.lightsMaskRect.clear();

this.lightsMaskRect.fillRect(
  this.red.x - this.red.width,
  this.red.y,
  this.red.width*2,
  this.red.frame.height
).setVisible(false);




  iggleResize();

if(this.policeActive==false){this.red.alpha=0;this.blue.alpha=0};
console.log(game)
};;
