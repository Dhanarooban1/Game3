// Iteration 8: Making scoreboard functional

// let score = localStorage.('score');
let score_board = document.getElementById('score-board');


score_board.innerText = localStorage.getItem('score');




document.getElementById("play-again-button").addEventListener('click',() =>{
    window.location.href='index.html';

})
