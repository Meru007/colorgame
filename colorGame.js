var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") {
			numSquares = 3;
		} else if (this.textContent === "Hard") {
			numSquares = 6;
		} else {
			numSquares = 9;
		}
		reset();
	})
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		//mengambil warna kotak yang dipilih
		var clickedColor = this.style.backgroundColor;
		//membandingkannya dengan variabel pickedColor
		if (clickedColor === pickedColor) {
			resetButton.textContent = "Play Again?";
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";	
		}
	});
	}
}



function reset() {
	//hapus text
	messageDisplay.textContent = "";
	//memberi warna baru lagi
	colors = generateRandomColors(numSquares);
	//pilih warna acak dari array
	pickedColor = pickColor();
	//mengganti nilai colorDisplay agar sama ama warna yg dipilih
	colorDisplay.textContent = pickedColor;
	//ganti tulisan reset button
	resetButton.textContent = "New Colors";
	//ganti warna kotaknya
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	//ganti warna background judul
	h1.style.backgroundColor = "steelblue";	
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color) {
	//perulangan ke semua kotak
	for(var i = 0; i < squares.length; i++) {
		//mengubah tiap warna kotak ke warna yang ditentukan
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//membuat array
	var arr = []
	//memberi angka indeks random ke array
	for(var i = 0; i < num; i++) {
		//mencari angka random dan masukin ke array
		arr.push(randomColor());
	}
	//return arraynya
	return arr;
}

function randomColor() {
	//ambil warna "merah" range 0 sampe 255
	var r = Math.floor(Math.random() * 256);
	//ambil warna "ijo" range 0 sampe 255
	var g = Math.floor(Math.random() * 256);
	//ambil warna "biru" range 0 sampe 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}