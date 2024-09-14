//console.log(10>5)//true\\
//console.log(10<5)//false\\
//console.log(10<=5)//false\\
//console.log(10>=5) \\
// console.log(10=5) //true
//console.log(10='10')\\
//console.log(10='10') \\

//Operadores Lógicos

 //console.log((10<5) && (10>2))

//let user="Jaques"
//let password= "1234"

 //let authentication =user ==='Jaques' && password ==='1234'

 //console.log(authentication)

//  const grade=4

//  if(grade>=60){
//     console.log('Aprovado!')
//  }

//  if(grade>=60){
//     console.log('Aprovado!')
//  }else{
//     console.log('Reprovado!')
//  console.log('Fim do código')
//  },

// let age=50

// if((age>=18) && (age<=32)){
//     console.log('Pode se increver no concurso!')
// } else if((age>32 || age<18)){
//     console.log('Não pode se inscrever no concurso')
// }

// const prompt = require('prompt-sync')(); 
// let num= Number(prompt('digite um número'));
// if(num %2 ==0){
//     console.log("O número é par");
// }else{
//     console.log("O número é impar");
// }

// Exercício 2


// let num1=2
// let num2=5
// let num3=3

// if((num1>num2)&&(num1>num3)){
//     console.log('O primeiro valor é o maior!')
// }else if((num2>num1)&&(num2>num3)){
//     console.log('O segundo valor é  o maior!')
// }else{
//     console.log('O terceiro número é o maior')
// }


// const prompt= require('prompt-sync')()

//     let num1 = Number(prompt("Insira o primeiro valor"))
//     let num2 = Number(prompt("Insira o primeiro valor"))
//     let operation= prompt("Informe a operação desejada(+,-,/,*):")
//     let result=0

function quantidadeDeMesesComPerda(umPeriodo){
    let quantidade =0;
    let somaDeElementosNeg = 0;
    let somaDeElementosPosit=0;
    let elementos =0;
    for(var i = 0; i < umPeriodo.length; i++){  
      elementos = umPeriodo[i];
      somaDeElementosNeg+=i;
      somaDeElementosPosit-=i;
          if(elementos < 0){
            quantidade = somaDeElementosNeg;
              return quantidade.length;
        } else if(elementos >0){
          quantidade = somaDeElementosPosit;
              return quantidade.length - somaDeElementosNeg.length;;
        } else {
          return 0;
        }   
    } 
  }



