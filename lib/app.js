(function(document){
	var ctx = document.getElementById("canvas").getContext("2d"),
		STEP = 10,
		KeyCodes = {
			Enter: 13,
			Esc: 90,
			Space: 32,
			UpArrow: 38,
			DownArrow: 40,
			RightArrow: 39,
			LeftArrow: 37
		},
		Sprites = {
			Jake: 'images/sprites/sprite-jake.png',
			Rose: 'images/sprites/sprite-rose.png',
			Kaboom: 'images/sprites/kaboom.png'
		},
		Elements = {
			Jake : {
				X: 0,
				Y: 0,
				Sprite: null
			},
			Rose : {
				X: 0,
				Y: 0,
				Sprite: null
			}
		}
		Operations={
			Enter : function(){ alert('Pew!');},
			Esc: function(){ alert('Escape!');},
			RightArrow : function(){ Elements.Jake.X += STEP;},
			LeftArrow : function(){ Elements.Jake.X -= STEP;},
			UpArrow: function(){ Elements.Jake.Y -= STEP;},
			DownArrow: function(){ Elements.Jake.Y += STEP;}
		},
		createSprite = function(name){
			var sprite = new Image();
			sprite.src = Sprites[name];
			return sprite;
		};

	Keyboard.register(KeyCodes.Enter, Operations.Enter);
	Keyboard.register(KeyCodes.Esc, Operations.Esc);
	Keyboard.register(KeyCodes.RightArrow, Operations.RightArrow);
	Keyboard.register(KeyCodes.LeftArrow, Operations.LeftArrow);
	Keyboard.register(KeyCodes.DownArrow, Operations.DownArrow);
	Keyboard.register(KeyCodes.UpArrow, Operations.UpArrow);
	Elements.Jake.Sprite = createSprite("Jake");
	Elements.Rose.Sprite = createSprite("Rose");
	Elements.Jake.X = ctx.canvas.height/2 - 10; 
	Elements.Rose.X = ctx.canvas.height/2;
	Elements.Rose.Y =  Elements.Jake.Y = ctx.canvas.width/2;

	var scr = new Screen(ctx, Elements);
	scr.loop(function(e){
		var elements = e.elements;
		if(elements.Rose.X === elements.Jake.X && elements.Rose.Y === elements.Jake.Y){
			elements.Rose.X -= 10;
			elements["disposable"] = {
				X: e.canvas.canvas.height/2,
				Y: e.canvas.canvas.width/2 - 250,
				Sprite : createSprite("Kaboom"),
				disposable: true,
				displayTime : 0,
				totalTime: 900
			}
		}
	});
})(document);