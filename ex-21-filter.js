// O método 'filter()' é parecido com o 'find()'
// No entanto ele retorna um novo array com os elementos encontrados

// Sintaxe:
/*
let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});
*/

let users = [
  { id: 1, name: "João", age: 19 },
  { id: 2, name: "Ana Juiza", age: 12 },
  { id: 3, name: "Pedro", age: 25 },
  { id: 4, name: "Maria", age: 17 },
  { id: 5, name: "Ana", age: 42 },
];

let isOfAge = users.filter(({ age }) => age > 17);

console.log({isOfAge});



