//Creates variable for our game scene.
let forestHuntScene = new Phaser.Scene('ForestHunt');

forestHuntScene.init=function(){
  this.gameW = this.sys.game.config.width;
  this.gameH = this.sys.game.config.height;
  this.loadForest=iggleLoadForest;
  this.createForest=iggleCreateForest;
  this.animations=iggleAnimations;
  this.iggleLoadingScreen=iggleLoadingScreen;
  this.cameraBobY=Phaser.Math.Between(-15,15);
  this.cameraBobX=Phaser.Math.Between(-15,15);
  this.cameraRotationBob=Phaser.Math.Between(-1,1);
  this.spotted=false;
};




forestHuntScene.preload=function(){

this.loadForest();
  this.iggleLoadingScreen('Loading forest...');



};
// create after preload
forestHuntScene.create = function(){
  this.animations('squatch');
this.createForest();
//scope or minimap

this.scope= this.add.circle(this.cameras.main.x+700,this.cameras.main.y+600,200,0x000000)
this.scopeCam=this.cameras.add(this.cameras.main.x+500, this.cameras.main.y+400, 400,400);
this.scopeCam.zoom=3;
this.scope.depth=102;
this.cameras.main.zoom=2;

this.scopeCam.setMask(new Phaser.Display.Masks.BitmapMask(this, this.scope));
this.scopeCam.setBounds(-600,0,2000,625);
//this.scopeCam.mask.invertAlpha=true;
this.scopeCam.startFollow(this.crosshair);
this.scope.visible=false;

};


//move camera left and right
forestHuntScene.update = function(){
if(this.cursors.space.isDown){
if(this.scopeCam==null){this.scopeCam=this.cameras.add(this.cameras.main.x+500, this.cameras.main.y+400, 400,400);
  this.scopeCam.zoom=3;
  this.scope.depth=102;
  this.cameras.main.zoom=2;
  
  this.scopeCam.setMask(new Phaser.Display.Masks.BitmapMask(this, this.scope));
  this.scopeCam.setBounds(-600,0,2000,625);
  //this.scopeCam.mask.invertAlpha=true;
  this.scopeCam.startFollow(this.crosshair);}
  else{
    this.cameras.remove(this.scopeCam)
    this.scopeCam=null;
  }
this.cursors.space.isDown=false;
};

if(this.cursors.left.isDown){this.cameras.main.scrollX--;this.hunter.x--;};
if(this.cursors.right.isDown){this.cameras.main.scrollX++;this.hunter.x++;};
if(this.cursors.up.isDown){this.cameras.main.zoom+=.01;
this.cameras.main.scrollY+=.5;
};
if(this.cursors.down.isDown){this.cameras.main.zoom-=.01;
  this.cameras.main.scrollY-=.5;};
if(this.cameras.main.zoom<2){this.cameras.main.zoom=2};
if(this.cameras.main.zoom>3.2){this.cameras.main.zoom=3.2};
if(this.cameras.main.scrollY>27.5){this.cameras.main.scrollY=27.5};

if(this.hunter.x<-200){this.hunter.x=-200};
if(this.hunter.x>1000){this.hunter.x=1000};

//make objects vanish on approach
let objects=this.allObjects.getChildren();
let numObjects=objects.length;

for(i=0;i<numObjects;i++){
if(this.hunter.depth<objects[i].depth){objects[i].visible=false}
else{objects[i].visible=true;};
if(objects[i].depth<0){objects[i].visible=true};


};
//set hunter depth for squatch tracking
if(this.cameras.main.zoom>=3){if(this.squatch.depth<0){this.hunter.depth=this.squatch.depth+1}else{this.hunter.depth=4};};
if(this.cameras.main.zoom<3&&this.cameras.main.zoom>=2.8){this.hunter.depth=5};
if(this.cameras.main.zoom<2.8&&this.cameras.main.zoom>2.6){this.hunter.depth=6};
if(this.cameras.main.zoom<2.6&&this.cameras.main.zoom>2.4){this.hunter.depth=7};
if(this.cameras.main.zoom<2.4&&this.cameras.main.zoom>2.2){this.hunter.depth=8};
if(this.cameras.main.zoom<2.2){this.hunter.depth=100};
if(this.hunter.depth<=this.squatch.depth&&this.spotted==false){this.squatch.visible=false}else{this.squatch.visible=true};

if(this.scopeCam!=null){this.scopeCam.zoom=this.cameras.main.zoom*2};












this.sys.displayList.getChildren()

iggleResize();
};