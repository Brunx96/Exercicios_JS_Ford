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

buscarNome(nomesArmazenados);

alert("Nomes da lista; " + nomesArmazenados.join(", "));