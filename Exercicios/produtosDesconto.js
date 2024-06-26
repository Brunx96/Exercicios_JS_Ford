// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:


// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else

//Entrada de dados
let nomeProduto = prompt("Digite o nome do produto:");
let quantidade = parseInt(prompt("Digite a quantidade adiquirida:")); 
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar
let total = quantidade * precoUnitario;
let desconto;

if (quantidade <= 5) {
    desconto = total * 0.02;
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = total * 0.03;
} else if (quantidade >= 10) {
    desconto = total * 0.05;
}

let totalAPagar = total

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto
let mensagem =  "Produto:" + nomeProduto + "\n" +
                "Quantidade:" + quantidade + "\n" +
                "Preço unitário: R$" + precoUnitario.toFixed(2) + "\n" +
                "Total: R$" + total.toFixed(2) + "\n" +
                "Desconto: R$" + desconto.toFixed(2) + "\n" +
                "Total a pagar: R$" + totalAPagar.toFixed(2);

alert(mensagem);


//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto



