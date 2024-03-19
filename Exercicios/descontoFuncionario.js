// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

const valorTotalcompra = parseFloat (prompt("Qual é o valor total da compra:"));
const codigoCliente = parseInt (prompt("Digite o código do cliente (1 para comum, 2 para VIP, 3 para funcionário):"));

let desconto = 0;

switch (codigoCliente) {
    case 1:
        desconto = 0; // Cliente comum não tem desconto
        break;
    case 2:
        desconto = 0.05; // Cliente VIP tem 5% de desconto
        break;
    case 3:
        desconto = 0.1; // Funcionário tem 10% de desconto
        break;
    default:
}     
    
const valorComDesconto = valorTotalcompra * desconto;
const valorTotalpago = valorTotalcompra - valorComDesconto;

alert(`O valor total a ser pago é R$ ${valorTotalpago.toFixed(2)}`);
