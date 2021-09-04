// O método 'arr.sort(fn)' ordena os elementos do array
// mudando estes elementos de lugar

let numbers = [5, 1, 3, 19, 4, 2];

let orderedNumbers = numbers.sort();

console.log({ orderedNumbers }); // [ 1, 19, 2, 3, 4, 5 ]

// Percebemos que o itm '19' não ficou no final do array
// Isso porque os itens por padrão são classificados como strings

// Literalmente, todos os elementos são convertidos em strings para comparações. Para strings, a ordenação lexicográfica é aplicada e de fato "2" > "15".

// Para usar nossa própria ordem de classificação, precisamos fornecer uma função como o argumento de arr.sort().

function sortNumbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let newOrderedNumbers = numbers.sort(sortNumbers);

console.log({ newOrderedNumbers });

// Observando quais elementos são comparados
[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + " <> " + b);
  return a - b;
});
// O algoritmo pode comparar um elemento com vários outros no processo, mas tenta fazer o mínimo de comparações possível.

//***************************************************** */
// Na verdade, uma função de comparação só é necessária para retornar um número positivo para dizer “maior” e um número negativo para dizer “menos”.
let arr = [1, 2, 15];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr); // 1, 2, 15

// Usando arrow function
arr.sort((a, b) => a - b);
console.log(arr); // 1, 2, 15

// *****************************************
// Aqui vamos fazer ordenando nomes
let users = ["João", "Ana", "Pedro", "Ângela", "Vanessa"];

let sortUsersByName1 = (a, b) => a > b ? 1 : -1;
let usersSortedByName1 = users.sort(sortUsersByName1)
console.log({usersSortedByName1});

// Aqui vamos usar o método de comparação de string 'str.localeCompare()' 
// que compara as letras pelo seu código
let sortUsersByName2 = (a, b) => a.localeCompare(b);
let usersSortedByName2 = users.sort(sortUsersByName2)
console.log({usersSortedByName2});



// Leitura recomendada:
// https://en.wikipedia.org/wiki/Quicksort
// https://en.wikipedia.org/wiki/Timsort
