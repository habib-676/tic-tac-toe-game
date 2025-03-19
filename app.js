let boxes = document.querySelectorAll(".box-btn");
let resetBtn = document.getElementById("reset-btn");
const msgContainer = document.getElementById("winner-msg-container");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (winner) => {
  for (let box of boxes) {
    box.innerText = "";
  }
  msgContainer.innerHTML = `
        <p class="text-center text-3xl font-bold mb-5">Congratulation !! The Winner is ${winner}</p>
        <button onclick =" newGame()" class="btn btn-secondary h-12 text-xl">
          New game
        </button>
    `;
  document.getElementById("game-container").classList.add("hidden");
  resetBtn.classList.add("hidden");
};

// new game

// document.getElementById("new-game-btn").addEventListener("click", () => {});
function newGame() {
  for (let box of boxes) {
    box.disabled = false;
  }
  document.getElementById("game-container").classList.remove("hidden");
  resetBtn.classList.remove("hidden");
  msgContainer.innerHTML = "";
}
