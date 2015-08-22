(function(window){
	var STEP = 1, //movement speed of the player higher values will cause choppy movement
		TICKS =1, //determines how many ms on iteration of gamelogic loop takes. 
		ALIEN_STATE_COUNTER_TRESHOLD=200;//determines how many steps aliens wait before taking a step.
		
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
				elements.Player.Y -= STEP;
			}
			if(keyStates.DownArrow === true){
				elements.Player.Y += STEP;
			}
			if(keyStates.RightArrow === true && elements.Player.X <= 700){
				elements.Player.X += STEP;
			}
			if(keyStates.LeftArrow === true && elements.Player.X >= 0){
				elements.Player.X -= STEP;
			}
			// this is where you put your game logic. Can be scalable though?
			//if(elements.Rose.X === elements.Player.X && elements.Rose.Y === elements.Player.Y){
			//	elements.Rose.X -= 10;
				// add a new element that will disappear after 900 milliseconds.
				//elements["disposable"] = {
					//X: context.canvas.height/2,
					//Y: context.canvas.width/2 - 250,
					//Sprite : context.createSprite("Kaboom"),
					//disposable: true,
					//displayTime : 0,
					//totalTime: 900
				//};
			//}
			if(elements.Missile){
				elements.Missile.Y -= elements.Missile.Speed;
				if(elements.Missile.Y < 0){
					delete elements.Missile;
					elements.Player.MissileReady = true;
				}
			}
			if(drawStateCounter >= ALIEN_STATE_COUNTER_TRESHOLD){
				elements.Alien.DrawState = (elements.Alien.DrawState+1)%2;
				if(elements.Alien.Direction===true){
					if(elements.Alien.X >= 750){
						elements.Alien.X = 750;
						elements.Alien.Y += 50;
						elements.Alien.Direction = false;
						ALIEN_STATE_COUNTER_TRESHOLD = ALIEN_STATE_COUNTER_TRESHOLD*4/5;
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
						ALIEN_STATE_COUNTER_TRESHOLD = ALIEN_STATE_COUNTER_TRESHOLD*4/5;
					}
					else{
						elements.Alien.X -= 10;
					}
				}
				drawStateCounter = 0;
			}
			drawStateCounter+=1;
		},TICKS);
	};

	window.GameLogic = gameLogic;
})(window);
