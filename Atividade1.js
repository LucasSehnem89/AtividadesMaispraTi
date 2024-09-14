//1
// const prompt = require('prompt-sync')(); 
// let num= Number(prompt('digite um número: '));
// if(num %2 ==0){
//     console.log("O número é par");
// }else{
//     console.log("O número é impar");
// }

// //2
// const prompt = require('prompt-sync')(); 
// let age= Number(prompt(' digite a sua idade: '));
// if(age<=12){
//     console.log("Criança");
// }
// else if((age=13)&& (age<=17)){
//     console.log("Adolescente");
// }
// else if(age>18){
//     console.log("Adulto");
// }

//3
// const prompt = require('prompt-sync')(); 
// const grade= parseInt(prompt(' digite a sua nota:'));
// if(grade>=6){
//     console.log("Aprovado")
// }
// else if(grade<=5,9){
//     console.log("Recuperação")
// }
// else{
//     console.log("Reprovado")
// }

//4
// let num=49;

// switch(num){
//     case 1:
//         console.log("O número é 1");
//         break;
//     case 2:
//         console.log("O número é 2");
//         break;
//     default:
//         console.log("O número não é nem 1 e nem 2");
//         break;
// }

//5
// let prompt = require('prompt-sync')(); 

// let weight= parseFloat(prompt("Informe o seu peso: "));
// let height= parseFloat(prompt("Informe a sua altura: "));

// let imc= weight/ (height*height);

//     if(imc <18.5){
//         console.log("Baixo peso");
//     }else if(imc >=18.5 && imc <24.9){
//         console.log("Peso normal");
//     }else if(imc >=25 && imc <29.9){
//         console.log("Sobrepeso");
//     }else if(imc >=30){
//         console.log("Obesidade");
//         console.log("Erro");
//     }

//6

// const prompt = require('prompt-sync')(); 
// let a=Number(prompt('Lado A:'));
// let b=Number(prompt('Lado B:'));
// let c=Number(prompt('Lado C:'));

// if((a<b+c)&& (b<a+c)&& (c<a+b)){
//     if((a===b)||(a===c)||(b===c));
//         console.log('Triângulo Isósceles');
// }else if((a !==b)&& (a !==c)&(b !==c)){
//         console.log('Triângulo Escaleno');
//     }else if((a===b)&&(a===c)){
//         console.log('Triângulo Equilátero');   
// }else{
//     console.log('Não é possível fomar um triângulo com as medidas fornecedidas')
// }

// 7
//const prompt = require('prompt-sync')();
// let qtemaca= (prompt("Informe o número de maças compradas':"))
// let valortotal1=qtemaca*0.30
// let valortotal2=qtemaca*0.25

// if(qtemaca<12){
//     console.log(`${valortotal1.toFixed(2)}`)
//     }
// if(qtemaca>=12){
//     console.log(`${valortotal2.toFixed(2)}`)
//     }

//8
// const prompt = require('prompt-sync')();
// let num1=(prompt("Informe o número que você deseja incluir: "))
// let num2=(prompt("Informe o número que você deseja incluir: "))

// if(num1>num2){
//     console.log(`${num1}, ${num2}`)
// }
// else if(num2>num1){
//     console.log(`${num2}, ${num1}`)
// }
// else if (num2==num1){
//     console.log("Erro")
// }


//9
// let i=1
// for (let i=10;i>=1;i--){
//     console.log(i)
// }

// //10
// const prompt = require('prompt-sync')();
// let num= Number (prompt("Informe o número que você quer: "))

// for(let counter=1;counter <=10;counter++){
//     console.log(`${num}`)
//     }

//11

// const prompt = require('prompt-sync')();
// let num=Number(prompt("Informe o número que você deseja incluir: "))
// let sum=0

// for (let counter = 0; counter <= 5; counter++) {
//             console.log(`${num}`);
//     sum=sum+num;
// }


//   console.log(`"A soma total dos números é"(${sum}`)


//12
// const prompt = require('prompt-sync')();
// let multiplier= Number (prompt('Informe o número que você quer saber a tabuada: '))

// for (let counter=0;counter <=10; counter++){
// console.log(`${multiplier} *${counter} =`,multiplier*counter)
// }

//13

// const prompt = require('prompt-sync')();
// let num1= Number(prompt('Digite o primeiro número: '))
// let counter=0
// let sum=0

// while(num1!==0){
//     sum += num1
//     counter ++
//  num1= Number(prompt('Digite outro número: '))
// }
// console.log(`A média aritmética é:`,sum/counter)

//14
// const prompt = require('prompt-sync')();
// let fatorial= Number (prompt("Informe o número que você quer: "))
// let resultado= fatorial

// for (var i = 1; i < fatorial; i++) {
//     resultado *= i;
// }
// console.log(resultado)

//15
// let num1=0
// let num2=1
// let num3=0
// let fibonacci=""

// fibonacci +=num1 + " "+ num2

// for (let counter =1; counter <=8; counter++) {
//   num3=num1+num2
//   fibonacci +=num1 + " "+ num3
//   num1=num2
//   num2=num3
// }
//   console.log(fibonacci)

  


