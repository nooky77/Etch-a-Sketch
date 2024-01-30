const grid = document.querySelector(".grid");
let gridSize = 16;
let doubleSize = gridSize * gridSize;

for (let i = 0; i < doubleSize; i++) {
	let box = document.createElement("div");
	box.className = "box";
	box.style.width = `${800 / gridSize}px`;
	box.style.height = `${800 / gridSize}px`;
	grid.appendChild(box);
}

grid.addEventListener("mouseover", (e) => {
	let targetedBox = e.target;
	targetedBox.style.backgroundColor = getRgbColor();
});

function getRgbColor() {
	let arrColor = [];
	for (let i = 0; i < 3; i++) {
		arrColor.push(Math.floor(Math.random() * 256));
	}
	let color = `rgb(${arrColor[0]}, ${arrColor[1]}, ${arrColor[2]})`;
	return color;
}
