// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escreva a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

const nome1 = (prompt("Digite o nome da 1 pessoa"));
const nome2 = (prompt("Digite o nome da 2 pessoa"));
const nome3 = (prompt("Digite o nome da 3 pessoa"));
const nome4 = (prompt("Digite o nome da 4 pessoa"));
const nome5 = (prompt("Digite o nome da 5 pessoa"));
const nome6 = (prompt("Digite o nome da 6 pessoa"));
const nome7 = (prompt("Digite o nome da 7 pessoa"));
const nome8 = (prompt("Digite o nome da 8 pessoa"));
const nome9 = (prompt("Digite o nome da 9 pessoa"));
const nome10 = (prompt("Digite o nome da 10 pessoa"));

const nomesArmazenados = [nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10];

function buscarNome (nomes) {
    const nomeBusca = prompt("Digite o nome que deseja encontrar");
    if (nomes.includes(nomesArmazenados)) { 
    alert("Achei");
    } else { 
    alert("Não achei");    
    }   
} 
//Chamando a função de busca
buscarNome(nomesArmazenados);

//Mostrar todos os nomes da lista
alert("Nomes da lista; " + nomesArmazenados.join(","));


//const nome [];

//for (let i = 0; i < 10; i++) {
    //const nome = prompt(`Digite o nome da ${i + 1}ª pessoa`);
    //nomes.push(nome);
//}

//const nomeBusca = prompt("Digite o nome que deseja buscar");

//if (nomes.includes(nomeBusca)) {
    //alert("ACHEI");
//} else {
    //alert("NÃO ACHEI");
//}
