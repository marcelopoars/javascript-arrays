// Método concat()

// O método arr.concat() cria um novo array que inclui
// valores de outros arrays e itens adicionais
// Ele aceita qualquer número de argumentos - arrays ou valores

// Seintaxe:
// arr.concat(arg1, arg2...)

let numbers = [1, 2];

// Se um argumento 'argN' for um array, todos os seus elementos serão copiados
let newNumbers1 = numbers.concat([3, 4]);
console.log({ newNumbers1 }); // [ 1, 2, 3, 4 ]

// Se um argumento 'argN' for um valor, o próprio argumento é copiado
let newNumbers2 = numbers.concat("JavaScript");
console.log({ newNumbers2 }); // [ 1, 2, 'JavaScript' ]

// Copia o conteúdo dos dois arrays
let newNumbers3 = numbers.concat([3, 4], [5, 6]);
console.log({ newNumbers3 }); // [ 1, 2, 3, 4, 5, 6 ]

// Copia os elementos do array e o valor 'JavaScript'
let newNumbers4 = numbers.concat([3, 4], "JavaScript");
console.log({ newNumbers4 }); // [ 1, 2, 3, 4, 'JavaScript' ]
