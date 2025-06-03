function makeGrids(size) {
  const screen = document.querySelector(".sketch-screen");
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.border = ".5px solid rgba(0, 0, 0, .25)";
      column.appendChild(cell);
    }
    screen.appendChild(column);
  }
}

makeGrids(16);

const cells = document.querySelectorAll(".cell");
