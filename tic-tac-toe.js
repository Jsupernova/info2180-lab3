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

		newbtn.onclick = function(){
			state = newboard(x, stat);
			board.style.pointerEvents = "auto";
		}

		x[i].onmouseover = function() {
			whilehovering(x[i],state)
		}

		x[i].onmouseleave = function(){
			nothovering(x[i]);
			if(winner(x,stat)==1){
				board.style.pointerEvents = "none";
			}
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
function newboard(x,status){
	for (let i = 0; i< x.length; i++){
		x[i].innerHTML = "";
		x[i].classList.remove("X");
		x[i].classList.remove("O");
		status.innerHTML = "Move your mouse over a square and click to play an X and O";
	}
}

function whilehovering(x,status) {
	if(x.innerHTML == "X" || x.innerHTML == "O"){
		x.innerHTML = x.innerHTML;
	}
	else{
		x.classList.add("hover");
	}
	return status;
}

function nothovering(x) {
	x.classList.remove("hover");
}

function winner(x, status){
	if (x[0].innerHTML == "X" && x[1].innerHTML == "X" && x[2].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[3].innerHTML == "X" && x[4].innerHTML == "X" && x[5].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[6].innerHTML == "X" && x[7].innerHTML == "X" && x[8].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[0].innerHTML == "X" && x[3].innerHTML == "X" && x[6].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[1].innerHTML == "X" && x[4].innerHTML == "X" && x[7].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[2].innerHTML == "X" && x[5].innerHTML == "X" && x[8].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[0].innerHTML == "X" && x[4].innerHTML == "X" && x[8].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[2].innerHTML == "X" && x[4].innerHTML == "X" && x[6].innerHTML == "X"){
		status.innerHTML = "Congratulations! X is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[0].innerHTML == "O" && x[1].innerHTML == "O" && x[2].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[3].innerHTML == "O" && x[4].innerHTML == "O" && x[5].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[6].innerHTML == "O" && x[7].innerHTML == "O" && x[8].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[0].innerHTML == "O" && x[3].innerHTML == "O" && x[6].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[1].innerHTML == "O" && x[4].innerHTML == "O" && x[7].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[2].innerHTML == "O" && x[5].innerHTML == "O" && x[8].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[0].innerHTML == "O" && x[4].innerHTML == "O" && x[8].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
	else if (x[2].innerHTML == "O" && x[4].innerHTML == "O" && x[6].innerHTML == "O"){
		status.innerHTML = "Congratulations! O is the Winner"
		board.style.pointerEvents = "none";
	}
}
