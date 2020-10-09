window.onload = function() {
   var board = document.getElementById("board");
	var x = board.children;
	var stat =  document.getElementById("status");
	var newbtn = document.getElementsByClassName("btn")[0];
	var state = true;

	for(let i=0; i<x.length; i++){
		x[i].classList.add("square");

		x[i].onclick = function(){
			addval(x[i],state);
			x[i].classList.remove("hover");
			state = !state;
		}

		
	}
};

function addval(x, state){
	if(state){
		if(x.innerHTML == "X" || x.innerHTML == "O"){
			x.innerHTML = x.innerHTML;
		}
		else{
			x.classList.add("X");
			x.innerHTML='X';
		}
	}
	else{
		if(x.innerHTML == "X" || x.innerHTML == "O") {
			x.innerHTML = x.innerHTML;
		}
		else{
			x.classList.add("O");
			x.innerHTML='O'
		}
	}
}
