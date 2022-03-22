//this is how you truly randomize tweens with multiple targets
//this.truckTween=this.tweens.add({
  //     targets: [ this.truck, this.otherTruck],
  //     x: {
              //the getEnd: function()/return value stuff is what really creates a random number 
  //         getEnd: function (target, key, value)//every time the tween runs by setting the key's value
  //         {                                              //of each target by
  //             return value + Phaser.Math.Between(-15, 15); //a random number between -15 and 15, return that value
  //         }                                                //to the tween to execute

  //     },

var iggleAnimations=function(key){
    
    //create idle animations
    this.anims.create({
        key: key+'Idle',
        frames: this.anims.generateFrameNames(key+'Idle', { prefix: 'idle_', start:0,end: 20 }),
        repeat: -1,
        repeatDelay: 2,
        frameRate: 15
    });


 
        this.anims.create({
            key: key+'IdleSide',
           frames: this.anims.generateFrameNames(key+'Idle', { prefix: 'idle_', start:21,end: 41 }),
            repeat: -1,
            repeatDelay: 2,
            frameRate: 15
        });

        
        this.anims.create({
            key: key+'IdleUp',
            frames: this.anims.generateFrameNames(key+'Idle', { prefix: 'idle_', start:42,end: 62 }),
            repeat: -1,
            repeatDelay: 2,
            frameRate: 15
        });

//create vanish animation
    this.anims.create({
        key: key+'Vanish',
        frames: this.anims.generateFrameNames(key+'Vanish', { prefix: 'vanish_', end: 31 }),
        repeat: -1,
        repeatDelay: 2,
        frameRate: 15
      });
//create rifle animations
      this.anims.create({
        key: key+'RifleSide',
        frames: this.anims.generateFrameNames(key+'Rifle', { prefix: 'rifle_', start:0, end: 0 }),
        repeat: 0,
        repeatDelay: 2,
        frameRate: 15
      });
      this.anims.create({
        key: key+'RifleDown',
        frames: this.anims.generateFrameNames(key+'Rifle', { prefix: 'rifle_', start:1,end: 1 }),
        repeat: 0,
        repeatDelay: 2,
        frameRate: 15
      });
      this.anims.create({
        key: key+'RifleUp',
        frames: this.anims.generateFrameNames(key+'Rifle', { prefix: 'rifle_', start:2,end: 2 }),
        repeat: 0,
        repeatDelay: 2,
        frameRate: 15
      });

      //create muzzleflash animation
      this.anims.create({
        key: 'muzzleFlash',
        frames: this.anims.generateFrameNames('muzzleFlash', { prefix: 'muzzleflash_', start:0,end: 1 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15,
        hideOnComplete:true
      });
//carry animations

      this.anims.create({
        key: key+'Carry',
        frames: this.anims.generateFrameNames(key+'Carry', { prefix: 'carry_', start:0,end: 19 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'CarrySide',
        frames: this.anims.generateFrameNames(key+'Carry', { prefix: 'carry_', start:20,end: 39 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'CarryUp',
        frames: this.anims.generateFrameNames(key+'Carry', { prefix: 'carry_', start:40,end: 59 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'Crawl',
        frames: this.anims.generateFrameNames(key+'Crawl', { prefix: 'crawl_', start:0,end: 18 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'CrawlSide',
        frames: this.anims.generateFrameNames(key+'Crawl', { prefix: 'crawl_', start:19,end: 37 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'CrawlUp',
        frames: this.anims.generateFrameNames(key+'Crawl', { prefix: 'crawl_', start:38,end: 56 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Duck',
        frames: this.anims.generateFrameNames(key+'Duck', { prefix: 'duck_', start:0,end: 20 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'DuckSide',
        frames: this.anims.generateFrameNames(key+'Duck', { prefix: 'duck_', start:21,end: 41 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'DuckUp',
        frames: this.anims.generateFrameNames(key+'Duck', { prefix: 'duck_', start:42,end: 62 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Hit1',
        frames: this.anims.generateFrameNames(key+'Hit1', { prefix: 'hit1_', start:0,end: 12 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'Hit1Side',
        frames: this.anims.generateFrameNames(key+'Hit1', { prefix: 'hit1_', start:13,end: 25 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Hit1Up',
        frames: this.anims.generateFrameNames(key+'Hit1', { prefix: 'hit1_', start:26,end: 38 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Hit2',
        frames: this.anims.generateFrameNames(key+'Hit2', { prefix: 'hit2_', start:0,end: 12 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'Hit2Side',
        frames: this.anims.generateFrameNames(key+'Hit2', { prefix: 'hit2_', start:13,end: 25 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Hit2Up',
        frames: this.anims.generateFrameNames(key+'Hit2', { prefix: 'hit2_', start:26,end: 38 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Hold',
        frames: this.anims.generateFrameNames(key+'Hold', { prefix: 'hold_', start:0,end: 20 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'HoldSide',
        frames: this.anims.generateFrameNames(key+'Hold', { prefix: 'hold_', start:21,end: 41 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'HoldUp',
        frames: this.anims.generateFrameNames(key+'Hold', { prefix: 'hold_', start:42,end: 62 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'Jump',
        frames: this.anims.generateFrameNames(key+'Jump', { prefix: 'jump_', start:0,end: 18 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'JumpSide',
        frames: this.anims.generateFrameNames(key+'Jump', { prefix: 'jump_', start:19,end: 37 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'JumpUp',
        frames: this.anims.generateFrameNames(key+'Jump', { prefix: 'jump_', start:38,end: 56 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Run',
        frames: this.anims.generateFrameNames(key+'Run', { prefix: 'run_', start:0,end: 9 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 30
      });

      this.anims.create({
        key: key+'RunSide',
        frames: this.anims.generateFrameNames(key+'Run', { prefix: 'run_', start:10,end: 19 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 30
      });
      this.anims.create({
        key: key+'RunUp',
        frames: this.anims.generateFrameNames(key+'Run', { prefix: 'run_', start:20,end: 29 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 30
      });
      this.anims.create({
        key: key+'Slide',
        frames: this.anims.generateFrameNames(key+'Slide', { prefix: 'slide_', start:0,end: 10 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'SlideSide',
        frames: this.anims.generateFrameNames(key+'Slide', { prefix: 'slide_', start:11,end: 21 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'SlideUp',
        frames: this.anims.generateFrameNames(key+'Slide', { prefix: 'slide_', start:22,end: 32 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Throw',
        frames: this.anims.generateFrameNames(key+'Throw', { prefix: 'throw_', start:0,end: 19 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'ThrowSide',
        frames: this.anims.generateFrameNames(key+'Throw', { prefix: 'throw_', start:20,end: 39 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'ThrowUp',
        frames: this.anims.generateFrameNames(key+'Throw', { prefix: 'throw_', start:40,end: 59 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'Walk',
        frames: this.anims.generateFrameNames(key+'Walk', { prefix: 'walk_', start:0,end: 13 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });

      this.anims.create({
        key: key+'WalkSide',
        frames: this.anims.generateFrameNames(key+'Walk', { prefix: 'walk_', start:14,end: 27 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'WalkUp',
        frames: this.anims.generateFrameNames(key+'Walk', { prefix: 'walk_', start:28,end: 41 }),
        repeat: -1,
        repeatDelay: 0,
        frameRate: 15
      });
      this.anims.create({
        key: key+'JustDie',
        frames: this.anims.generateFrameNames(key+'Vanish', { prefix: 'vanish_', start:0,end: 3 }),
        repeat: 0,
        repeatDelay: 0,
        frameRate: 30
      });
      if(key=='squatch'){
      this.anims.create({
        key: key+'HeadShot',
        frames: this.anims.generateFrameNames(key+'VanishNoHead', { prefix: 'vanish_', start:0,end: 3 }),
        repeat: 0,
        repeatDelay: 0,
        frameRate: 15
      });
    };
      //TODO sword AND scythe swing animations
      // this.anims.create({
      //   key: key+'Sword',
      //   frames: this.anims.generateFrameNames(key+'Sword', { prefix: 'sword_', start:0,end: 10 }),
      //   repeat: -1,
      //   repeatDelay: 0,
      //   frameRate: 15
      // });

      // this.anims.create({
      //   key: key+'SwordSide',
      //   frames: this.anims.generateFrameNames(key+'Sword', { prefix: 'sword_', start:11,end: 21 }),
      //   repeat: -1,
      //   repeatDelay: 0,
      //   frameRate: 15
      // });
      // this.anims.create({
      //   key: key+'SwordUp',
      //   frames: this.anims.generateFrameNames(key+'Sword', { prefix: 'sword_', start:22,end: 32 }),
      //   repeat: -1,
      //   repeatDelay: 0,
      //   frameRate: 15
      // });

    };
var iggleLoadCopySpriteAtlas=function(key, url, ){
    this.load.unityAtlas(key+'Vanish', [url+key+'/character_vanish.png',url+key+'/character_vanish_n.png'], url+key+'/character_vanish.png.meta');
    this.load.unityAtlas(key+'Idle', [url+key+'/character_idle.png', url+key+'/character_idle_n.png'],url+key+'/character_idle.png.meta', );
    this.load.unityAtlas(key+'Rifle', [url+key+'/character_rifle.png',url+key+'/character_rifle_n.png'], url+key+'/character_rifle.png.meta');
    this.load.unityAtlas('weaponRifle', ['assets/sprites/squatch/weapon_rifle.png','assets/sprites/squatch/weapon_rifle_n.png'], 'assets/sprites/squatch/weapon_rifle.png.meta');
    this.load.unityAtlas('muzzleFlash', ['assets/sprites/squatch/world_muzzleflash.png','assets/sprites/squatch/world_muzzleflash_n.png'], 'assets/sprites/squatch/world_muzzleflash.png.meta');
    this.load.unityAtlas(key+'Carry', [url+key+'/character_carry.png',url+key+'/character_carry_n.png'],url+key+'/character_carry.png.meta');
    this.load.unityAtlas(key+'Crawl', [url+key+'/character_crawl.png',url+key+'/character_crawl_n.png',], url+key+'/character_crawl.png.meta');
    this.load.unityAtlas(key+'Duck', [url+key+'/character_duck.png',url+key+'/character_duck_n.png'], url+key+'/character_duck.png.meta');
    this.load.unityAtlas(key+'Hit1', [url+key+'/character_hit1.png',url+key+'/character_hit1_n.png'], url+key+'/character_hit1.png.meta');
    this.load.unityAtlas(key+'Hit2', [url+key+'/character_hit2.png',url+key+'/character_hit2_n.png'], url+key+'/character_hit2.png.meta');
    this.load.unityAtlas(key+'Hold', [url+key+'/character_hold.png',url+key+'/character_hold_n.png'], url+key+'/character_hold.png.meta');
    this.load.unityAtlas(key+'Jump', [url+key+'/character_jump.png', url+key+'/character_jump_n.png'],url+key+'/character_jump.png.meta');
    this.load.unityAtlas(key+'Run', [url+key+'/character_run.png',url+key+'/character_run_n.png'], url+key+'/character_run.png.meta');
    this.load.unityAtlas(key+'Slide', [url+key+'/character_slide.png',url+key+'/character_slide_n.png'], url+key+'/character_slide.png.meta');
    this.load.unityAtlas(key+'Sword', [url+key+'/character_sword.png',url+key+'/character_sword_n.png'], url+key+'/character_sword.png.meta');
    this.load.unityAtlas(key+'Throw', [url+key+'/character_throw.png', url+key+'/character_throw_n.png'],url+key+'/character_throw.png.meta');
    this.load.unityAtlas(key+'Walk', [url+key+'/character_walk.png',url+key+'/character_walk_n.png'], url+key+'/character_walk.png.meta');
   if(key=='squatch'){
    this.load.unityAtlas(key+'VanishNoHead', [url+key+'/character_vanish_no_head.png',url+key+'/character_vanish_no_head_n.png'], url+key+'/character_vanish.png.meta');
   };



};

var iggleResize=function(){ //Thanks to jamespierce @ Phaser Discourse
  
    let canvas= document.querySelector('canvas');
    let div			= document.getElementById('phaser-app');
    let gameRatio = config.width/config.height;
    let dpi_w	= parseInt(div.style.width) / canvas.width;
    let dpi_h	= parseInt(div.style.height) / canvas.height;
    let windowWidth= window.innerWidth*(dpi_w/dpi_h);
    let windowHeight= window.innerHeight*(dpi_w/dpi_h);
    let windowRatio= windowWidth/windowHeight;
    div.style.width		= (window.innerHeight * gameRatio) + 'px';
    div.style.height	= window.innerHeight + 'px';
    if (windowRatio < gameRatio){
        canvas.style.width=windowWidth+'px';
        canvas.style.height=(windowWidth/gameRatio)+'px';
        
    }else{
        canvas.style.width=(windowHeight*gameRatio) +'px';
        canvas.style.height=windowHeight+'px';
    };
   
  
    
};


 
var iggleLoadForest=function(){
//load background
this.load.image('sky1', 'assets/backgrounds/forestHunt/Sky1.png');
this.load.image('sky2', 'assets/backgrounds/forestHunt/Sky2.png');
this.load.image('sky3', 'assets/backgrounds/forestHunt/Sky3.png');
this.load.image('sky4', 'assets/backgrounds/forestHunt/Sky4.png');
this.load.image('sky5', 'assets/backgrounds/forestHunt/Sky05.png');

this.load.image('backTrees', ['assets/backgrounds/forestHunt/bgLoop.png','assets/backgrounds/forestHunt/bgLoop_n.png']);
this.load.image('backTrees2', ['assets/backgrounds/forestHunt/bigTreesBG.png','assets/backgrounds/forestHunt/bigTreesBG_n.png']);

//load rocks
this.load.image('rocks1', ['assets/backgrounds/forestHunt/detail01.png','assets/backgrounds/forestHunt/detail01_n.png']);
this.load.image('rocks2', ['assets/backgrounds/forestHunt/detail02.png','assets/backgrounds/forestHunt/detail02_n.png']);
this.load.image('rocks3', ['assets/backgrounds/forestHunt/detail03.png','assets/backgrounds/forestHunt/detail03_n.png']);
this.load.image('rocks4', ['assets/backgrounds/forestHunt/detail012.png','assets/backgrounds/forestHunt/detail012_n.png']);
this.load.image('rocks5', ['assets/backgrounds/forestHunt/detail019.png','assets/backgrounds/forestHunt/detail019_n.png']);
this.load.image('rocks6', ['assets/backgrounds/forestHunt/foreground_rock.png','assets/backgrounds/forestHunt/foreground_rock_n.png']);

//load trees
this.load.image('tree1', ['assets/backgrounds/forestHunt/detail009.png','assets/backgrounds/forestHunt/detail009_n.png']);
this.load.image('tree2', ['assets/backgrounds/forestHunt/detail010.png','assets/backgrounds/forestHunt/detail010_n.png']);
this.load.image('tree3', ['assets/backgrounds/forestHunt/detail011.png','assets/backgrounds/forestHunt/detail011_n.png']);
this.load.image('tree4', ['assets/backgrounds/forestHunt/threeTrees.png','assets/backgrounds/forestHunt/threeTrees_n.png']);

//load accents
// this.load.image('flower1', ['assets/backgrounds/forestHunt/detail016.png','assets/backgrounds/forestHunt/detail016_n.png']);
// this.load.image('flower2', ['assets/backgrounds/forestHunt/detail017.png','assets/backgrounds/forestHunt/detail017_n.png']);
// this.load.image('flower3', ['assets/backgrounds/forestHunt/detail018.png','assets/backgrounds/forestHunt/detail018_n.png']);
// this.load.image('flower4', ['assets/backgrounds/forestHunt/detail020.png','assets/backgrounds/forestHunt/detail020_n.png']);

//load sounds
this.load.audio('rifleSingleShot','assets/sounds/rifle_single_shot.wav');
if (this.daytime == 2) {
  let ambianceNumber = Phaser.Math.Between(1, 3);
  this.load.audio(
    "ambiance",
    "assets/sounds/forestDay" + ambianceNumber + ".wav"
  );
}
//load blood
this.load.atlas('blood1', ['assets/sprites/blood/Front_1.png','assets/sprites/blood/Front_1_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood2', ['assets/sprites/blood/Front_7.png','assets/sprites/blood/Front_7_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood3', ['assets/sprites/blood/Front_9.png','assets/sprites/blood/Front_9_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood4', ['assets/sprites/blood/Front_11.png','assets/sprites/blood/Front_11_n.png'], 'assets/sprites/blood/Front_1.json');
this.load.atlas('blood5', ['assets/sprites/blood/Front_13.png','assets/sprites/blood/Front_13_n.png'], 'assets/sprites/blood/Front_1.json');

};

 iggleCreateForest=function(){

  //set time of day
 

//create animations
this.anims.create({
  key:'bleed1',
  frames: this.anims.generateFrameNames('blood1', { prefix: 'bleed_', start:0,end: 57 }),
  repeat: 0,
  yoyo:false,
  hideOnComplete:true,
  repeatDelay: 0,
  frameRate: 30
});
this.anims.create({
  key:'bleed2',
  frames: this.anims.generateFrameNames('blood2', { prefix: 'bleed_', start:0,end: 57 }),
  repeat: 0,
  yoyo:false,
  hideOnComplete:true,

  repeatDelay: 0,
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




//create sound effects
this.rifleSingleSound=this.sound.add('rifleSingleShot');

//place random sky
let skyNumber=Phaser.Math.Between(1,5);  
this.sky=this.add.sprite(this.gameW/2,this.gameH/2,'sky'+skyNumber) ;
this.sky.depth=-99;
this.sky.setPipeline('Light2D');
//create constant BG trees
 this.bgTree=this.add.sprite(this.gameW/2,this.gameH/2,'backTrees') ;
this.bgTree.scaleX=.4;
this.bgTree.depth=-98;
this.bgTree.setPipeline('Light2D');
this.bgTree=this.add.sprite(this.gameW/2-600,this.gameH/2,'backTrees') ;
this.bgTree.scaleX=.4;
this.bgTree.depth=-98;
this.bgTree.setPipeline('Light2D');
this.bgTree=this.add.sprite(this.gameW/2+600,this.gameH/2,'backTrees') ;
this.bgTree.scaleX=.4;
this.bgTree.depth=-98;
this.bgTree.setPipeline('Light2D');

this.bgTree2=this.add.sprite(this.gameW/2,this.gameH/2-300,'backTrees2');
this.bgTree2.setScale(.3);
this.bgTree2.depth=-96;


this.bgTree3=this.add.sprite(this.gameW/2-921,this.gameH/2-300,'backTrees2Left');
this.bgTree3.setScale(.3);
this.bgTree3.depth=-96;
this.bgTree4=this.add.sprite(this.bgTree2.x+921,this.gameH/2-300,'backTrees2Right');
this.bgTree4.setScale(.3);
this.bgTree4.depth=-96;


//place rocks
this.rocks=this.add.group();

let rocksNumber=Phaser.Math.Between(0,12);
for(i=0;i<rocksNumber;i++){
  let rockNumber=Phaser.Math.Between(1,6);
 
let rock=this.add.sprite(Phaser.Math.Between(-600,1400),500,'rocks'+rockNumber);
rock.depth=Phaser.Math.Between(6,10);

if(rockNumber==5){
  rock.setScale((Phaser.Math.Between(75,80)/100));
}
else{rock.setScale((Phaser.Math.Between(33,38)/100));};
let flipNumber=Phaser.Math.Between(1,2);
if(flipNumber==1){rock.flipX=true};
this.rocks.add(rock);
};

//place trees
this.trees=this.add.group();

let treesNumber=Phaser.Math.Between(0,6);
for(i=0;i<treesNumber;i++){
  
  let treeNumber=Phaser.Math.Between(1,4);
  
  let tree=this.add.sprite(Phaser.Math.Between(-600,1400),-500,'tree'+treeNumber);
  tree.depth=Phaser.Math.Between(6,10)
  if(treeNumber==4){
   tree.y=0;
    tree.setScale(Phaser.Math.Between(88,94)/100);}
else{
  tree.setScale(Phaser.Math.Between(61,67)/100);}
  let flipNumber=Phaser.Math.Between(1,2);
  if(flipNumber==1){tree.flipX=true};
  if(treeNumber==2){tree.y=-950};
  this.trees.add(tree);
};

//group objects and create Squatch
this.allObjects=this.add.group();
this.allObjects.addMultiple(this.trees.getChildren());
this.allObjects.addMultiple(this.rocks.getChildren());
this.allObjects.add(this.bgTree2);
this.allObjects.add(this.bgTree3);
this.allObjects.add(this.bgTree4);



//apply lights to objects
let objects=this.allObjects.getChildren();
let numObjects=objects.length;
for(i=0;i<numObjects;i++){


objects[i].setPipeline('Light2D');
};
//TODO create crosshair based on weapon
 this.input.setDefaultCursor('url(assets/uiElements/blank.png), pointer');
this.cursors=this.input.keyboard.createCursorKeys();
this.crosshair=this.add.sprite(0,0,'duplexCrosshair');
this.crosshair.depth=100;
this.crosshair.setScale(.1);
this.crosshair.setInteractive();
this.crosshair.on('pointerdown',function(){
  this.rifleSingleSound.play()
  let squatchRect = this.squatch.getBounds();
  let crosshairRect = this.crosshair.getBounds();
  
  if(Phaser.Geom.Intersects.RectangleToRectangle(squatchRect, crosshairRect)){
     this.squatchCheck.remove();
      let bloodNumber=Phaser.Math.Between(1,5);
this.blood=this.add.sprite(this.squatch.x,this.squatch.y+200,'blood'+bloodNumber);
if(bloodNumber==3){this.blood.setPosition(this.squatch.x+50,this.squatch.y+150)}
else if(bloodNumber==2){this.blood.setPosition(this.squatch.x+125,this.squatch.y+125)}
else{this.blood.setPosition(this.squatch.x,this.squatch.y+200)};
this.blood.setScale(2);
this.blood.depth=this.squatch.depth+1;
this.blood.setPipeline('Light2D');
this.blood.play('bleed'+bloodNumber);
if( this.squatch.moveTween){ this.squatch.moveTween.stop()};
this.squatch.play('squatchHeadShot');
  };

},this)

// //manage crosshair
this.input.on('pointermove', function (pointer) {
 this.crosshair.x=pointer.worldX+Phaser.Math.Between(-10,10);
 this.crosshair.y=pointer.worldY+Phaser.Math.Between(-10,10);
 this.scope.x=pointer.x;
this.scope.y=pointer.y;
 //this.scopeCam.scrollX=pointer.worldX;
 //this.scopeCam.scrollY=pointer.worldY;
 this.scopeCam.x=pointer.worldX;
 this.scopeCam.y=pointer.worldY;
 //this.screenMask.setPosition(pointer.worldX,pointer.worldY);
//  this.scopeCam.x=pointer.worldX;
//  this.scopeCam.y=pointer.worldY;
//if(this.crosshair.moveTween){this.crosshair.moveTween.stop()};

  // this.crosshair.moveTween=this.tweens.add({
  //   targets:this.crosshair,
  //    x:pointer.worldX+Phaser.Math.Between(-10,10),
  //    y:pointer.worldY+Phaser.Math.Between(-10,10),
  //   duration:100,
  //      yoyo:false,
  //    delay:0,
  //    repeat:0,
  //    callbackScope:this,
   
  //           }); 
 },this);




this.cameras.main.setBounds(-600,0,2000,625);
this.hunter={x:(this.gameW/2),y:(this.gameH/2),depth:100};

//place squatch

this.cursors=this.input.keyboard.createCursorKeys();

let selected = Phaser.Math.Between(0,numObjects-1);
if(selected>=numObjects){selected--};
for(i=selected;i<=selected;i++){
 
this.squatch=this.add.sprite(objects[i].x, 450,'squatch').play('squatchIdle');
this.squatch.setTint(0x654321);
this.squatch.depth=objects[i].depth-1;
this.squatch.setPipeline('Light2D');
if(this.squatch.depth==-97){
this.squatch.x=Phaser.Math.Between(-400,1200);
this.squatch.setScale(.5);
this.squatch.y=430;
};
};
//check if squatch attacks player
this.squatchCheck=this.time.addEvent({
  delay:100,
  repeat:-1,
  callback:function(){
    if(this.spotted==false&&Phaser.Math.Distance.Between(this.squatch.x,this.squatch.y,this.hunter.x,this.hunter.y)<225&&(this.hunter.depth-this.squatch.depth<=2&&this.hunter.depth-this.squatch.depth>=0)||(this.squatch.depth-this.hunter.depth<=2&&this.squatch.depth-this.hunter.depth>=0)){
      this.spotted=true;
            this.squatch.moveTween=this.tweens.add({
        targets:this.squatch,
         y:this.gameH/2,
         x:this.hunter.x,
         scaleX:6,
         scaleY:6,
         duration:1500,
         depth:100,
         yoyo:false,
         delay:0,
         callbackScope:this,
         onComplete:function(){
           this.crosshair.disableInteractive();
          this.cameras.main.shake(500,Math.random());
          //wait for shake to complete
            this.cameras.main.once('camerashakecomplete', function(){
              this.hunterLight.setIntensity(0);
              //create camera fade to a color (black is default) for 1/4 second (250 miliseconds)
                this.cameras.main.fade(1000, 0x055032);
                this.cameras.main.once('camerafadeoutcomplete', function(){
                  //create camera fade to a color (black is default) for 1/4 second (250 miliseconds)
                    this.cameras.main.fadeIn(3000, 0x000000);
                    this.cameras.main.once('camerafadeincomplete', function(){
                      //create camera fade to a color (black is default) for 1/4 second (250 miliseconds)
                  this.scene.restart();                    
                            },this);
                },this);
              
            }, this); 
       
         
            
         }
                });
    };
  },
  callbackScope:this,
});

//create lights


    this.lights.enable().setAmbientColor(0x000000);
    this.hunterLight = this.lights.addLight(0, 0, 150).setScrollFactor(1.0).setIntensity(2).setColor(0x555555);
    if(this.daytime==2){
      this.hunterLight.setIntensity(0);
      this.sun=this.lights.addLight(Phaser.Math.Between(-1000,2400),Phaser.Math.Between(-1000,0),1000000000000).setColor(0xffffff).setIntensity(Phaser.Math.Between(1,5));
    };
    this.input.on('pointermove', function (pointer) {
      //if(this.hunterLight.moveTween){this.hunterLight.moveTween.stop()};

      this.hunterLight.moveTween=this.tweens.add({
        targets:this.hunterLight,
         x:pointer.worldX+Phaser.Math.Between(-10,10),
         y:pointer.worldY+Phaser.Math.Between(-10,10),
        duration:1000,
           yoyo:false,
         delay:0,
         repeat:0,
         callbackScope:this,
       
                });    
  
    },this);


//TODO create camera bob based on drunkeness

// this.addCamerBobX=this.time.addEvent({
//   delay:3000,
//   repeat:-1,
//   callback:function(){
//     this.cameras.main.moveTween=this.tweens.add({
//       targets:this.cameras.main,
//        scrollX:this.cameras.main.scrollX+this.cameraBobX,
//        duration:1000,
//          yoyo:false,
//        delay:0,
//        repeat:0,
//        onComplete:function(){
 
//         this.cameraBobX=Phaser.Math.Between(-10,10);
//         this.cameras.main.moveTween=null;
    
//        },
//        callbackScope:this,
     
//               });
           

//   },
//   callbackScope:this,
// });

this.addCamerBobY=this.time.addEvent({
  delay:1005,
  repeat:-1,
  callback:function(){
    let positation = Phaser.Math.Between(1,2);
    if(positation==2){this.cameraBobY=10}else{this.cameraBobY=-10};
    this.cameras.main.moveTween2=this.tweens.add({
      targets:[this.cameras.main,this.scopeCam],
       scrollY:this.cameras.main.scrollY+this.cameraBobY,
       rotation:this.cameraRotationBob,
      duration:1000,
         yoyo:true,
       delay:0,
       repeat:0,
       onComplete:function(){
 
       
        this.cameras.main.moveTween2=null;
    
       },
       callbackScope:this,
     
              });
           

  },
  callbackScope:this,
});

this.addCamerRotationBob=this.time.addEvent({
  delay:1005,
  repeat:-1,
  callback:function(){
    let positation = Phaser.Math.Between(1,2);
    this.cameraRotationBob=Math.random()*.2;
    if(positation==2){this.cameraRotationBob*=-1};
    this.cameras.main.moveTween3=this.tweens.add({
      targets:this.cameras.main,
       rotation:this.cameraRotationBob,
      duration:1000,
         yoyo:true,
       delay:0,
       repeat:0,
       onComplete:function(){
 
        this.cameras.main.moveTween3=null;
    
       },
       callbackScope:this,
     
              });
           

  },
  callbackScope:this,
});

//create blur effect
postFxPlugin = this.plugins.get('rexkawaseblurpipelineplugin');
postFxPipeline = postFxPlugin.add(this.cameras.main, {
    blur: 0,
    quality: 3
});
// scopeFxPipeline = postFxPlugin.add(this.scopeCam, {  this is not working
//   blur: 0,
//   quality: 3
// });
var blur = this.cameras.main.postPipelines[0].blur;
this.mainBlur=this.time.addEvent({
  delay:7000,
  repeat:-1,
  callback:function(){
   
    this.cameras.main.postPipelines[0].moveTween4=this.tweens.add({
      targets:this.cameras.main.postPipelines[0],
       blur:20,
      duration:4000,
         yoyo:true,
       delay:0,
       repeat:0,
      
       callbackScope:this,
     
              });
           

  },
  callbackScope:this,
});
// blur = this.scopeCam.postPipelines[0].blur;  this is not working
// this.scopeBlur=this.time.addEvent({
//   delay:{

//             getEnd: function (target, key, value)
//              {
//                  return value + Phaser.Math.Between(7000, 12000);
//             }

//         },
//   repeat:-1,
//   callback:function(){
   
//     this.scopeCam.postPipelines[0].moveTween4=this.tweens.add({
//       targets:this.scopeCam.postPipelines[0],
//        blur:20,
//       duration:{

//         getEnd: function (target, key, value)
//          {
//              return value + Phaser.Math.Between(1000, 4000);
//         }

//     },
//          yoyo:true,
//        delay:0,
//        repeat:0,
      
//        callbackScope:this,
     
//               });
           

//   },
//   callbackScope:this,
// });



};

iggleLoadingScreen=function(key){

     //loading box
     var progressBar = this.add.graphics();
     var progressBox = this.add.graphics();
     progressBox.fillStyle(0x222222, 0.8);
     progressBox.fillRect(240, 270, 320, 50);
     progressBox.y = this.sys.game.config.width/2
     progressBox.x = this.sys.game.config.height/2
     
     
     //create loading screen 
     this.load.on('progress', function (value) {
     console.log(value);
     progressBar.clear();
     progressBar.fillStyle(0xffffff, 1);
     progressBar.fillRect(250, 280, 300 * value, 30);
     
 });
 
             
 this.load.on('fileprogress', function (file) {
     console.log(file.src);
 });
  
     this.load.on('complete', function () {
         console.log('complete');
         progressBar.destroy();
         progressBox.destroy();
         loadingText.destroy();
         });
     
     var width = this.cameras.main.width;
     var height = this.cameras.main.height;
     var loadingText = this.make.text({
         x: width / 2,
         y: height / 2 - 50,
         text: ''+key,
         style: {
             font: '20px monospace',
             fill: '#ffffff'
         }
     });
 loadingText.setOrigin(0.5, 0.5);


};