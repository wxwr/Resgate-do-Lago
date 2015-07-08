var watrix;
var tiros,tiro,tempoTiro=0,satirou;

function watrix_pre() {
	game.load.spritesheet('watrix', 'sprites/watrix.png', 81, 110);
	game.load.spritesheet('tiro', 'sprites/gota64x64.png', 64, 64);
	game.load.audio('atirou', 'sounds/tiro.mp3');
}

function watrix_create() {
	watrix = game.add.sprite(10,220,'watrix');

	satirou = game.add.audio('atirou');
	
	watrix.animations.add('anda', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 13, true);
	watrix.animations.add('andat', [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 13, true);
	
	game.physics.arcade.enable(watrix);
	
	watrix.body.collideWorldBounds = true;

	game.physics.arcade.gravity.y = 1000;
	
	
	tiros = game.add.group();
    tiros.enableBody = true;
    tiros.physicsBodyType = Phaser.Physics.ARCADE;
    tiros.createMultiple(10, 'tiro');
    tiros.setAll('anchor.x', 0.5);
    tiros.setAll('anchor.y', 1);
	tiros.setAll('scale.x', 0.5);
	tiros.setAll('scale.y', 0.5);
    tiros.setAll('outOfBoundsKill', true);
    tiros.setAll('checkWorldBounds', true);
	tiros.setAll('allowGravity', false);
	
}

function watrix_para() {
	watrix.animations.stop('anda');
	watrix.body.velocity.x = 0;
}

function watrix_anda(passo) {
	if (passo<0){
		watrix.animations.play('andat');
	}
	else{
		watrix.animations.play('anda');
	}
	watrix.body.x += passo/30;
}

function watrix_pula(passo) {
	if (passo<0){
		watrix.animations.play('andat');
	}
	else{
		watrix.animations.play('anda');
	}
	
	watrix.animations.play('anda');
	watrix.body.velocity.y = passo;				

}

function watrix_getx(){
	return watrix.body.x;
}

function watrix_gety(){
	return watrix.body.y;
}

function watrix_atira() {
		satirou.play();
		tiro = tiros.getFirstExists(false);
		tiro.reset(watrix.body.x+50, watrix.body.y+50);
		tiro.animations.add('gira', [33,34,35,36,37,38], 25, true);
		tiro.animations.play('gira');
		tiro.body.velocity.x = 500;
		tiro.body.velocity.y = -450;
		tempoTiro = game.time.now + 500;
}