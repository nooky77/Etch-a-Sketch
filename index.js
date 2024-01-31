const grid = document.querySelector(".grid");
const gridContainer = document.querySelector(".grid-container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const resetBtn = document.querySelector("#reset-btn");

grid.addEventListener("mouseover", (e) => printBox(e));

gridSizeBtn.addEventListener("click", resizeGrid);

resetBtn.addEventListener("click", resetColor);

function printGrid(size) {
	let doubleSize = size * size;
	for (let i = 0; i < doubleSize; i++) {
		let box = document.createElement("div");
		box.className = "box";
		box.style.width = `${800 / size}px`;
		box.style.height = `${800 / size}px`;
		grid.appendChild(box);
	}
}

function randomColor() {
	let arrColor = [];
	for (let i = 0; i < 3; i++) {
		arrColor.push(Math.floor(Math.random() * 256));
	}
	let color = `rgb(${arrColor[0]}, ${arrColor[1]}, ${arrColor[2]})`;
	return color;
}

function printBox(e, color = randomColor()) {
	let targetedBox = e.target;
	targetedBox.style.backgroundColor = color;
}

function resizeGrid() {
	let newSize = +prompt("Enter a number, max: 100");
	if (typeof newSize !== "number" || newSize < 2) return;
	const boxes = document.querySelectorAll(".box");
	boxes.forEach((box) => box.remove());
	printGrid(newSize);
}

function resetColor() {
	const boxes = document.querySelectorAll(".box");
	[...boxes].forEach((box) => (box.style.backgroundColor = "#252525"));
}

printGrid(16);
