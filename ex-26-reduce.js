// O método 'reduce()' retorna um único valor com base em um array

// Sintaxe:
/*
let value = arr.reduce(function(accumulator, item, index, array) {
    ///....
}, [initial])
*/

let numbers = [2, 4, 6];

let result1 = numbers.reduce((sum, current) => sum + current, 0 )
console.log({result1}); // 12

// Omitindo o valor inicial
// Mas esse uso requer extremo cuidado.
// Se a matriz estiver vazia, a reducechamada sem valor inicial dá um erro.
let result2 = numbers.reduce((sum, current) => sum + current )
console.log({result2}); // 12

// Simulando o erro
// let numbers2 = [];
// let result3 = numbers2.reduce((sum, current) => sum + current )
// console.log({result3}); // TypeError: Reduce of empty array with no initial value
