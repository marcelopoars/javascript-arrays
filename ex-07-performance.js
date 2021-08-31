// Performance
// Os métodos shift() e unshift() são lentos

// Por que é mais rápido trabalhar com o final de um array do que com seu início?

//                    0           1        2       3
let languages = ["JavaScript", "Python", "Java", "C#"];
console.log(languages);

languages.shift();
console.log(languages); // [ 'Python', 'Java', 'C#' ]

// Remove o elemento da posição '0' e move todos os outros elementos
// Quanto mais elementos no array, mais tempo para movê-los, mais operações na memória

// ************************************************ //

// Os métodos push() e pop() são rápidos

// Eles não precisam mover nada. Para extrair um elemento do final, o método pop() limpa o índice e encurta length. O mesmo acontece com o método push().

let users = ['João', 'Maria']
console.log(users);

users.push('Pedro') // Adiciona 'Pedro' na última posição
console.log(users);

users.pop() // Remove 'Pedro' da última posição
console.log(users);

users.pop() // Remove 'Maria' da última posição
console.log(users);



