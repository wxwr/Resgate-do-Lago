var fundos = [],cursor, chao =[];

function fundos_pre() {

	game.load.image('chao', 'imagens/chao.png');
	game.load.image('chao1', 'imagens/chao1.png');
	game.load.image('chao2', 'imagens/chao2.png');
	game.load.image('chao3', 'imagens/chao3.png');
	game.load.image('cursor', 'imagens/arrow_keys.gif');
    game.load.image('fundo1', 'imagens/fundoinicio.png');
    game.load.image('fundo2', 'imagens/fundo1.png');
    game.load.image('fundo3', 'imagens/fundo2.png');
	game.load.image('fundo4', 'imagens/fundo3.png');
    game.load.image('ceu', 'imagens/ceu.png');
	game.load.audio('tema', 'sounds/tema_fundo.mp3');
	
	game.load.image('credito', 'imagens/credito.png');
	
}

function fundo_create() {

	music = game.sound.play('tema');
	
	ceu = game.add.sprite(0, 0, 'ceu');
	ceu.scale.x = 1.15
	ceu.scale.y = 5.5
	ceu.fixedToCamera = true;
	
	fundos[0] = game.add.sprite(0, 0, 'fundo1');
	fundos[0].alpha = 0;
    game.add.tween(fundos[0]).to( { alpha: 1 }, 18000, Phaser.Easing.Linear.None, true);
		
    fundos[1] = game.add.sprite(999, 0, 'fundo2');
    fundos[2] = game.add.sprite(1999, 0, 'fundo2');
    fundos[3] = game.add.sprite(2999, 0, 'fundo3');
    fundos[4] = game.add.sprite(3999, 0, 'fundo2');
	fundos[5] = game.add.sprite(4999, 0, 'fundo2');
	fundos[6] = game.add.sprite(5999, 0, 'fundo3');
    fundos[7] = game.add.sprite(6999, 0, 'fundo2');
    fundos[8] = game.add.sprite(7999, 0, 'fundo2');
    fundos[9] = game.add.sprite(8999, 0, 'fundo3');
    fundos[10] = game.add.sprite(9999, 0, 'fundo2');
	fundos[11] = game.add.sprite(10999, 0, 'fundo3');
    fundos[12] = game.add.sprite(11999, 0, 'fundo2');
    fundos[13] = game.add.sprite(12999, 0, 'fundo3');
    fundos[14] = game.add.sprite(13999, 0, 'fundo3');
    fundos[15] = game.add.sprite(14999, 0, 'fundo2');
	fundos[16] = game.add.sprite(15999, 0, 'fundo3');
    fundos[17] = game.add.sprite(16999, 0, 'fundo2');
    fundos[18] = game.add.sprite(17999, 0, 'fundo3');
    fundos[19] = game.add.sprite(18999, 0, 'fundo2');
    fundos[20] = game.add.sprite(19999, 0, 'fundo3');
	
	for (var i = 0; i < 21; i++) {
		fundos[i].scale.y = 0.73;
	}
	
    chao[0] = game.add.sprite(0, 525, 'chao');
	chao[1] = game.add.sprite(999, 525, 'chao1');
	chao[2] = game.add.sprite(1999,525, 'chao');
	chao[3] = game.add.sprite(2999,525, 'chao1');
	chao[4] = game.add.sprite(3999,525, 'chao');
	chao[5] = game.add.sprite(4999,525, 'chao1');
	chao[6] = game.add.sprite(5999,525, 'chao1');
	chao[7] = game.add.sprite(6999,525, 'chao');
	chao[8] = game.add.sprite(7999,525, 'chao1');
	chao[9] = game.add.sprite(8999,525, 'chao');
	chao[10] = game.add.sprite(9999, 525, 'chao1');
	chao[11] = game.add.sprite(10999, 525, 'chao');
	chao[12] = game.add.sprite(11999, 525, 'chao1');
	chao[13] = game.add.sprite(12999, 525, 'chao1');
	chao[14] = game.add.sprite(13999, 525, 'chao');
	chao[15] = game.add.sprite(14999, 525, 'chao');
	chao[16] = game.add.sprite(15999, 525, 'chao1');
	chao[17] = game.add.sprite(16999, 525, 'chao');
	chao[18] = game.add.sprite(17999, 525, 'chao1');
	chao[19] = game.add.sprite(18999, 525, 'chao');
	chao[20] = game.add.sprite(19999, 525, 'chao1');
	
	chao[21] = game.add.sprite(-20, 420, 'chao2');
	chao[22] = game.add.sprite(999, 420, 'chao3');
	chao[23] = game.add.sprite(1999,420, 'chao2');
	chao[24] = game.add.sprite(2999,420, 'chao3');
	chao[25] = game.add.sprite(3999,420, 'chao3');
	chao[26] = game.add.sprite(4999,420, 'chao2');
	chao[27] = game.add.sprite(5999,420, 'chao3');
	chao[28] = game.add.sprite(6999,420, 'chao2');
	chao[29] = game.add.sprite(7999,420, 'chao2');
	chao[30] = game.add.sprite(8999,420, 'chao3');
	chao[31] = game.add.sprite(9999, 420, 'chao2');
	chao[32] = game.add.sprite(10999, 420, 'chao3');
	chao[33] = game.add.sprite(11999, 420, 'chao2');
	chao[34] = game.add.sprite(12999, 420, 'chao2');
	chao[35] = game.add.sprite(13999, 420, 'chao3');
	chao[36] = game.add.sprite(14999, 420, 'chao3');
	chao[37] = game.add.sprite(15999, 420, 'chao2');
	chao[38] = game.add.sprite(16999, 420, 'chao3');
	chao[39] = game.add.sprite(17999, 420, 'chao2');
	chao[40] = game.add.sprite(18999, 420, 'chao3');
	chao[41] = game.add.sprite(19999, 420, 'chao2');
	
	
	for (var i = 0; i < 21; i++) {
		game.physics.arcade.enable(chao[i]);
		chao[i].body.allowGravity = false;
		chao[i].body.immovable = true;
		chao[i].scale.x = 1.1;
		chao[i+21].scale.x = 1.1;
	}
	
	
	cursor = game.add.sprite(400, 15, 'cursor');
	cursor.alpha = 0;
    game.add.tween(cursor).to( { alpha: 1 }, 40000, Phaser.Easing.Linear.None, true);

	credito = game.add.sprite(-1000, 100, 'credito');
}

