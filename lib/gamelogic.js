(function(window){
	/*
function(e){
		// this is where you put your game logic. Can be scalable though?
		var elements = e.elements;

		if(elements.Rose.X === elements.Jake.X && elements.Rose.Y === elements.Jake.Y){
			elements.Rose.X -= 10;
			// add a new element that will disappear after 900 milliseconds.
			elements["disposable"] = {
				X: e.canvas.canvas.height/2,
				Y: e.canvas.canvas.width/2 - 250,
				Sprite : createSprite("Kaboom"),
				disposable: true,
				displayTime : 0,
				totalTime: 900
			}
		}
	}
	*/

	var gameLogic = function(elements, keyboard, context){
		this.Elements = elements;
		this.Keyboard = keyboard;
		this.Context = context;
	};

	gameLogic.prototype.StartLoop = function(){
		var elements = this.Elements,
			context = this.Context;
		setInterval(function(){
			// this is where you put your game logic. Can be scalable though?
			if(elements.Rose.X === elements.Jake.X && elements.Rose.Y === elements.Jake.Y){
				elements.Rose.X -= 10;
				// add a new element that will disappear after 900 milliseconds.
				elements["disposable"] = {
					X: context.canvas.height/2,
					Y: context.canvas.width/2 - 250,
					Sprite : context.createSprite("Kaboom"),
					disposable: true,
					displayTime : 0,
					totalTime: 900
				};
			}
		},50);
	};

	window.GameLogic = gameLogic;
})(window);