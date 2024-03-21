// Um posto está vendendo combustíveis com a seguinte tabela de descontos:

// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Álcool: até 20 litros, desconto de 3% por litro Álcool, acima de 20 litros, desconto de 5% por litro e 
// Gasolina: até 20 litros, desconto de 4% por litro Gasolina, acima de 20 litros, desconto de 6% por litro.
// Sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível, calcule e mostre o valor a ser pago pelo cliente.

//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina


//entrada de dados
let tipoCombustivel = prompt("Digite 'A' para Álcool ou 'G' para Gasolina:");
let litros = parseFloat(prompt("Digite a quantidade de litros desejada:"));

//processamento de dados
let precoAlcool = 4.90;
let precoGasolina = 5.30;
let desconto = 0;
let valorTotal = 0;

switch (tipoCombustivel.toUpperCase()) {
  case 'A':
    if (litros <= 20) {
      desconto = 0.03;
    } else {
      desconto = 0.05;
    }
    alert (valorTotal = litros * (precoAlcool - (precoAlcool * desconto)));
    break;
  case 'G':
    if (litros <= 20) {
      desconto = 0.04;
    } else {
      desconto = 0.06;
    }
    alert (valorTotal = litros * (precoGasolina - (precoGasolina * desconto)));
    break;
  default:
    console.log("Tipo de combustível inválido!");
}

//saida de dados
Alert (`Valor a ser pago: R$ ${valorTotal.toFixed(2)}`);


//Aqui está um exemplo de algoritmo em linguagem pseudo-código para calcular o valor a ser pago pelo cliente, levando em consideração os descontos conforme o tipo e a quantidade de combustível:
//Esse algoritmo solicita ao usuário o tipo de combustível e a quantidade de litros desejada, calcula o desconto apropriado com base nas condições fornecidas e, em seguida, calcula e exibe o valor total a ser pago pelo cliente.

//Algoritmo CalcularValorPago
    //entrada de dados
    //Escrever "Selecione o tipo de combustível: 1 - Álcool, 2 - Gasolina"
    //Ler tipoCombustivel
    //Escrever "Digite a quantidade de litros vendidos:"
    //Ler quantidadeLitros

    //processamento de dados
    //Se tipoCombustivel = 1 Então
        //Se quantidadeLitros <= 20 Então
            //descontoPorLitro = 0.03
        //Senão
            //descontoPorLitro = 0.05
        //Fim Se
        //precoLitro = 4.90
    //Senão
        //Se tipoCombustivel = 2 Então
            //Se quantidadeLitros <= 20 Então
                //descontoPorLitro = 0.04
            //Senão
                //descontoPorLitro = 0.06
            //Fim Se
            //precoLitro = 5.30
        //Senão
            //Escrever "Tipo de combustível inválido."
            //Parar
        //Fim Se
    //Fim Se

    //valorTotal = quantidadeLitros * (precoLitro - (precoLitro * descontoPorLitro))

    //saída de dados
    //Escrever "Valor a ser pago pelo cliente: R$", valorTotal
//Fim Algoritmo-->
