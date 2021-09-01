// Multidimensional arrays

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][2]);

// Os arrays têm sua própria implementação de método 'toString'  que retorna uma lista de elementos separados por vírgula
// Exemplo:

let numbers = [10, 20, 30];
console.log(numbers);

console.log(String(numbers) === "10,20,30");

console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"

console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"