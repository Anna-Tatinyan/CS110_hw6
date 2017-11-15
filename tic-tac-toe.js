<!DOCTYPE html>
<html>
	
	<body>
		<canvas id = "canvas" width ="600" height = "600">
		</canvas>
		<script>
			const canvas = document.getElementById("canvas");
			const context = canvas.getContext("2d");
			
			const backgroundImg = new Image();
			backgroundImg.src = "https://orig00.deviantart.net/360f/f/2016/139/0/9/art_vs_artist_meme_blank_white_by_championx91-da33kst.jpg";
			
			const xImg = new Image();
			xImg.src = "http://www.vectorsland.com/imgd/l12866-java-eps-logo-99090.png";

			const oImg = new Image();
			oImg.src = "https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png";




			const draw = function(){
				context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);


};
			
canvas.addEventListener('click', function(evt) {
	const x = Math.floor((evt.offsetX)/200);
	const y = Math.floor((evt.offsetY)/200);
	console.log(x,y);
	 // console.log("x: " +x);
  //           console.log("y: " +y);
	
	
  // evt.offsetX - x of where the user clicked
  // evt.offsetY - y of where the user clicked
  // Determine which position the user clicked in and call makeMove with that position
}, false);				

const board = [
    ['', 'o', 'x'],
    ['', '', 'o'],
    ['o', 'o', 'x']

];

const NextMove = function(board) {

	const randompick = function(num) {
          return Math.floor(Math.random() * num); 
    };



	const emptycheck = function(n){
		while (n !== "") {
			return false;
		}
		return true;
	};

	let a = randompick(3);
	let b = randompick(3);

	while(!emptycheck(board[a][b])) {

		a = randompick(3);
		b = randompick(3);
	}

	return [a,b];
	};


const MakeMove = function(board,location,isX) {

	if (board[location[0]][location[1]] !== '' || location[0]<0 || location[0]>2 || location[1]<0 || location[1]>2){
		return -1;
	} else if (board[location[0]][location[1]] === ''){
		if (isX === true) {
			board[location[0]][location[1]] = "x"
	 	} else {
			board[location[0]][location[1]] = 'o'
		}
		return 0;
	}


}
 


DataGame = {
	winner: "none",
	winnerLocation: "nevermind"
}


const Findwinner = function(board) {


	if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== "") {

		DataGame.winner = board[0][0];
		DataGame.winnerLocation = [[0,0],[1,1],[2,2]];

	}

	else if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== "") {

		DataGame.winner = board[0][2];
		DataGame.winnerLocation = [[0,2],[1,1],[2,0]];
	
	}


	/* horizonakan */ 
	for (let i = 0; i < 3; i++) {
		if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== "") {
			DataGame.winner = board[i][0];
			DataGame.winnerLocation = [[i,0],[i,1],[i,2]];
		}
	}

	/*vertically*/
	for (let i = 0;i < 3; i++) {
		if(board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== "") {
			DataGame.winner = board[0][i];
			DataGame.winnerLocation = [[0,i],[1,i],[2,i]];
		}
	}

	const isTie = function() {
		for (let i1 = 0; i1 < 3; i1++) {
			for (let i2 = 0; i2 < 3; i2++) {
				if(board[i1][i2] === '') {
					return false;
				}
			}
		
		}
		return true;
	};

		 if(isTie()) {
		 	DataGame.winner = "no winner";
		 } 

};

const loop = function(isX){
  Findwinner(board);
  if(DataGame.winner==="no winner"){
    alert(DataGame.winner);
    return "";
  }
   const loc = NextMove(board);
  MakeMove(board,loc,isX);
  
  if(DataGame.winner !== "none"){
    alert("someone won");
    return ""
  } else	{
    loop(!isX);
  }
 
  
}
loop(true);


</script>

</body>

</html>


