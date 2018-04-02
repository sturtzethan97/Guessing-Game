let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	});

resetButton.addEventListener("click", function(){
	//Generate All New Colors
	colors = generateRandomColors(numSquares);
	//Pick New Color
	pickedColor = pickColor();
	//Change Colors
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	
});

//Everything That Happens When You Win
colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
	//Add Initital Colors to Squares
	squares[i].style.backgroundColor = colors[i];
	//Add Click Listeners to Squares
	squares[i].addEventListener("click", function(){
		//Grab Color of Clicked Square
		let clickedColor = this.style.backgroundColor;
		//Compare Color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		} else { 
		  this.style.backgroundColor = "#232323";
		  messageDisplay.textContent = "Try Again";
		}

	});
}

function changeColors(color){
	//Loop Through all the Squares
	for(let i = 0; i < squares.length; i++){
		//Change Color to Match Given Color
		squares [i].style.backgroundColor = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an Array
	let arr = []
	//Add Num Random Colors to Array
	for(let i = 0; i < num; i ++){
		//Get Random Color and Push Into Array
		arr.push(randomColor());
	}
	//Return That Array
	return arr;
}

function randomColor(){
	//Pick a Red From 0 - 255
	let r = Math.floor(Math.random() * 256);
	//Pick Green
	let b = Math.floor(Math.random() * 256);
	//Pick Blue
	let g = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b + ")";


}

/*adsfsa
adasfda