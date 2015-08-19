(function(window){
	var STEP = 1,
		STEPS_PER_SECOND=100;
		
	var gameLogic = function(elements, keyStates, context){
		this.Elements = elements;
		this.KeyStates = keyStates;
		this.Context = context;
	};

	gameLogic.prototype.StartLoop = function(){
		var elements = this.Elements,
			context = this.Context,
			keyStates = this.KeyStates,
			drawStateCounter = 0;
		setInterval(function(){
			if(keyStates.UpArrow === true){
				elements.Jake.Y -= STEP;
			}
			if(keyStates.DownArrow === true){
				elements.Jake.Y += STEP;
			}
			if(keyStates.RightArrow === true){
				elements.Jake.X += STEP;
			}
			if(keyStates.LeftArrow === true){
				elements.Jake.X -= STEP;
			}
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
			if(drawStateCounter === 30){
				elements.Alien.DrawState = (elements.Alien.DrawState+1)%2;
				if(elements.Alien.Direction===true){
					if(elements.Alien.X >= 750){
						elements.Alien.X = 750;
						elements.Alien.Y += 50;
						elements.Alien.Direction = false;
					}
					else{
						elements.Alien.X += 10;
					}
				}
				else{
					if(elements.Alien.X <= 0){
						elements.Alien.X = 0;
						elements.Alien.Y += 50;
						elements.Alien.Direction = true;
					}
					else{
						elements.Alien.X -= 10;
					}
				}
				drawStateCounter = 0;
			}
			drawStateCounter+=1;
		},1000/STEPS_PER_SECOND);
	};

	window.GameLogic = gameLogic;
})(window);
