/*globals Phaser */

(function() {
    "use strict"

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
    var frameWidthPixels = 128;
    var frameHeightPixels = 128;
    var frameCount = 8;
    
    function preload() {
        
        game.load.spritesheet('dragon', 'assets/dragon.png', frameWidthPixels, frameHeightPixels, frameCount);
    }
    
    function create() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var dragon = game.add.sprite(0, 0, 'dragon');
        dragon.animations.add('fly', [0,1,2,3,4,5,6,7], 10, true);
        dragon.animations.play('fly');
    }
    
    function update() {
    }
    
}());