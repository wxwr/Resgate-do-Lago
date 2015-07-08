var game;
var teclado,espaco;

var passo = 125;
var pulo = 750;
var jumpTime = 1000;

var score = 200;
var newscore = 200;
var scoreString = '', scoreText;
var hscore = 200, hscoreString = '', hscoreText;
var lives, live;
var stateText, frase, frases=[];
var historyString = 'Os Watrixes vivem embaixo d’água em um lago profundo e calmo. \nPara a evolução da água existe uma essência que fica no ponto central do lago. \nEssa essência é a chave para a sobrevivência do lago e de sua sociedade.\nApós uma bela noite de sono a sociedade acorda e se depara com o baixo volume de água e \ncom a seca se aproximando cada vez mais… \nEntão descobrem que a essência do lago sumiu.\n\nO Watrix Blue com a sua garra e coragem vai à superfície, pois somente lá poderá estar a essência. \nEle se depara com algumas poças d’água e uma paisagem de seca…\nAo se deparar com esse cenário ameaçador o Watrix Blue terá que ser rápido ao extremo para \nrecuperar a essência do seu lago e salvar a sua sociedade.\nAlgumas surpresas aparecerão em seu percurso, mas a sua confiança e perseverança está \nacima de tudo...';
var historyString1 = '', historyText;
var historybegin = false;
var s =0;

var bg;
var startgame = false;

var scomeca,scacto,spegou, smorreu;

window.onload = function() {
	
}

var game = new Phaser.Game(1000, 650, Phaser.AUTO, '', 
		{ boot: boot, preload: preload, create: create, update: update });


function boot () {
	var Ball = {
		_WIDTH: 320,
		_HEIGHT: 480
	};
	Ball.Boot = function(game) {};
	Ball.Boot.prototype = {
		preload: function() {
			this.load.image('preloaderBg', 'imagens/ceu.png');
		},
		create: function() {
			this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.scale.pageAlignHorizontally = true;
			this.game.scale.pageAlignVertically = true;
			this.game.state.start('preload');
		}
	};
}	
	
function preload () {
	
    fundos_pre();
	watrix_pre();
	gotas_pre();
	cactos_pre();
	dinos_pre();
	
	game.load.spritesheet('buttonstart', 'sprites/start.png', 200, 55);
	game.load.spritesheet('buttoncredit', 'sprites/staff.png', 200, 55);
	game.load.spritesheet('buttonrestart', 'imagens/restart.png', 512, 512);
    game.load.image('background','imagens/startbg.jpg');

	game.load.audio('comeca', 'sounds/jogo_comeca.mp3');
	game.load.audio('cacto', 'sounds/pegou_cacto.mp3');
	game.load.audio('morreu', 'sounds/morreu.mp3');
	game.load.audio('fase', 'sounds/passou_fase.mp3');
	game.load.audio('pegou', 'sounds/pegou_gota.mp3');
	game.load.audio('ossada', 'sounds/ossada.mp3');

	teclado = game.input.keyboard.createCursorKeys();

	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
   
    espaco = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function create () {
	
	game.input.gamepad.start();
		
	scomeca = game.add.audio('comeca');
	scomeca.play('',1,true);
	
	scacto = game.add.audio('cacto');
	smorreu = game.add.audio('morreu');
	spegou = game.add.audio('pegou');
	sossada = game.add.audio('ossada');
	sfase = game.add.audio('fase');
	
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	game.physics.arcade.gravity.y = 0;
	
	fundo_create();
	watrix_create();
	gotas_create();
	cactos_create();
	dinos_create();
	
	button = game.add.button(game.world.centerX - 100, 520, 'buttonstart', actionOnClick, this, 2, 1, 0);
	button.animations.add('muda', [0, 1], 10, true);
	button.alpha = 0;
	
	button.onInputOver.add(over, this);
	button.onInputOut.add(out, this);
	button.onInputUp.add(up, this);
	
	restartbt = game.add.button(game.world.centerX - 100, 350, 'buttonrestart', restartclick, this, 2, 1, 0);
	restartbt.visible=false;
	restartbt.scale.x = 0.5;
	restartbt.scale.y = 0.5;
		
	credit = game.add.button(game.world.centerX - 240, 540, 'buttoncredit', creditclick, this, 2, 1, 0);
	credit.animations.add('muda', [0, 1], 10, true);
	credit.scale.x = 1.2;
	credit.scale.y = 1.2;
	credit.visible=false;
		
	game.world.setBounds(0, 0, 50000, 650);
	
	game.camera.follow(watrix);

	scoreString = 'Score : ';
	scoreText = game.add.text(10, 10, scoreString + score, { font: '30px Verdana', fill: '#4B0082', fontWeight: 'bold' });
	scoreText.fixedToCamera = true;
	
	hscoreString = 'Highest Score : ';
	hscoreText = game.add.text(225, 10, hscoreString + hscore, { font: '40px Verdana', fill: '#8B0A50', fontWeight: 'bold' });
	hscoreText.fixedToCamera = true;
	
	historyText = game.add.text(75, 75, historyString1, { font: '14px Verdana', fill: '#4B0082', fontWeight: 'bold' });
	
	lives = game.add.group();
	game.add.text(700, 10, 'Vidas : ', { font: '40px Verdana', fill: '#4B0082' }).fixedToCamera = true;
	
	stateText = game.add.text(watrix_getx()+480,watrix_gety(),' ', { font: '96px Verdana', fill: '#f00', fontWeight: 'bold' });
	stateText.anchor.setTo(0.5, 0.5);
	stateText.alpha = 0.1;
	stateText.visible = false;
	stateText.fixedToCamera = true;
	game.add.tween(stateText).to( { alpha: 1 }, 200, "Linear", true,0,-1,true);
	
	frase = game.add.text(watrix_getx()+200,watrix_gety()-75,'', { font: '24px Verdana', fill: '#f00', fontWeight: 'bold' });
	frase.fixedToCamera = true;
	frase.visible = false;
	frases[0] = 'Talvez você tenha gastado muita água!';
	frases[1] = '  Esqueceu a torneira pingando hoje?';
	frases[2] = 'Desligou o chuveiro para se ensaboar?';
	frases[3] = 'Deixou a torneira aberta ao escovar os dentes né?';
	frases[4] = 'Já olhou o nível da cantareira hoje?';
	frases[5] = '   Fez xixi no banho ou na privada?';
	frases[6] = 'Acho que você está tomando banho demais!';
	frases[7] = 'Lavou os pratos com a torneira ligada né!';
	frases[8] = 'Acho que você lavou o carro 30x esse mês!!';
	frases[9] = 'E aquela goteira quando você vai arrumar?';
	
	for (var i = 0; i < 5; i++) {
		var vidas = lives.create(850 + (30 * i), 60, 'watrix');
		vidas.scale.x = 0.5
		vidas.scale.y = 0.5
		vidas.anchor.setTo(0.5, 0.5);
		vidas.alpha = 0.8;
		vidas.fixedToCamera = true;
	}
}

function update () {
	game.physics.arcade.overlap(bullets, watrix, balaperdida, null, this);
	game.physics.arcade.overlap(tiros, cactos, collisiontiro, null, this);
	//game.physics.arcade.overlap(tiros, dinos, collisiontiro, null, this);
	
	game.physics.arcade.overlap(gotas, watrix, collisionbala, null, this);
	
	game.physics.arcade.overlap(cactos, watrix, collisioncac, null, this);
	
	game.physics.arcade.collide(cactos, watrix);
	game.physics.arcade.collide(dinos, watrix);
	game.physics.arcade.collide(chao, watrix);
	
	if (startgame){
		if (espaco.isDown && newscore>=50 && game.time.now > tempoTiro){
			watrix_atira();
			newscore = newscore - 50;
			score = score - 50;
			scoreText.text = scoreString + newscore;
		}

		if (teclado.up.isDown && game.time.now > jumpTime) {
					watrix_pula(-750);
					jumpTime = game.time.now + 1550
			}
			else {
				if (teclado.left.isDown) {
					watrix_anda(-passo);
				}
				else {
					if (teclado.right.isDown) {
						watrix_anda(passo);
					}
					else {
						watrix_para();
					}
				}
			}
		fireBullet();
	}
	
	if (!historybegin && historyString1.length<historyString.length) {
		historyString1 = historyString1 + historyString.charAt(s);
		if (historyString1.length > 800){
			game.add.tween(button).to( { alpha: 1 }, 2500, Phaser.Easing.Linear.None, true);
		}
		historyText.setText(historyString1);
		s=s+1;
	}
	
	if (newscore > score){
		score += 1;
		scoreText.text = scoreString + score;
	}
}


function collisionbala (watrix, gotas) {
    gotas.kill();
	newscore = score + 100;
	spegou.play();
	
	if (hscore < newscore){
		hscoreText.alpha = 0;
		var hightween = game.add.tween(hscoreText).to( { alpha: 1 }, 200, "Linear", true,0);
		hightween.repeat(5, 100);
	}
}

function collisioncac (watrix, cactos) {
    cactos.kill();
	scacto.play();
	score -= 75;
	newscore -= 75;
    scoreText.text = scoreString + score;
}

function collisiontiro (tiro, qlq) {
    tiro.kill();
	qlq.kill();
}

function balaperdida (watrix,bullets) {
    bullets.kill();
	sossada.play();
    live = lives.getFirstAlive();

    if (live) {
        live.kill();
    }
	
    if (lives.countLiving() < 1) {
		startgame=false;
        smorreu.play();
		watrix.kill();

        stateText.text="GAME OVER";
		stateText.visible = true;
		frase.setText(frases[parseInt(Math.random()*10)]);
		frase.visible = true;
	
		credit.visible=true
		credit.x = game.camera.x +750
		
		restartbt.visible=true;
		restartbt.x = game.camera.x +400
    }
}


function restart () {
    lives.callAll('revive');
    
    watrix.revive();

	watrix.x = 50;
	watrix.y = 200;
	
    stateText.visible = false;
	frase.visible = false;
	
	if (hscore < newscore){
		hscore = newscore;
		hscoreText.text = hscoreString + hscore;
		sfase.play();
	}
	
	score = 200;
	newscore = 200;
	scoreText.text = scoreString + score;

	gotas.destroy();
	gotas_create();
	cactos.destroy();
	cactos_create();
	dinos.destroy();
	dinos_create();
	
	restartbt.visible=false;
	credito.visible=false;
	credit.visible=false;
}


function up() {
    watrix.animations.play('muda');
}

function over() {
    
}

function out() {
    
}

function actionOnClick () {
	startgame=true;
	button.visible = false;
	historybegin = true;
	historyText.text='';
}

function creditclick () {
	startgame=false;
	credito.x = game.camera.x;
	credito.visible=true;
	credito.y = 650
	tween = game.add.tween(credito).to( { y: -2850 }, 20000, "Linear", true, -1, false);
	gotas.destroy();
	cactos.destroy();
	bullet.destroy();
	bullets.destroy();
	dinos.destroy();
	restartbt.alpha = 0.5
	stateText.visible = false;
	frase.visible = false;
	credit.visible = false;
}

function restartclick () {
	startgame=true;
	restart();
}