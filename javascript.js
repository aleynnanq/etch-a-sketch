const button = document.querySelector("#sizeButton");

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

function destroyGrids() {
  const screen = document.querySelector(".sketch-screen");
  screen.innerHTML = "";
}

function attachEventListeners() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      cell.setAttribute("style", "background-color:black;");
    });
  });
}

button.addEventListener("click", () => {
  const userAnswer = prompt("Type a number between 0 and 100", "16");
  if (isNaN(userAnswer) || Number(userAnswer) < 0 || Number(userAnswer) > 100) {
    alert("An error occurred! Please enter a number between 0 and 100");
    return;
  }

  destroyGrids();
  makeGrids(Number(userAnswer));
  attachEventListeners();
});

makeGrids(16);
attachEventListeners();
