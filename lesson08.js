//  prompt=require ('prompconstt-sync') ()

// const num1= number(prompt('Digite um número:'))

//Exercício1

// const prompt=require ('prompt-sync') ()
// const num1= Number(prompt('Digite um número:'))

// if(num1>0){
//     console.log('O número informado é positivo!')
// }else if(num1<0){
//     console.log('O ­número informado é negativo!')
// } else if(num1­=== 0) {
//     console.log('O número é zero')
// } else{
//     console.log('Erro!Informe um número!')
// }

//Exercício 2

// const prompt= require ('prompt-sync') ()
// const year= Number(prompt('Informe um ano:'))

// if((year %4 === 0 && year % 100 !== 0) || (year %400 === 0)){
// console.log(`O ano ${year} é bissexto`)
// }else{
// console.log(`${year} não é um ano bissexto`)
// }

// //Exercício 3

const funcionarios = [
    { nome: "Joany", salario: 4500, sexo: "F"},
    { nome: 'Junior', salario: 4500, sexo: 'M'},
    { nome: 'Julio', salario: 3500, sexo: 'M'},
    { nome: 'Grazy', salario: 3000, sexo: 'F'},
    { nome: 'Rafael', salario: 6000, sexo: 'M'},
    { nome: 'Artur', salario: 7800, sexo: 'M'},
    { nome: 'Ana', salario: 3300, sexo: 'F'},
    { nome: 'Bianca', salario: 12500, sexo: 'F'},
    { nome: 'José', salario: 8400, sexo: 'M'},
    { nome: 'Maria', salario: 5500, sexo: 'F'}   
];

let totalHomens = 0;
let totalMulheres = 0;
for (const func of funcionarios) {
    switch(func.sexo) {
        case 'M':
            totalHomens += func.salario;
            break;
        case 'F':
            totalMulheres += func.salario;
            break;
    }
}
console.log(totalMulheres);
// console.log(totalHomens);
