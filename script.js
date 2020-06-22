var isDrawing = false;

function init(){
    var canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

	canvas.addEventListener("mousedown", draw, false);
}

init();

function stopDraw(){
	isDrawing = false;
	console.log("stopped");
}

function draw(){
	var canvas = document.getElementById("myCanvas");
	isDrawing = true;

	if(isDrawing){
		var canvasX = event.pageX;
		var canvasY = event.pageY;

		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#00000";

		ctx.fillRect(canvasX, canvasY, 8, 8);
	}
}