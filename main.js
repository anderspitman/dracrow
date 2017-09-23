/*globals Phaser */

(function() {
  "use strict"

  var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', {
    preload: preload,
    create: create,
    update: update
  });

  var frameWidthPixels = 128;
  var frameHeightPixels = 128;
  var frameCount = 8;
  var dragon = null;
  var movementSpeed = 8;
  var rotationSpeed = 7.5;
  var startRotation = Math.PI / 2;
  
  function preload() {
      
    game.load.spritesheet('dragon', 'assets/dragon.png', frameWidthPixels,
      frameHeightPixels, frameCount);
  }
  
  function create() {
      
    this.data = {};
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    dragon = game.add.sprite(game.world.centerX, game.world.centerY,
      'dragon');
    dragon.animations.add('fly', [0,1,2,3,4,5,6,7], 10, true);
    dragon.animations.play('fly');
    dragon.anchor.x = 0.5;
    dragon.anchor.y = 0.5;
  }
  
  function update() {
    
    var cursors = game.input.keyboard.createCursorKeys();
    
    if (cursors.left.isDown) {
      dragon.angle -= rotationSpeed;
    }
    else if (cursors.right.isDown) {
      dragon.angle += rotationSpeed;
    }
    
    if (cursors.up.isDown) {
      moveForward(dragon);
    }
    else if (cursors.down.isDown) {
      moveBackward(dragon);
    }
  }

  function moveForward(sprite) {

    var adjustedRotation = sprite.rotation - startRotation;
    sprite.x += calculateX(adjustedRotation);
    sprite.y += calculateY(adjustedRotation);
  }

  function moveBackward(sprite) {

    var adjustedRotation = sprite.rotation - startRotation;
    sprite.x -= calculateX(adjustedRotation);
    sprite.y -= calculateY(adjustedRotation);
  }

  function calculateX(rotation) {
    return Math.cos(rotation) * movementSpeed;
  }

  function calculateY(rotation) {
    return Math.sin(rotation) * movementSpeed;
  }

}());
