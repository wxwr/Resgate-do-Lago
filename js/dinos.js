var dinos,dino;
var bullets, bullet;
var bulletTime = 0;
var sosso,osso;
var qtsdinos=25;


function dinos_pre() {
	game.load.spritesheet('dino', 'sprites/caveira.png', 129.57, 80);
	game.load.spritesheet('osso', 'sprites/osso.png',50,50);
	game.load.audio('cuspir', 'sounds/cuspir_osso.mp3');
}

function dinos_create() {
	dinos = game.add.group();
	sosso = game.add.audio('cuspir');
	
	for(i=0;i<qtsdinos;i++) {
		var posx = parseInt(Math.random()*20000+50);
		
		dino = dinos.create(posx,445,'dino')

		dino.animations.add('mexe', [0,1,2,3,4,5,6], 15, true);
		dino.play('mexe');
		
		game.physics.arcade.enable(dino);
		dino.body.allowGravity = false;
		dino.body.immovable = true;
	}
	
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(25, 'osso');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
	bullets.setAll('scale.x', 0.5);
	bullets.setAll('scale.y', 0.5);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
	bullets.setAll('allowGravity', false);

	
}

function fireBullet () {
    if (game.time.now > bulletTime)
    {
       for (var i = 0; i < qtsdinos; i++) 
		{
			//if (dinos.getAt(i).alive = true){
				if (dinos.getAt(i).body.x-watrix_getx()<650 && dinos.getAt(i).body.x-watrix_getx()>0){
					sosso.play();
					bullet = bullets.getFirstExists(false);
					bullet.reset(dinos.getAt(i).body.x, dino.body.y);
					bullet.animations.add('gira', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 50, true);
					bullet.animations.play('gira');
					bullet.body.velocity.x = -parseInt(Math.random()*700);
					bullet.body.velocity.y = -parseInt(Math.random()*700);
					bulletTime = game.time.now + parseInt(Math.random()*4500);
					
				}
			//}
        }
    }
}
