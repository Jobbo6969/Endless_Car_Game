window.onload = function() {

//create a new phaser game, with dimensions of 800px and 600px tall
var game = new phaser.game(800, 600, phaser.auto, '',{preload: preload, create: create, update: update });

//preload function, where we can load all assets that will be used
funtion preload() {
  //game.load.image('nameInCode', 'assets/NameFolder.ext');
  //game.load.image('backround', 'assets/namefolder.ext');
  //game.load.image('ongoingtraffic', 'assets/namefolder.ext');
}

//create function, where all the inilial objects are created
function create() {

}

//this runs every frame
function update() {

}
};
