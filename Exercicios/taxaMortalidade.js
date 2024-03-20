// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade

// Função para calcular a taxa de natalidade
function calcularNatalidade(numCriancasNascidas, numHabitantes) {
    return (numCriancasNascidas * 1000) / numHabitantes;
}

// Função para calcular a taxa de mortalidade
function calcularMortalidade(numObitos, numHabitantes) {
    return (numObitos * 1000) / numHabitantes;
}

// Função principal
function calcularTaxas() {
    let escolha = prompt("Digite '1' para calcular a taxa de natalidade ou '2' para calcular a taxa de mortalidade:");

    switch (escolha) {
        case '1':
            let numCriancasNascidas = parseInt(prompt("Digite o número de crianças nascidas:"));
            let numHabitantesNatalidade = parseInt(prompt("Digite o número total de habitantes:"));
            let taxaNatalidade = calcularNatalidade(numCriancasNascidas, numHabitantesNatalidade);
            alert ("A taxa de natalidade é: " + taxaNatalidade.toFixed(2));
            break;
        case '2':
            let numObitos = parseInt(prompt("Digite o número de óbitos:"));
            let numHabitantesMortalidade = parseInt(prompt("Digite o número total de habitantes:"));
            let taxaMortalidade = calcularMortalidade(numObitos, numHabitantesMortalidade);
            alert ("A taxa de mortalidade é: " + taxaMortalidade.toFixed(2));
            break;
        default:
            console.log("Opção inválida.");
    }
}

// Chamando a função principal
calcularTaxas();