var playerScore = 0;
var computerScore = 0;
var round = 1;





function computerPlay(){
	let options = ['rock', 'paper', 'scissors'];
	let randomOption = options[Math.floor(Math.random() * options.length)];
	return randomOption;

};


function playerSelection(){
	let playerChoice = prompt("rock paper or scissors");
	let item1 = playerChoice.toLowerCase();
	return item1;
};

function checkScore(){
	if(round === 5){
		if(playerScore < computerScore){
			alert("Computer Wins!");

		}else if(playerScore > computerScore){
			alert("Player Wins!");
		}else{
			alert("Tie Game!");
		}
	}

};



function oneRound(){
	const playerMove = playerSelection();
	const computerMove = computerPlay();

	
	if(playerMove === 'rock' && computerMove === 'paper'){
		
		computerScore++;
		return "Computer wins that round";
	}else if(playerMove === 'rock' && computerMove === 'scissors'){
		
		playerScore++;
		return "player Wins that round";
	}else if(playerMove === 'rock' && computerMove === 'rock'){
		
		
		return "Draw";
	}else if(playerMove === 'paper' && computerMove === 'rock'){
		
		playerScore++;
		return "player wins that round";
	}else if(playerMove === 'paper' && computerMove === 'scissors'){
		computerScore++;
		return "computer wins that round";
	} else if(playerMove === 'paper' && computerMove === 'paper'){

		return "Draw";
	} else if(playerMove === 'scissors' && computerMove === 'paper'){
		playerScore++;
		return "player wins that round"
	} else if (playerMove === 'scissors' && computerMove === 'rock'){
		computerScore++;
		return "computer wins that round"
	} else if (playerMove === 'scissors' && computerMove === 'scissors'){
		return "Draw!"
	}
};


function game(){
	for(round; round < 6; round++){
		
		console.log(oneRound());
		console.log(playerScore, computerScore);
		checkScore();
	}

}


game();
