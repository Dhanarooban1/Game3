// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num_1;
let num_2;
let num_3;

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");


let score = 0;
let time = 5;
let interValid;


function generateNumbers() {
  num_1 = Math.round(Math.random() * 100);
  num_2 = Math.round(Math.random() * 100);

  if (num_1 < num_2) {
    let temp = num_1;
    num_1 = num_2;
    num_2 = temp;
  }
  number1.innerText = num_1;
  number2.innerText = num_2;
  NewNumber_3()

}

generateNumbers();




// Iteration 3: Creating variables required to make the game functional


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"


// Iteration 5: Creating a randomise function to make the game functional
function RandomAr() {
  let RandomArray = ["+", "-", "*", "/", "%"];
  let randomIndex = Math.round(Math.random() * 4);
  return RandomArray[randomIndex];
}

function NewNumber_3() {
  let operator = RandomAr();
  console.log(operator);
  if (operator === "+") {
    num_3 = num_1 + num_2;
  } else if (operator === "-") {
    num_3 = num_1 - num_2;
  } else if (operator === "*") {
    num_3 = num_1 * num_2;
  } else if (operator === "/") {
    num_3 = num_1 / num_2;
    num_3 = Math.round(num_3);
  } else if (operator === "%") {
    num_3 = num_1 % num_2;
  }
  number3.textContent = num_3;
}





// Iteration 6: Making the Operators (button) functional
document.getElementById("plus").onclick = function () {
  if (num_1 + num_2 === num_3) {
    nextMove();
  } else {
    gameOver();
  }
};

document.getElementById("minus").onclick = function () {
  if (num_1 - num_2 === num_3) {
    nextMove();
  } else {
    gameOver();
  }
};

document.getElementById("mul").onclick = function () {
  if (num_1 * num_2 === num_3) {
    nextMove();
  } else {
    gameOver();
  }
};

document.getElementById("divide").onclick = function () {
  let temp = Math.round(num_1 / num_2);
  if (temp === num_3) {
    nextMove();
  } else {
    gameOver();
  }
};

document.getElementById("modulus").onclick = function () {
  if (num_1 % num_2 === num_3) {
    nextMove();
  } else {
    gameOver();
  }
};


function nextMove() {
    score += 1;
    time = 5;
       console.log("Correct");
        generateNumbers()
  }

  let intervalID = setInterval(function () {
    document.getElementById("timer").innerText = time;
    if (time <= 0) {
        gameOver()
    }
    time--;
},1000);

function gameOver() {
  console.log(score);
localStorage.setItem("score", score);

  window.location.href='gameover.html'
}


// Iteration 7: Making Timer functional
