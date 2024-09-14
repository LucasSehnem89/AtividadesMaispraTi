// 1)
// const carro={
//     Marca:"Toyota",
//     Modelo:"Toyota Prius",
//     Ano:2018,
//     Cor:"Cinza"
// }

// for(const prop in carro){
// console.log(carro);
// }

// // 2)
//  let livro={
//  titulo: "Intoxicação Digital: Como enfrentar o mal do milênio",
//  autor:"Augusto Cury",
//  anoPublicacao:2023,
//  genero:"Auto Ajuda",
//  }

//  let temEditora= false

//  for(propriedade in livro){
//   if(propriedade==="editora"){
//     temEditora=true
//   }
// if(!temEditora){
//    livro.editora="desconhecida"
//     }
//   }
//  console.log(livro); 
  

// 4)
// const pessoa0={nome:"Cláudia",idade:27,cidade:"Belo Horizonte"}
// const pessoa1={nome:"Carlos",idade:32,cidade:"Gramado"}
// const pessoa2={nome:"Raquel",idade:36,cidade:"Niterói"}

// const pessoas=[pessoa0,pessoa1,pessoa2]

// for(const pessoa of pessoas){
//     console.log (` ${pessoa.nome} cuja idade  é ${pessoa.idade} anos é da cidade de ${pessoa.cidade}`) 
//     }

// // 5)
// // let aluno0={nome:"Ricardo",nota1:6.5,nota2:8.0}
// // let aluno1={nome:"Janice",nota1:7.5,nota2:9.0}
// // let aluno2={nome:"Bruna",nota1:8.0,nota2:6.0}

// // let alunos=[aluno0,aluno1,aluno2];

// // const medias=[]

// // for (let aluno of alunos){
// //     let soma=0
// //     soma += aluno.nota1+aluno.nota2
// // let media=soma/2
// // medias.push({nome:aluno.nome,media:media})}

// // for(let resultado of medias){
// //    console.log(`A média do(a) ${resultado.nome} é ${resultado.media}`)
// }

// // 6)

// let funcionarios=[
// {
//     nome:"Luis",
//     cargo:"Aux Administrativo",
//     salario:2000,
// },
// {
// nome:"Regina",
// cargo :"Vendedora",
// salario:2200,
// },
// {
//     nome:"Victor",
//     cargo: "Estoquista",
//     salario:1600
// }
// ]

// let funcionariosFiltrados=[]

// const valorEspecifico= 1800

// for (let funcionario of funcionarios){
//         if (funcionario.salario > valorEspecifico){           
//            funcionariosFiltrados.push(funcionario);
//         }
// }
//         console.log(funcionariosFiltrados)
// // 7)
// const produtos = [
//     {
//         nome: "Mouse USB",
//         preco: 40.00,
//         desconto:0.30,
//     },
//     {
//         nome: "Pen Drive Multilaser",
//         preco: 25.00,
//         desconto:0.15,
//     },
//     {
//         nome: "Caixa de som JBL",
//         preco: 250.00,
//         desconto:0.20,
       
//     },
// ]

// const descontos= [0.1, 0.1, 0.1]

// const produtosComDesconto = produtos.map((produto, index) => {
//     const desconto = descontos[index];
//     return {
//        ... produto,
//         preco: produto.preco * (1 - desconto)
//     };
// });

// produtosComDesconto.forEach(produto => {
//     console.log(`Nome: ${produto.nome}, Preço com desconto: R$${produto.preco.toFixed(2)}`);
// });
// 8)
// const filmes = [
//     {
//         titulo:"Deadpool & Wolverine",
//         diretor:" Shawn Levy",
//         anoLancamento:2024,
//     },
//     {
//         titulo:"Air: A História por Trás do Logo",
//         diretor:"Ben Affleck",
//         anoLancamento:2023,
//     },
//     {
//         titulo:"Caça Implacável",
//         diretor:"Brian Goodman",
//         anoLancamento:2022,
//     },
// ]

// filmes.forEach((listaFilmes)=>{
//     console.log(listaFilmes.titulo);
// })
// 9)
// const clientes = [{
//     nome: 'Reinaldo',
//     idade: 29,
//     cidade:"Itabuna",
// },
// {
//     nome: 'Deise',
//     idade: 36,
//     cidade:"Itu",
// },
// {
//     nome: 'Gilberto',
//     idade: 18,
//     cidade:"Betim",
// }
// ]

// let count=0;
// clientes.forEach (cliente=>{if(cliente.idade>=30){
//     count++;
// }
// });
// console.log(count)

// // 10)
// let vendas=[
//    {
//       produto:"Casaco de Lã Feminino",
//       quantidade: 3,
//       valor: 125.00,
//    },
//    {
//       produto:"Moletom Esportivo Cinza",
//       quantidade: 4,
//       valor: 69.00,
//    },
//    {
//       packageroduto:"Sueter Gola V",
//       quantidade: 6,
//       valor: 129.00,
//    },
// ]

// const vendasTotalProduto= vendas.map((item, index) => {
//     return {
//    item,
// }});

// let total=0;

//    vendas.forEach(item=>{total +=item.quantidade*item.valor;
//    });

//    console.log(`"O valor das vendas de todos produtos é"(${total.toFixed(2)}`);

   

// 11)
// const pedidos = [
//         {
//             cliente: "Ferdinando",
//             produto: "Lanterna",
//             quantidade: 2,
//         },
//         {
//             cliente: "Vanessa",
//             produto: "Espelho",
//             quantidade: 3,
//         },
//         {
//            cliente: "Gilson",
//            produto: "Conjunto de Talheres Tramontina",
//            quantidade:1,
//         },
//     ]

//     const quantidadeTotalCliente= pedidos.map((item, index) => {
//                 return {
//                    ... item,
//                     quantidadeTotal:item.quantidade+item.produto
//             }});
//             quantidadeTotalCliente.forEach(item => {
//             console.log(`Nome: ${item.cliente}, Quantidade Total: ${item.quantidadeTotal}`);
//             });
           
//  12
//  const Estoque=[
//     {
//         Produto: "Arroz 5Kg",
//         quantidade: 80,
//         minimo:30,
//     },
//     {
//         Produto: "Feijão 3Kg",
//         quantidade: 35,
//         minimo:40,
//     },
//     {
//         Produto: "Açúcar Cristal 2Kg",
//         quantidade:15,
//         minimo:25,
//     },
//  ]

//  Estoque.forEach (mercadoria=>{if(mercadoria.quantidade<=mercadoria.minimo){
//      minimo=2*mercadoria.quantidade; 
// }
// });

// console.log(minimo)


// //13
// const carrinho = [
//     {
//         nome: "Perfume Antônio Banderas",
//         quantidade: 3,
//         precoUnitario: 80.00,
//     },
//     {
//         nome: "Calça Jeans Masculina Skinny",
//         quantidade:1,
//         precoUnitario: 95.00,
//     },
//     {
//         nome: "Tênis Puma Flyer Runner",
//         quantidade:2,
//         precoUnitario: 75.00,
       
//     },
// ]

// let precoTotal=0;
// const valorTotalItem= carrinho.map((item, index) => {
//         return {
//            ... item,
//             precoTotal: item.quantidade*item.precoUnitario    
//     }});

//     let total=0;


//    valorTotalItem.forEach(item => {total += item.quantidade*
//       item.precoUnitario;

//        console.log(`Nome: ${item.nome}, Preço Total: R$${item.precoTotal.toFixed(2)}`);


//         console.log(`"O valor total do carrinho é"R$${total.toFixed(2)}`);
//     });

// //14


//     const empresa = [
// {
//    departamentos: "Recursos Humanos",
//    funcionarios: ["Cláudio", "Aline","Alessandra"],
// },
// {
//    departamentos: "Vendas",
//    funcionarios: ["Gisele", "Paulo Henrique", "Rogério Carlos"],
// },
// {
//    departamentos: "Financeiro",
//    funcionarios: ["Marcos Leandro", "Raquel", "Patrícia"],
// },
// ]

// // for(const funcionarios in empresa){
// //     console.log(empresa)
// // }

// for(const funcionarios of empresa){
//     console.log(empresa['funcionarios'])
// }

// // 15) 
// const transacoes=[
//    {
//    tipo:"Entrada",
//    valor:50.00,
//    },
//    {
//    tipo:"Saída",
//    valor:85.00,
//    },
//    {
//    tipo:"Saída",
//    valor:-65.00,
//    },
//    {
//    tipo:"Entrada",
//    valor:125.00,
//    },
// ]


// let somaTotal=0;
// let somaEntrada=0;
// let valor=0;


// transacoes.forEach(transacao=>{
//     if (transacao.tipo=="Entrada"){
//         somaEntrada=somaEntrada+transacao.tipo
//     }else{
//         somaTotal+=somaTotal-transacao.tipo
//     }})

// console.log(`O saldo final é ${somaTotal}`)


   





   