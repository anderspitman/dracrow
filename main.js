/*globals Phaser */

(function() {
    "use strict"

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
    var frameWidthPixels = 128;
    var frameHeightPixels = 128;
    var frameCount = 8;
    var dragon = null;
    var movementSpeed = 2;
    
    function preload() {
        
        game.load.spritesheet('dragon', 'assets/dragon.png', frameWidthPixels, frameHeightPixels, frameCount);
    }
    
    function create() {
        
        this.data = {};
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        dragon = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
        dragon.animations.add('fly', [0,1,2,3,4,5,6,7], 10, true);
        dragon.animations.play('fly');
        dragon.anchor.x = 0.5;
        dragon.anchor.y = 0.5;
    }
    
    function update() {
        
        var cursors = game.input.keyboard.createCursorKeys();
        
        if (cursors.left.isDown) {
            dragon.angle -= 5;
        }
        else if (cursors.right.isDown) {
            dragon.angle += 5;
        }
        
        if (cursors.up.isDown) {
            console.log(dragon.rotation);
            dragon.x += Math.cos(dragon.rotation - Math.PI/2) * movementSpeed;
            dragon.y += Math.sin(dragon.rotation - Math.PI/2) * movementSpeed;
        }
        else if (cursors.down.isDown) {
            dragon.x -= Math.cos(dragon.rotation) * movementSpeed;
            dragon.y -= Math.sin(dragon.rotation) * movementSpeed;
        }

    }
    
}());