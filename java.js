// 1 QUESTAO
let nome = "Suellen"
console.log(nome)

// 2 questao
let comidas=['arroz', 'feijão', 'macarrao','carne'];
// console.log(comidas)
 for(let i=0; i < comidas.length; i++){
   console.log(comidas[i]);
}                                             // interar precisa usar o for ou for each, mostra um por um 


// 3 questao

console.log ( comidas[3])

//4 questao
function calcularArea(lado){
  console.log(` A área de um quadrado de lado ${lado} é ${lado* lado}m² `) 
  }
calcularArea(4)                                // Chama a função com o valor  que quer


//5 questao
let A = 2
let B = 4
let C = 10
let resultado= A + B

if(resultado < C){
  console.log(`A soma de ${A} + ${B} é igual a ${resultado} e é menor que: ${C}`)
}else{
  console.log(`A soma de ${A} + ${B} é igual a ${resultado} e é maior que: ${C}`)
}


// console.log(resultado)
// console.log(resultado < C)

// 6 questao
var numero = "5"
var soma = numero + 10;
console.log(soma);

   //é uma string , concatenou 
   var numero = "5"
   var soma = parseInt(numero) + 10;
   console.log(soma)


// 7 questao

  




// 8 questao

for (var contador = 0; contador < 5; contador++){          // var é global funciona fora do bloco , let não; é local,, se ficar fora de bloco aparece que a variavel não foi definida

}console.log(contador);





//9 questao
let n= 40
console.log(`Seu antecessor é ${n-1} e seu sucessor é ${n+1}`)



//               outra forma 
//  function imprimirAntecessorESucessor(numero) {
//    // Calcula o antecessor/   var antecessor = numero - 1;
  
//    // Calcula o sucessor
//    var sucessor = numero + 1;
  
//   // Imprime na tela
//    console.log("Número: " + numero);
//    console.log("Antecessor: " + antecessor);
//    console.log("Sucessor: " + sucessor);
//  }

// // Exemplo de uso:
// var numero = 10;
// imprimirAntecessorESucessor(numero);









//10questao
var x = 10
function minhaFuncao(){
   var y = 5;
   console.log(x + y);
}
minhaFuncao();


//11 questao
var numero = "5";
if(numero === 5){
   console.log("O número é igual a 5.");
}else if (numero == 5){
   console.log("O número é igual a 5, com conversão de tipo.");
}else{
   console.log('O número não é igual a 5.')
}
//12 questao
 let array=[1, 2, 3, 4,5,6,7,8,9,10]
 let arrayPares=[]
  
 



    

    



//13 questao
let nota1 = 5  
let nota2 = 6
let nota3 = 5
let media = (nota1 + nota2 + nota3)/3
 if(media < 5){
   console.log(`Média  ${media}, resultado : Reprovado`)
 }else if( media >= 7){
   console.log(`Média ${media}, resultado: Aprovado`)
 } else{
   console.log(`Média ${media}, resultado: Recuperação`)
 }

  





   


//14 questao
function calculoImc(peso){
  

}








// 15 questao
var numero =9
for( var i =1; i<=10;i++){
   var produto = numero * i;
   console.log(`${numero} x ${i}= ${produto}`)
}

//16 questao
   let valor1 = 10
   let valor2 = 0
   let divisão = valor1/valor2
   if(valor2 == 0){ console.log(`Não é possivel dividir`)

   }else{console.log (divisão)}
      

//17 questao


// 18 questao




//19 questao 
const numeros=[12, 36, 52, 77]
const numeros1=[]
const numerosomado= 7
for( let i = 0; i<numeros.length; i++){ 
   numeros[i]=numeros[i] + numerosomado;
   numeros1.push(numeros[i]);
}
console.log(numeros1)

  





// questao20



//questao 21
var frutas = [ "maçã", "banana","laranja"];
frutas.push('uva')
console.log(frutas[3]);
// console.log(frutas[2])

//não tem fruta na posição 3