(function(angular){
	"use strict";
	angular.module('myApp', [])
			.controller('myCtrl', function($scope) {
				var ctx = document.getElementById("canvas").getContext("2d");//canvas contex
				$scope.x = ctx.canvas.width/2;//shape x
				$scope.y = ctx.canvas.height/2;//shape y
				$scope.keyTest = function (evt){
					if(evt.keyCode === 13){
						alert("Pause");
					}
					if(evt.keyCode === 32){
						alert("pew!");
					}
					if(evt.keyCode === 90){
						alert("pew!");
					}
					if(evt.keyCode === 38){
						$scope.y--;
					}
					if(evt.keyCode === 40){
						$scope.y++;
					}
					if(evt.keyCode === 37){
						$scope.x--;
					}
					if(evt.keyCode === 39){
						$scope.x++;
					}//multiple key down only works if the the keys are pressed at the same time
				};
				var sprite = document.getElementById("sprite")
				sprite = new Image();
				sprite.src = 'images/sprites/sprite-jake.png';
				setInterval(function(){
					ctx.fillStyle = "#000000"
					ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height)
					ctx.drawImage(sprite, $scope.x, $scope.y);
					//ctx.fillStyle = "#FFFFFF";
					//ctx.fillRect($scope.x,$scope.y,20,20);
				},15);//canvas control - redraws every 15ms - ~66fps
			});
})(angular);