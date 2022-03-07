   //start pixel deletion


      //   //  Get the texture size
      //   let width = cutPosX+cutWidth;
      //   let height = cutPosY+cutHeight;

      //   //  Create a Render Texture to draw our image to, which we can destroy bit by bit and draw the texture to it
      // //   let renderTexture = this.add.renderTexture(gibs[i].x, gibs[i].y, width, height).draw(frame);
      // //   gibs[i].renderTexture = renderTexture;
      //  let bounds = {left:cutPosX, right:x+cutWidth,top:cutPosY,bottom:cutPosY+cutHeight};
     

      // //  //  Floor because we're working with integers for pixel reading
      //  const left =bounds.left;
      //  const right =bounds.right;
      //  const top = bounds.top;
      //  const bottom = bounds.bottom;
      

      
      // //  //  Scan each pixel
      //  for (let y = bottom; y > height; y--)
      //  {
      //      for (let x = left; x < right; x++)
      //      {
      //     //  debugger;
      //       let pixel = this.textures.getPixel(x, y, img.texture.key, img.frame.name);

      //          //  If this pixel has an alpha > 0 then our bullet hit the texture
      //          if (Phaser.Math.Between(3,3)==3)
      //          {console.log(x,y)
                  

      //              //  Erase a bullet-sized chunk from the RenderTexture
      //              if(pixel!=null&&pixel.alpha!=0){
                   
      //                pixel.alpha=0};
      //          };
      //       };
      //    };
//end pixel deletion

let gameScene = new Phaser.Scene('Game');

gameScene.init = function(){
   this.iggleAnimations=iggleAnimations; 
   this.iggleLoadingScreen=iggleLoadingScreen;
this.shooting=false;
this.gibs=this.add.group();
};

gameScene.preload = function(){
   this.load.audio('rifleSingleShot','assets/sounds/rifle_single_shot.wav');
   //load blood
this.load.atlas('blood1', ['assets/sprites/blood/Front_1.png','assets/sprites/blood/Front_1_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood2', ['assets/sprites/blood/Front_7.png','assets/sprites/blood/Front_7_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood3', ['assets/sprites/blood/Front_9.png','assets/sprites/blood/Front_9_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood4', ['assets/sprites/blood/Front_11.png','assets/sprites/blood/Front_11_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood5', ['assets/sprites/blood/Front_13.png','assets/sprites/blood/Front_13_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.image('sky5', 'assets/backgrounds/forestHunt/Sky05.png');
this.load.unityAtlas('squatch2', 'assets/sprites/squatch/character_idle.png','assets/sprites/squatch/character_idle.png.meta');
 this.iggleLoadingScreen('Loading Sandbox...')
}

   


gameScene.create = function(){
    //create idle animations
    this.anims.create({
      key: 'squatch2Idle',
      frames: this.anims.generateFrameNames('squatch2', { prefix: 'idle_', start:0,end: 20 }),
      repeat: -1,
      repeatDelay: 2,
      frameRate: 15
  });



      this.anims.create({
          key: 'squatch2IdleSide',
          frames: this.anims.generateFrameNames('squatch2', { prefix: 'idle_', start:21,end: 41 }),
          repeat: -1,
          repeatDelay: 2,
          frameRate: 15
      });

      
      this.anims.create({
          key: 'squatch2IdleUp',
          frames: this.anims.generateFrameNames('squatch2', { prefix: 'idle_', start:42,end: 62 }),
          repeat: -1,
          repeatDelay: 2,
          frameRate: 15
      });

   this.lights.enable().setAmbientColor(0x000000);
   this.anims.create({
      key:'bleed1',
      frames: this.anims.generateFrameNames('blood1', { prefix: 'bleed_', start:0,end: 57 }),
      repeat: 0,
      yoyo:false,
      repeatDelay: 0,
      hideOnComplete:true,
      frameRate: 30
    });
    this.anims.create({
      key:'bleed2',
      frames: this.anims.generateFrameNames('blood2', { prefix: 'bleed_', start:0,end: 57 }),
      repeat: 0,
      yoyo:false,
      repeatDelay: 0,
      hideOnComplete:true,

      frameRate: 30
    });
    this.anims.create({
      key:'bleed3',
      frames: this.anims.generateFrameNames('blood3', { prefix: 'bleed_', start:0,end: 57 }),
      repeat: 0,
      yoyo:false,
      hideOnComplete:true,

      repeatDelay: 0,
      frameRate: 30
    });
    this.anims.create({
      key:'bleed4',
      frames: this.anims.generateFrameNames('blood4', { prefix: 'bleed_', start:0,end: 57 }),
      repeat: 0,
      yoyo:false,
      hideOnComplete:true,

      repeatDelay: 0,
      frameRate: 30
    });
    this.anims.create({
      key:'bleed5',
      frames: this.anims.generateFrameNames('blood5', { prefix: 'bleed_', start:0,end: 57 }),
      repeat: 0,
      yoyo:false,
      hideOnComplete:true,

      repeatDelay: 0,
      frameRate: 30
    });
   this.rifleSingleSound=this.sound.add('rifleSingleShot');
  
   this.iggleAnimations('squatch');
   this.squatch=this.physics.add.sprite(250, 400, 'squatchIdle', 'idle_0');
   this.squatch.body.enable=false;
   this.squatch2= this.add.sprite(400,400), 'squatch2Idle','idle_0)';
   this.squatch2.setPipeline('Light2D');
   this.squatch2.play('squatch2Idle');


this.squatch.play('squatchIdle');
this.squatchArm=this.add.sprite(this.squatch.x,this.squatch.y,'squatchRifle','rifle_1');
this.squatchArm.depth=2;
this.squatchArm.visible=false;
this.squatchArm.setPipeline('Light2D');
this.rifle=this.add.sprite(this.squatch.x,this.squatch.y+20, 'weaponRifle');
this.rifle.setPipeline('Light2D');
this.rifle.depth=1;
this.muzzleFlash=this.add.sprite(this.rifle.x-160,this.rifle.y+20,'muzzleFlash', 'muzzleflash_1');
this.muzzleFlash.setPipeline('Light2D');
this.muzzleFlash.visible=false;
this.muzzleFlash.depth=3;
this.rifle.visible=false;

// this.anims.create({
//    key: 'bleed',
//    frames: this.anims.generateFrameNames('blood', {
//        prefix: 'bleed',
//        start: 0,
//        end: 57,
//        zeroPad: 5,
//        frameRate:2,
       
//    })
// });

var bloodNumber=Phaser.Math.Between(1,5);
this.blood=this.add.sprite(this.squatch.x,this.squatch.y+250,'blood'+bloodNumber);
this.blood.setScale(2);
this.blood.depth=this.squatch.depth+1;
this.blood.visible=false;
this.squatch.setInteractive();

//squatch on click
this.squatch.on('pointerdown',function(){
   this.blood.visible=true;
this.rifleSingleSound.play();

if(bloodNumber==3){this.blood.setPosition(this.squatch.x+50,this.squatch.y+150)}
else if(bloodNumber==2){this.blood.setPosition(this.squatch.x+125,this.squatch.y+125)}
else{this.blood.setPosition(this.squatch.x,this.squatch.y+200)};
this.blood.setScale(2);
this.blood.depth=this.squatch.depth+1;
this.blood.setPipeline('Light2D');
this.blood.play('bleed'+bloodNumber);
if( this.squatch.moveTween){ this.squatch.moveTween.stop()};
this.squatch.play('squatchHeadShot');
bloodNumber=Phaser.Math.Between(1,5);
//gib squatch thanks to Phaser Discord: Dennis Gedai Eichert



   
   let xCutCount = Phaser.Math.Between(5,32);
    let yCutCount=Phaser.Math.Between(5,32);
    let cutImages = [];
    let sourceTexture = this.textures.list['squatchIdle'].frames['idle_0'];
    let cutWidth = sourceTexture.width / xCutCount;
    let cutHeight = sourceTexture.height / yCutCount/2;
    for (var y = 0; y < yCutCount; y++) {
        for (var x = 0; x < xCutCount; x++) {
            var cutPosX = x * cutWidth;
            var cutPosY = y * cutHeight;
            var img = this.add.sprite(this.squatch.x, this.squatch.y, 'squatchIdle', 'idle_0').setCrop(cutPosX, cutPosY, cutWidth, cutHeight).setPipeline('Light2D');
       
       
       
       
            this.gibs.add(img);



         }
    

      };
   let gibs=this.gibs.getChildren();
   let numGibs=gibs.length;
   for(i=0;i<numGibs;i++){
      gibs[i].depth=this.blood.depth-1;

    //start pixel deletion


        //  Get the texture size
        let width = gibs[i].width;
        let height = gibs[i].height;

        //  Create a Render Texture to draw our image to, which we can destroy bit by bit and draw the texture to it
      //   let renderTexture = this.add.renderTexture(gibs[i].x, gibs[i].y, width, height).draw(frame);
      //   gibs[i].renderTexture = renderTexture;
       let bounds = gibs[i].getBounds();
       console.log(bounds)

      //  //  Floor because we're working with integers for pixel reading
       const left =bounds.left;
       const right =bounds.right;
       const top = bounds.top;
       const bottom = bounds.bottom;
       const {frame, texture } = gibs[i];

      
      //  //  Scan each pixel
       for (let y = height; y > 0; y--)
       {
           for (let x = 0; x < height; x++)
           {console.log(gibs[i].width,gibs[i].height)
          //  debugger;
            let pixel = this.textures.getPixel(x, y, texture.key, frame.name);

               //  If this pixel has an alpha > 0 then our bullet hit the texture
               if (Phaser.Math.Between(1,3)==3)
               {
                  

                   //  Erase a bullet-sized chunk from the RenderTexture
                   if(pixel!=null&&pixel.alpha!=0){
                   
                     pixel.alpha=0};
               };
            };
         };
//end pixel deletion


      gibs[i].moveTween=this.tweens.add({
         targets:gibs[i],
          duration:Phaser.Math.Between(250,300),
         yoyo:false,
          y:this.squatch.y-Phaser.Math.Between(50,300),
          x:this.squatch.x+Phaser.Math.Between(-350,350),
         angle:gibs[i].rotation+Phaser.Math.Between(-90,90),
          delay:0,
          repeat:0,
          //ease:'Stepped',
          callbackScope:gibs[i],
         onComplete:function(){

            
if(this.x<this.scene.squatch.x){
            this.moveTween=this.scene.tweens.add({
               targets:this,
                duration:Phaser.Math.Between(500,600),
               yoyo:false,
                y:this.scene.squatch.y+Phaser.Math.Between(100,150),
                x:this.x+Phaser.Math.Between(-150,-50),
                delay:0,
                repeat:0,
                callbackScope:this.scene,
                ease:Phaser.Math.Easing.Bounce.Out,
            // onComplete:function(){this.restart()}
            
            });
            this.scene.gibs.remove(this);
          }
         else{
            this.moveTween=this.scene.tweens.add({
               targets:this,
                duration:Phaser.Math.Between(500,600),
               yoyo:false,
                y:this.scene.squatch.y+Phaser.Math.Between(100,150),
                x:this.x+Phaser.Math.Between(50,150),
                delay:0,
                repeat:0,
                callbackScope:this.scene,
                ease:Phaser.Math.Easing.Bounce.Out,
               // onComplete:function(){this.restart()}

             
            
            });
            this.scene.gibs.remove(this);

         };
    
         },
      
      });


   };
   
   },this);

//lights
this.squatch.setPipeline('Light2D');
this.theLight=this.lights.addLight(this.squatch.x+100,this.squatch.y,100,).setColor(0x111111).setIntensity(9);


this.cursors=this.input.keyboard.createCursorKeys();

this.input.on('pointermove',function(pointer){
   this.theLight.x=pointer.worldX;
   this.theLight.y=pointer.worldY;
},this)

};

gameScene.update = function(){


if(this.cursors.space.isDown&&this.shooting==false){this.squatch.play('squatchHoldSide');
this.squatch2.play('squatch2IdleSide');
this.squatchArm.visible=true;
this.squatchArm.depth=this.rifle.depth+1;
this.rifle.visible=true;
this.muzzleFlash.visible=true;
this.muzzleFlash.alpha=0;
this.cursors.space.isDown=false;
this.shooting=true;
this.squatchArm.scaleX=this.squatch.scaleX;
this.squatchArm.scaleY=this.squatch.scaleY;
this.rifle.scaleX=this.squatch.scaleX;
this.rifle.scaleY=this.squatch.scaleY;
this.muzzleFlash.scaleX=this.squatch.scaleX;
this.muzzleFlash.scaleY=this.squatch.scaleY;
this.rifle.setPosition(this.squatch.x,this.squatch.y+20);
let shakeY =(Math.random()*10);
let shakeX =(Math.random()*10);
this.flash=this.lights.addLight(this.muzzleFlash.x,this.muzzleFlash.y,400,).setColor(0xfffff).setIntensity(0);

this.flash.moveTween=this.tweens.add({
   targets:this.flash,
    duration:75,
   yoyo:true,
    intensity:3,
    delay:0,
    repeat:-1,
    callbackScope:this,
    

});

this.shakeArm= this.squatchArm.moveTween=this.tweens.add({
   targets:this.squatchArm,
    duration:75,
    y:this.squatchArm.y+shakeY,
    x:this.squatchArm.x+shakeX,
    yoyo:true,
    angle:this.squatchArm.angle+shakeX,
    delay:0,
    repeat:-1,
    callbackScope:this,
    

});

this.shakeRifle= this.rifle.moveTween=this.tweens.add({
   targets:this.rifle,
    duration:75,
    angle:this.rifle.angle+shakeX,
    y:this.rifle.y+shakeY,
    x:this.rifle.x+shakeX,
    yoyo:true,
    delay:0,
    repeat:-1,
    callbackScope:this,
      

});

this.muzzleFlashShake= this.muzzleFlash.moveTween=this.tweens.add({
   targets:this.muzzleFlash,
    duration:75,
    y:this.rifle.y+shakeY+10,
    x:this.rifle.x+shakeX-165,
    visible:false,
    yoyo:true,
    angle:this.muzzleFlash.angle+shakeX,
    delay:0,
    alpha:1,
    repeat:-1,
    callbackScope:this,
   
    
});
// this.muzzleFlashFlash= this.muzzleFlash.moveTween=this.tweens.add({
//    targets:this.muzzleFlash,
//     duration:75,
//    alpha:0,
//     yoyo:true,
//     delay:0,
//     repeat:-1,
    
   
    
// });

};


if(this.cursors.left.isDown){this.squatch.flipX=false;this.squatch.play('squatchWalkSide')};
if(this.cursors.up.isDown){this.squatch.play('squatchWalkUp')};
if(this.cursors.right.isDown){this.squatch.flipX=true;this.squatch.play('squatchHeadShot');this.blood.visible=true;this.blood.play('bleed');};
if(this.cursors.down.isDown){this.squatch.play('squatchWalk')};


//  As the difference between them set our scale and alpha ranges
const maxY=600;
const minY=400;
const scaleRange = 30 / (maxY - minY);

//  Store our carousel images in here


//  this.squatch.setScale(1 + scaleRange * (this.squatch.y - minY));
//     this.squatch.setDepth(1 + scaleRange * (this.squatch.y - minY));
//    //  this.rifle.setScale(1 + scaleRange * (this.squatch.y - minY));
//    //  this.rifle.setDepth(1 + scaleRange * (this.squatch.y - minY));
//    //  this.squatchArm.setScale(1 + scaleRange * (this.squatch.y - minY));
//    //  this.squatchArm.setDepth(1 + scaleRange * (this.squatch.y - minY));
//    //  this.muzzleFlash.setScale(1 + scaleRange * (this.squatch.y - minY));
//    //  this.muzzleFlash.setDepth(1 + scaleRange * (this.squatch.y - minY));
if(this.cursors.up.isDown){this.squatch.y--}
if(this.cursors.down.isDown){this.squatch.y++}
if(this.squatch.scaleX<1){this.squatch.depth=-97}

};


       
       




