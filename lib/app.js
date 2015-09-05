(function(document){
	var ctx = document.getElementById("canvas").getContext("2d"),
		Sprites = {
			Player: 'images/sprites/player.png',
			Kaboom: 'images/sprites/kaboom.png',
			Missle: 'images/sprites/sprite-jake.png',
			Alien3: 'images/sprites/alien_3.png'
		},
		Elements = {
			Player : {
				X: 0,
				Y: 0,
				width : 100,
				height : 50,
				Sprite: null,
				MissileReady: true
			},
			Alien : {
				X: 0,
				Y: 0,
				width : 50,
				height : 50,
				DrawState: 0,
				Direction: true,
				Sprite: null	
			}
		},
		KeyCodes = {
			Enter: 13,
			Esc: 90,
			Space: 32,
			UpArrow: 38,
			DownArrow: 40,
			RightArrow: 39,
			LeftArrow: 37
		};
		Operations={
			Enter : function(){ alert('Pew!');},
			Esc: function(){ alert('Escape!');},
			Space: function(){
				if(Elements.Player.MissileReady){
					Elements.Missile = {
						X: Elements.Player.X+25,
						Y: Elements.Player.Y,
						width : 12,
						height : 24,
						DrawState: 0,
						Sprite: createSprite("Missle"),
						Speed: 2
					};
				}
				Elements.Player.MissileReady = false;
			},
			RightArrow : function(){ Elements.Jake.X += STEP;},
			LeftArrow : function(){ Elements.Jake.X -= STEP;},
			UpArrow: function(){ Elements.Jake.Y -= STEP;},
			DownArrow: function(){ Elements.Jake.Y += STEP;},
			RightArrowDown : function(){KeyStates.RightArrow=true;},
			UpArrowDown : function(){KeyStates.UpArrow=true;},
			DownArrowDown : function(){KeyStates.DownArrow=true;},
			LeftArrowDown : function(){KeyStates.LeftArrow=true;},
			RightArrowUp : function(){KeyStates.RightArrow=false;},
			UpArrowUp : function(){KeyStates.UpArrow=false;},
			DownArrowUp : function(){KeyStates.DownArrow=false;},
			LeftArrowUp : function(){KeyStates.LeftArrow=false;}
		},
		KeyStates = {
			Enter: false,
			Esc: false,
			Space: false,
			UpArrow: false,
			DownArrow: false,
			RightArrow: false,
			LeftArrow: false
		},
		createSprite = function(name){
			var sprite = new Image();
			sprite.src = Sprites[name];
			return sprite;
		};

	// Register keyboard operations and map with key codes
	Keyboard.register(KeyCodes.Enter, Operations.Enter,function(){});
	Keyboard.register(KeyCodes.Esc, Operations.Esc,function(){});
	Keyboard.register(KeyCodes.RightArrow, Operations.RightArrowDown, Operations.RightArrowUp);
	Keyboard.register(KeyCodes.LeftArrow, Operations.LeftArrowDown, Operations.LeftArrowUp);
	Keyboard.register(KeyCodes.Space,Operations.Space,function(){});
	//Keyboard.register(KeyCodes.DownArrow, Operations.DownArrowDown, Operations.DownArrowUp);
	//Keyboard.register(KeyCodes.UpArrow, Operations.UpArrowDown, Operations.UpArrowUp);

	// create the elements and add them to rendering list
	Elements.Player.Sprite = createSprite("Player");
	Elements.Alien.Sprite = createSprite("Alien3");
	// set initial locations
	Elements.Player.X = 350;
	Elements.Player.Y = 550;
	Elements.Alien.X = 300;
	Elements.Alien.Y = 50;

	var scr = new Screen(ctx, Elements);
	// start rendering process.
	scr.render();
	var gameLogic = new GameLogic(Elements, KeyStates, { 
		createSprite: createSprite,
		canvas : { height: ctx.canvas.height, width: ctx.canvas.width}
	 });
	gameLogic.StartLoop();

})(document);