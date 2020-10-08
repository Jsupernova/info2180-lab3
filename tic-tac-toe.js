window.onload = function() {
   var board = document.getElementById("board");
	var x = board.children;
	var stat =  document.getElementById("status");
	var newbtn = document.getElementsByClassName("btn")[0];
	var state = true;

	for(let i=0; i<x.length; i++){
		x[i].classList.add("square");

	}
};
