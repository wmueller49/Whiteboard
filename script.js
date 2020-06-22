var isMouseDown = false;
var canvasX = 0;
var canvasY = 0;
var cursorSize = 8;

var isSquare = true;
var isCircle = false;

var colorVal = "#000000";
var offsetHeight = document.getElementById("interface").offsetHeight;

var slider = document.getElementById("myRange");

slider.oninput = function(){
	cursorSize = slider.value;
}

function init(){

    var canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

	canvas.addEventListener("mousedown", mouseDown, false);
	canvas.addEventListener("mousemove", changeLoc, false);
	canvas.addEventListener("mouseup", mouseUp, false);
}

init();

function mouseUp(){
	isMouseDown = false;
}

function mouseDown(){
	isMouseDown = true;
}

function changeLoc(){
	canvasX = event.pageX - 15;
	canvasY = event.pageY - offsetHeight*2;

	if(isMouseDown)
		draw();
}

function changeBrush(){
	var brush = document.getElementById("brush").value;

	if(brush == "■"){
		square();
	}
	else if(brush == "●"){
		circle();
	}
	else if(brush == "⌫"){
		eraser();
	}

}

function square(){
	isSquare = true;
	isCircle = false;
	isEraser = false;
}

function circle(){
	isSquare = false;
	isCircle = true;
	isEraser = false;
}

function eraser(){
	isSquare = true;
	isCircle = false;

	colorVal = "#FFFFFF";
	document.getElementById("brush").style.color = "#000000";
}

function draw(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = colorVal;

	if(isSquare){
		ctx.fillRect(canvasX, canvasY, cursorSize, cursorSize);
	}
	else if (isCircle){
		var radius = cursorSize/2 + 1;
		ctx.beginPath();
		ctx.arc(canvasX, canvasY, radius, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = colorVal;
		ctx.stroke;
	}
}

var parent = document.querySelector('#parent');

var picker = new Picker({
	parent: parent,
	popup: 'bottom',
	color: 'orange',
	editorFormat: 'rgb'
});

/*
    You can do what you want with the chosen color using two callbacks: onChange and onDone.
*/
picker.onChange = function(color) {
    colorVal = color.rgbaString;
    document.getElementById("brush").style.color = colorVal;
};