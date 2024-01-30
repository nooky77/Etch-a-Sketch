const grid = document.querySelector(".grid");
const resetBtn = document.querySelector("#reset-btn");
let gridSize = 16;

printGrid(gridSize);

grid.addEventListener("mouseover", (e) => {
	let targetedBox = e.target;
	targetedBox.style.backgroundColor = getRgbColor();
});

resetBtn.addEventListener("click", resetGrid);

function printGrid(size) {
	let doubleSize = size * size;
	for (let i = 0; i < doubleSize; i++) {
		let box = document.createElement("div");
		box.className = "box";
		box.style.width = `${800 / gridSize}px`;
		box.style.height = `${800 / gridSize}px`;
		grid.appendChild(box);
	}
}

function resetGrid() {
	const boxes = document.querySelectorAll(".box");
	[...boxes].forEach((box) => (box.style.backgroundColor = "black"));
}

function getRgbColor() {
	let arrColor = [];
	for (let i = 0; i < 3; i++) {
		arrColor.push(Math.floor(Math.random() * 256));
	}
	let color = `rgb(${arrColor[0]}, ${arrColor[1]}, ${arrColor[2]})`;
	return color;
}
