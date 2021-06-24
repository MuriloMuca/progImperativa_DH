// Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. 
// Além disso, crie outro array, desta vez chamado numeros, 
// que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.
let  numerosPrimos  =  [ 2, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let numeros= [... numerosPrimos, 1, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function  maiorNumero()  {
    return  Math.min (... numeros);
  }
  
console.log(maiorNumero());
