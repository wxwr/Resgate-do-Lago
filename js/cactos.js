var cactos,cacto;


function cactos_pre() {
	game.load.spritesheet('cacto', 'sprites/cactos.png', 157, 126);
}

function cactos_create() {
		
	cactos = game.add.group();
	
	for(i=0;i<50;i++) {
		var posx = parseInt(Math.random()*20000+50);
		var posy = parseInt(Math.random()*500);
		
		cacto = cactos.create(posx,posy,'cacto')
		cacto.scale.x = 0.6;
		cacto.scale.y = 0.6;
		cacto.animations.add('mexe', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73], 5, true);
		cacto.play('mexe');			

		game.physics.arcade.enable(cacto);
		cacto.body.allowGravity = false;
	}
	
}