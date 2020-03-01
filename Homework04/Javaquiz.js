var questions = [
  {
    question: "who is Dloading?",
    options: [
      "Karl Anthony-towns",
      "D'Angelo Russell",
      "Malik Beasley",
      "Jarred Culver"
    ],
    answer: "D'Angelo Russel"
  },
  {
    question: "How Many Years has KAT played for the timberwolves?",
    options: ["8", "5", "10", "4"],
    answer: "5"
  },
  {
    question: "who is the timberwolves mascot",
    options: ["Crunch", "viking", "Elephant", "Mouse"],
    answer: "Crunch"
  },
  {
    question: "who was minnesota's basketball team before the wolves ?",
    options: ["Lakers", "sixers", "Lions", "Twins"],
    answer: "Lakers"
  }
];

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;
var characters = document.getElementById("questions");

var qcc = document.getElementById("quizBody");
function start() {
  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;
  characters.style.display = "block";
  qcc.style.display = "none";
  timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  next();
}

function endGame() {
  clearInterval(timer);

  var quizContent =
    `

<h3> you got ` +
    score +
    `  correct!</h3>
<button onclick="setScore()">score!</button>`;
  console.log("it works");

  document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
  localStorage.setItem("highscore", score);
  getScore();
}

function clearScore() {
  localStorage.setItem("highscore", "");

  resetGame();
}

function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  timeLeft = 0;
  timer = null;

  document.getElementById("timeLeft").innerHTML = timeLeft;

  var quizContent = `

<button onclick="start()">Start!</button>`;

  document.getElementById("quizBody").innerHTML = quizContent;
}

function incorrect() {
  timeLeft -= 15;
  next();
}

function correct() {
  score += 20;
  next();
}

function next() {
  currentQuestion++;

  if (currentQuestion > questions.length - 1) {
    return;
  }

  var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>";

  for (
    var buttonLoop = 0;
    buttonLoop < questions[currentQuestion].options.length;
    buttonLoop++
  ) {
    var buttonClick = '<button onclick="[ANS]">[CHOICE]</button>';
    buttonClick = buttonClick.replace(
      "[CHOICE]",
      questions[currentQuestion].options[buttonLoop]
    );
    if (
      questions[currentQuestion].options[buttonLoop] ==
      questions[currentQuestion].answer
    ) {
      buttonClick = buttonClick.replace("[ANS]", "correct()");
    } else {
      buttonClick = buttonClick.replace("[ANS]", "incorrect()");
    }
    quizContent += buttonClick;
  }

  characters.innerHTML = quizContent;
}
