// aqui o jogador escolhe a opção e o puter escolhe aleatoriamente entre 1 a 3
let jogador = prompt("Digite uma das opções (Pedra, Papel, Tesoura): ");
let puter = parseInt((Math.random() * 3) + 1);


//convertemos o numero escolhido pelo puter em uma opção
switch (puter) {
  case 1: puter = "Pedra"; break;
  case 2: puter = "Papel"; break;
  case 3: puter = "Tesoura"; break;
  default: alert("Valor desconhecido");
}
//ja eliminamos uma opção aqui, se o que o jogador escolher for igual ao computador, é empate
if (puter === jogador) {
  alert("Empate");
  
  // aqui eu faço varias comparações para determinar se o jogador ganhou, se não ganhou ele avança pro próximo. 
  //se ele chegar no final e não determinar que o jogador ganhou é vitória do puter.


  //inicialmente eu tava tentando fazer um monte de if else, mas achei essa maneira mais efetiva. 


  
  //Com o if else FUNCIONA porém eu não tava conseguindo fazer o código parar após ele chegar em um resultado, não sei se foi problema de escopo, mas tentei usar o return p ele parar de rodar o código assim que achar um resultado mas não estava usando certo.
//depois preciso aprender escopos dnv!!!
  
} else if (jogador === "Pedra" && puter === "Tesoura" ||
           jogador === "Papel" && puter === "Pedra" ||
           jogador === "Tesoura" && puter === "Papel") {
             alert (jogador + " VS " + puter);
             alert('VITÓRIA DO JOGADOR!');
             } else {
             alert(jogador + " VS " + puter);
             alert('VITÓRIA DO COMPUTADOR!')
             } 
  
  