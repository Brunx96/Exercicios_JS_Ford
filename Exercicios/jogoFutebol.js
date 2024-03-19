// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

let golsTime1 = parseInt(prompt("Digite a quantidade de gols do Time 1:"));
let golsTime2 = parseInt(prompt("Digite a quantidade de gols do Time 2:"));

function determinarResultado(golsTime1, golsTime2) {
    if (golsTime1 === golsTime2) {
        alert ("Empate");
    } else if (golsTime1 > golsTime2) {
        alert ("Vitória do Time 1");
    } else {
        alert ("Vitória do Time 2");
    }
}

let resultado = determinarResultado(golsTime1, golsTime2);
console.log(`O resultado do jogo foi: ${resultado}`);