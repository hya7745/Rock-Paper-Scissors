let jogador = prompt("Digite uma das opções (Pedra, Papel, Tesoura): ");
let puter = parseInt((Math.random() * 3) + 1);



switch(puter) {
    case 1: puter = "Pedra"; break;
    case 2: puter = "Papel"; break;
    case 3: puter = "Tesoura"; break;
    default: alert("Valor desconhecido");
}


if(puter === jogador){
  alert("Empate")
} else if (puter === "Pedra") && (jogador === "Tesoura"){
    alert("A máquina ganhou!")
}


/* if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
  
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
