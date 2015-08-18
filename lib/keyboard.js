(function(window){
	var Keyboard = function(){
		
	}, 
	LogPrefix= "KEYBOARD EVENT: ",
	downOperations = {},
	upOperations = {};

	Keyboard.prototype.register = function(keyCode, downOperation, upOperation){
		downOperations[keyCode] = downOperation || function(){};
		upOperations[keyCode] = upOperation || function(){};
	};
	Keyboard.prototype.downTrigger = function(keyCode){
		console.log(LogPrefix + keyCode + " pressed.");
		if(downOperations[keyCode]){
			downOperations[keyCode]();
			console.log(LogPrefix + keyCode + " triggered.");
		}
	};
	Keyboard.prototype.upTrigger = function(keyCode){
		console.log(LogPrefix + keyCode + " released.");
		if(upOperations[keyCode]){
			upOperations[keyCode]();
			console.log(LogPrefix + keyCode + " triggered.");
		}
	};
	var keyboard = window.Keyboard = new Keyboard();
	
	window.document.onkeydown = function(evt){
		keyboard.downTrigger(evt.keyCode);
	};
	window.document.onkeyup = function(evt){
		keyboard.upTrigger(evt.keyCode);
	};
})(window);