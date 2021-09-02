// O método slice() retorna um novo array copiando todos
// os ítens de "start" a "end" (não inclui o elemento "and")

// Sintaxe:
// arr.slice([start], [end])
let numbers = [10, 20, 30, 40, 50];
console.log({ numbers });

let copy1 = numbers.slice(2, 4);
console.log({ copy1 }); // Retorna [30, 40]

// Copias os ítens de "-2" até o final do array
let copy2 = numbers.slice(-2);
console.log({ copy2 }); // Retorna [40, 50]


// Copia todos os ítens do array
let copy3 = numbers.slice()
console.log({ copy3 }); // Retorna [ 10, 20, 30, 40, 50 ]




