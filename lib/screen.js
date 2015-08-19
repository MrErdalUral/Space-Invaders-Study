(function(window){
	// constructor for screen.

	var loopTimer = 15;

	var Screen = window.Screen = function(ctx, elements){
		this.ctx = ctx;
		this.Elements = elements;
	};

	// Game loop for rendering purpose. If the algorithm parameter is set as a function then execute it with context.
	Screen.prototype.render = function(algorithm){
		var ctx = this.ctx,
			Elements = this.Elements;
		setInterval(function(){
				ctx.fillStyle = "#000000"
				ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
				// iterate all elements in the collection.
				for(var item in Elements){
					var sprite = Elements[item];

					// if the current element has a location & sprite to display start rendering.
					if(sprite.Sprite ){//removed && sprite.X && sprite.Y because starting alien from 0
						if(sprite.DrawState===0 || sprite.DrawState===1){
							ctx.drawImage(sprite.Sprite,sprite.DrawState*50,0,50,50,sprite.X,sprite.Y,50,50);
						}
						else{
							ctx.drawImage(sprite.Sprite, sprite.X, sprite.Y);
						}
						// if sprite is a disposable one then start counting for it.
						if(sprite.disposable){
							sprite.displayTime += loopTimer;
							if(sprite.displayTime > sprite.totalTime){
								// if the countdown finishes then remove the element from collection.
								delete Elements[item];
							}
						}
					}
				}
				/*
				if(typeof algorithm === "function"){
					algorithm.call(this, { elements: Elements, canvas: ctx});
				}
				*/
			},loopTimer);
	};

})(window);