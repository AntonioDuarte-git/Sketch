const gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < 16 * 16; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
}