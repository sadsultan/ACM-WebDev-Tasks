let PLAYER_ONE_MOVES = [];
let PLAYER_TWO_MOVES = [];

let VALUE_ARRAY = [];

let PLAYER_ONE_SCORE = 0;
let PLAYER_TWO_SCORE = 0;

let TIE_COUNT = 0;
let CLICK_COUNTER = 0;

const BOXES = document.querySelectorAll(".box");

const TURN_INDICATOR = document.getElementById("colorChange");
const REFRESH = document.querySelector(".btn-refresh");

const DECLARE_WINNER = document.getElementById("winner-declaration");
const WIN_MSG = document.getElementById("winner-text");

const PLAYER_ONE_COUNT = document.getElementById("player-one-score");
const PLAYER_TWO_COUNT = document.getElementById("player-two-score");

const TIES_COUNT = document.getElementById("tie-score");
const RESTART_BUTTON = document.getElementById("restart-after-win");
const CLEAR_SCORE = document.getElementById("clear-score");

const WINNING_PATTERNS = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
];

function addPlayerOneScore() {
  PLAYER_ONE_SCORE = Number(sessionStorage.getItem("p1Score"));
  PLAYER_ONE_SCORE++;
  sessionStorage.setItem("p1Score", PLAYER_ONE_SCORE);
}

function addTieCount() {
  TIE_COUNT = Number(sessionStorage.getItem("TIE_COUNT"));
  TIE_COUNT++;
  sessionStorage.setItem("TIE_COUNT", TIE_COUNT);
}

function addPlayerTwoScore() {
  PLAYER_TWO_SCORE = Number(sessionStorage.getItem("p2Score"));
  PLAYER_TWO_SCORE++;
  sessionStorage.setItem("p2Score", PLAYER_TWO_SCORE);
}

function checkForWinner(arr) {
  return WINNING_PATTERNS.some((combinations) => {
    return combinations.every((element) => {
      return arr.includes(element);
    });
  });
}

if (!sessionStorage.getItem("p1Score")) sessionStorage.setItem("p1Score", 0);

if (!sessionStorage.getItem("p2Score"))sessionStorage.setItem("p2Score", 0);

if (!sessionStorage.getItem("TIE_COUNT")) sessionStorage.setItem("TIE_COUNT", 0);

PLAYER_ONE_COUNT.innerText = sessionStorage.getItem("p1Score");
PLAYER_TWO_COUNT.innerText = sessionStorage.getItem("p2Score");
TIES_COUNT.innerText = sessionStorage.getItem("TIE_COUNT");

CLEAR_SCORE.addEventListener("click", () => {
  sessionStorage.clear();
  PLAYER_ONE_COUNT.innerText = 0;
  PLAYER_TWO_COUNT.innerText = 0;
  TIES_COUNT.innerText = 0;
});

RESTART_BUTTON.addEventListener("click", () => {
  window.location.reload();
});

BOXES.forEach((box) => {
    box.addEventListener("click", (e) => {
        const turn = document.getElementById("turn");
        let target = e.target;

        VALUE_ARRAY.push(Number(target.id));

        if (CLICK_COUNTER % 2 === 0) {
            target.innerText = "X";

            turn.classList.remove("fa-x");
            turn.classList.add("fa-o");
            PLAYER_ONE_MOVES.push(Number(target.id));

            TURN_INDICATOR.style.color = "#F2B147";
            target.style.color = "#3CC4BF";
        } else {
            target.innerText = "O";

            turn.classList.remove("fa-o");
            turn.classList.add("fa-x");
            PLAYER_TWO_MOVES.push(Number(target.id));

            TURN_INDICATOR.style.color = "#3CC4BF";
            target.style.color = "#F2B147";
        }

        CLICK_COUNTER++;
        
        if (PLAYER_ONE_MOVES.length >= 3 || PLAYER_TWO_MOVES.length >= 3) {
            if (checkForWinner(PLAYER_ONE_MOVES)) {
              DECLARE_WINNER.classList.toggle("show-winner");

              WIN_MSG.innerText = "The winner is player one!";
              WIN_MSG.style.color = "#F2B147";

                addPlayerOneScore();
                
                PLAYER_ONE_COUNT.innerText = sessionStorage.getItem("p1Score");
            } else if (checkForWinner(PLAYER_TWO_MOVES)) {
                DECLARE_WINNER.classList.toggle("show-winner");  
                WIN_MSG.innerText = "The winner is player two!";
                WIN_MSG.style.color = "#3CC4BF";
                
                addPlayerTwoScore();
                
                PLAYER_TWO_COUNT.innerText = PLAYER_TWO_SCORE;
            
            } else if (CLICK_COUNTER === 9) {
                DECLARE_WINNER.classList.toggle("show-winner");
                WIN_MSG.innerText = `It's a tie :( `;
                
                addTieCount();
                
                TIES_COUNT.innerText = TIE_COUNT;
                WIN_MSG.style.color = "lightgrey";
            }
        }
      }, { once: true }
    );
});
