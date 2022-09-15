// create a new scene
let preloadScene = new Phaser.Scene("Preload");

//init
preloadScene.init = function () {
  this.iggleLoadingScreen = iggleLoadingScreen;
  this.iggleLoadCopySpriteAtlas = iggleLoadCopySpriteAtlas;
};

// load assets
preloadScene.preload = function () {
  this.load.plugin("rexkawaseblurpipelineplugin", "lib/blurPlugin.js", true);
  this.iggleLoadCopySpriteAtlas("squatch", "/assets/sprites/");
  this.load.image("duplexCrosshair", "assets/uiElements/Duplex.png");
  this.iggleLoadingScreen("Loading required assets...");
};

preloadScene.create = function () {
  this.scene.start("ForestHunt");
};
