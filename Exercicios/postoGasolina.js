// Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual tipo de combustível deseja abastecer? (A - Álcool, G - Gasolina): ', (tipoCombustivel) => {
  rl.question('Quantos litros deseja abastecer? ', (litros) => {
    let precoLitro, desconto, total;

    switch (tipoCombustivel.toUpperCase()) {
      case 'A':
        precoLitro = 4.9;
        if (litros <= 20) {
          desconto = 0.3;
        } else {
          desconto = 0.5;
        }
        break;
      case 'G':
        precoLitro = 5.3;
        if (litros <= 20) {
          desconto = 0.4;
        } else {
          desconto = 0.6;
        }
        break;
      default:
        console.log('Tipo de combustível inválido.');
        rl.close();
        return;
    }

    total = litros * precoLitro * (1 - desconto);
    console.log(`O valor a ser pago é R$ ${total.toFixed(2)}.`);
    rl.close();
  });
});