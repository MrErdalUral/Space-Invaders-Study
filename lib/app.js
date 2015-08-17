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
		x = ctx.canvas.width/2,
		y = ctx.canvas.height/2,
		Operations={
			Enter : function(){ alert('Pew!');},
			Esc: function(){ alert('Escape!');},
			RightArrow : function(){ x += STEP;},
			LeftArrow : function(){x-=STEP;},
			UpArrow: function(){y-=STEP;},
			DownArrow: function(){y+=STEP;}
		},
		createSprite = function(){
			var sprite = document.getElementById("sprite")
			sprite = new Image();
			sprite.src = 'images/sprites/sprite-jake.png';
			return sprite;
		},
		loop = function(ctx, sprite){
			setInterval(function(){
				ctx.fillStyle = "#000000"
				ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height)
				ctx.drawImage(sprite, x, y);
			},15);
		};

	var sprite = createSprite();
	Keyboard.register(KeyCodes.Enter, Operations.Enter);
	Keyboard.register(KeyCodes.Esc, Operations.Esc);
	Keyboard.register(KeyCodes.RightArrow, Operations.RightArrow);
	Keyboard.register(KeyCodes.LeftArrow, Operations.LeftArrow);
	Keyboard.register(KeyCodes.DownArrow, Operations.DownArrow);
	Keyboard.register(KeyCodes.UpArrow, Operations.UpArrow);
	loop(ctx, sprite);
})(document);