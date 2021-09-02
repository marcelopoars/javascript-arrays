// Como deletar um elemento do array?

// Os arrays são objetos, então tecnicamente, podemos usar 'delete':
// O delete não é uma boa opção, pois ele apenas remove o elemento
// Ele não desloca os elementos para ocupar o espaço liberado
let languages = ["JavaScript", "Python"];

console.log("Antes:", languages);

console.log(delete languages[1]);

console.log("Depois:", languages); // Retorna [ 'JavaScript', <1 empty item> ]
console.log("Depois:", languages.length); // Retorna 2

// *******************************************************
// Método 'splice()'
// Este métono nos permite: inserir, remover e substituir elementos em um array
// Sintaxe:
// arr.splice(start[, deleteCount, elem1, ..., elemN])

let users = ["João", "Maria", "Pedro", "Ana"];

// **********************************************
// Exemplo removendo apenas 01 elemento
console.log("Antes:", users); // Retorna [ 'João', 'Maria', 'Pedro', 'Ana' ]

// Remove a partir da posição '0' apenas '1' elemento
users.splice(0, 1);
console.log("Depois:", users); // Retorna [ 'Maria', 'Pedro', 'Ana' ]

// **********************************************
// Exemplo removendo apenas 01 elemento
users.splice(2, 1); // Remove a partir da posição '2' apenas '1' elemento
console.log("Depois:", users); // Retorna [ 'Maria', 'Pedro' ]

// **********************************************
// Exemplo removendo e adicionando novos elementos
let food = ["Pão", "Café", "Açúcar"];

console.log("Antes:", food); // Retorna [ 'Pão', 'Café', 'Açúcar' ]

// Remove dois elementos a partir da posição '1' e adiciona
food.splice(1, 2, "Presunto", "Queijo");

console.log("Depois:", food); // Retorna [ 'Pão', 'Presunto', 'Queijo' ]

// **********************************************
// O método splice retorna um array com os elementos removidos
let removedItems = food.splice(1, 2);
console.log("Depois:", food);
console.log("Itens removidos:", removedItems);

// O método splice() também é capaz de inserir os elementos sem nenhuma remoção.
// Para isso, precisamos definir deleteCount como 0:
let message = ["Aprendendo", "JavaScript"];
console.log("Antes", message);

message.splice(1, 0, "mais", "sobre");
console.log("Depois", message);

// **********************************************
// Índices negativos são permitidos e especificam
// a posição final do array
let numbers = [10, 20, 30];
console.log("Antes:", numbers);

numbers.splice(-1, 0, 40,50)
console.log("Depois:", numbers);
