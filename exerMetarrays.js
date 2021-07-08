// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.


let  numPares = [2, 4, 6, 8];

let  numImpares = numPares.map(e=>e - 1);

console.log(numImpares);


// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Maria', 'Jussara', 'Maria', 'Murilo'];

let apenasMarias = nomes.filter(nome=> nome == 'Maria');

console.log(apenasMarias);


// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

const numero = [1,5,9,3,7];

// imprimir com traços
console.log(numero.reduce((total, atual)=>total+"-"+atual));


// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ["cachorro" ,  "gato" , "boi" ,  "porco" ,  "frango" ]

animais.forEach (
    function(animal) {
        console.log("O animal é "+animal)
    }
);