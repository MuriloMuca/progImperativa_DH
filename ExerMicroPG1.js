let listadeCompras= ["arroz", "feijao", "café", "açúcar"]
// unshift - adiciona elementos no início da array
console.log(listadeCompras);

listadeCompras.shift();
// shift - elimina o primeiro elemento da array
console.log(listadeCompras);

listadeCompras.push("óleo");
// push - adiciona elementos no final da array
console.log(listadeCompras);

listadeCompras.pop();
// pop - elimina o último elemento da array
console.log(listadeCompras);

let separarPorvirgulas = listadeCompras.join();
// lista os elementos da array e por padrão, os separa por "virgula" (se não especificado o "separador")
console.log(separarPorvirgulas);
