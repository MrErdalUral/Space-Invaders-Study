(function(window){
	var Screen = window.Screen = function(ctx, elements){
		this.ctx = ctx;
		this.Elements = elements;
	};

	Screen.prototype.loop = function(algorithm){
		var ctx = this.ctx,
			Elements = this.Elements;
		setInterval(function(){
				ctx.fillStyle = "#000000"
				ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
				for(var item in Elements){
					var sprite = Elements[item]
					if(sprite.Sprite && sprite.X && sprite.Y){
						ctx.drawImage(sprite.Sprite, sprite.X, sprite.Y);
						if(sprite.disposable){
							sprite.displayTime += 15;
							if(sprite.displayTime > sprite.totalTime){
								delete Elements[item];
							}
						}
					}
				}
				if(typeof algorithm === "function"){
					algorithm.call(this, { elements: Elements, canvas: ctx});
				}
			},15);
	};

})(window);