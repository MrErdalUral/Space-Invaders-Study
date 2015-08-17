(function(window){
	var Keyboard = function(){
		
	}, 
	LogPrefix= "KEYBOARD EVENT: ",
	operations = {};

	Keyboard.prototype.register = function(keyCode, operation){
		operations[keyCode] = operation || function(){};
	};
	Keyboard.prototype.trigger = function(keyCode){
		console.log(LogPrefix + keyCode + " pressed.");
		if(operations[keyCode]){
			operations[keyCode]();
			console.log(LogPrefix + keyCode + " triggered.");
		}
	};
	var keyboard = window.Keyboard = new Keyboard();
	
	window.document.onkeydown = function(evt){
		keyboard.trigger(evt.keyCode);
	};
})(window);