/*
Erik Ramos
03/22/20
Quarantine Gamez
rock paper scissors
*/




let playerScore = 0;
let computerScore = 0;
let round = 0;
let winnerOutput = document.getElementById("winner");
let currentPlayerScore = document.getElementById("player-score");
let currentComputerScore = document.getElementById("computer-score");



function computerPlay(){
	let options = ['ROCK', 'PAPER', 'SCISSORS'];
	let randomOption = options[Math.floor(Math.random() * options.length)];
	return randomOption;

};


function rock(){
	round++;
	let playerMove = 'ROCK'
	const computerMove = computerPlay();
	if(playerMove === 'ROCK' && computerMove === 'ROCK'){
		alert("Draw");

	}else if(playerMove === 'ROCK' && computerMove === 'PAPER'){
		computerScore++;
		alert("computer wins");

	}else if(playerMove === 'ROCK' && computerMove === 'SCISSORS'){
		playerScore++;
		alert("Player wins");
	}

	outputScores();
	checkScore();
};


function paper(){
	round++;
	let playerMove = 'PAPER'
	const computerMove = computerPlay();
	if(playerMove === 'PAPER' && computerMove === 'ROCK'){
		playerScore++;
		alert("player wins");

	}else if(playerMove === 'PAPER' && computerMove === 'PAPER'){
		alert("Draw");

	}else if(playerMove === 'PAPER' && computerMove === 'SCISSORS'){
		computerScore++;
		alert("computer wins");
	}
	outputScores();
	checkScore();
};



function scissors(){
	round++;
	let playerMove = 'SCISSORS'
	const computerMove = computerPlay();
	if(playerMove === 'SCISSORS' && computerMove === 'ROCK'){
		computerScore++;
		alert("computer wins");

	}else if(playerMove === 'SCISSORS' && computerMove === 'PAPER'){
		playerScore++;
		alert("Player wins");

	}else if(playerMove === 'SCISSORS' && computerMove === 'SCISSORS'){
		alert("Draw");
	}
	outputScores();
	checkScore();
};

function outputScores(){
	
	currentPlayerScore.textContent = playerScore;
	currentComputerScore.textContent = computerScore;


};

function checkScore(){
	if (round === 5){
		if(playerScore === computerScore){
			winnerOutput.textContent = "Its a Draw";
		}else if(playerScore < computerScore){
			winnerOutput.textContent = "Computer Wins";
		}else if(playerScore > computerScore){
			winnerOutput.textContent = "Player wins";
		}
	}


};

function resetGame(){
	 playerScore = 0;
	 computerScore = 0;
	 round = 0;
	 winnerOutput.textContent = " ";
	 currentComputerScore.textContent = 0;
	 currentPlayerScore.textContent = 0;


};






