let boxes = document.querySelectorAll(".box-btn");
let resetBtn = document.getElementById("reset-btn");
const msgContainer = document.getElementById("winner-msg-container");

let turn0 = true;

const winPatterns = [
  //ei position gulay jodi innertext same na hoy tobe draw
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let count = 0;

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
    count++;
    checkWinner();
    if(count == 9){
      drawGame();
      count=0;
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        let winner = pos1Val;
        showWinner(winner);
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
function drawGame (){
  for (let box of boxes) {
    box.innerText = "";
  }
  msgContainer.innerHTML = `
        <p class="text-center text-3xl font-bold mb-5">The game is Draw . Play again</p>
        <button onclick =" newGame()" class="btn btn-secondary h-12 text-xl">
          New game
        </button>
    `;
  document.getElementById("game-container").classList.add("hidden");
  resetBtn.classList.add("hidden");
}
// reset button functionality

resetBtn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
  }
  turn0 = true;
  count = 0;
});
// new game

function newGame() {
  for (let box of boxes) {
    box.disabled = false;
  }
  document.getElementById("game-container").classList.remove("hidden");
  resetBtn.classList.remove("hidden");
  msgContainer.innerHTML = "";
  count=0;
}
