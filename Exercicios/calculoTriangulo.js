// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console

const p1 = prompt("Digite o tamanho do primeiro lado do triângulo:");
const s1 = prompt("Digite o tamanho do segundo lado do triângulo:");
const t1 = prompt("Digite o tamanho do terceiro lado do triângulo:");

if (p1 === s1 && s1 === t1) {
    alert ("Seu triangulo é Equilátero");
} else if (p1 !== s1 && s1 !== t1 && p1 !== t1) {
    alert ("Seu triangulo é Escaleno");
} else {
    alert ("Seu triangulo é Isóseles");
}
   

