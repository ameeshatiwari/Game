let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "Black";
};

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

const ShowWinner = (userWin, userchoiceId, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose !!";
    msg.style.backgroundColor = "Red";
  }
};

const PlayGame = (userchoiceId) => {
  console.log("user choice=", userchoiceId);
  const CompChoice = genCompChoice();
  console.log("comp choice=", CompChoice);

  if (userchoiceId === CompChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoiceId === "Rock") {
      userWin = CompChoice === "Paper" ? false : true;
    } else if (userchoiceId === "Paper") {
      userWin = CompChoice === "Scissors" ? false : true;
    } else {
      userWin = CompChoice === "Rock" ? false : true;
    }

    ShowWinner(userWin, userchoiceId, CompChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoiceId = choice.getAttribute("id");

    PlayGame(userchoiceId);
  });
});
