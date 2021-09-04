// O método 'map()' é um dos métodos de arrays mais úteis
// e frequentemente utilizados

// ************************************************
// Ele chama a função para cada elemento do array e 
// retorna um novo array de resultados
// ************************************************

// Seintaxe:
/*
let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
});
*/

let languages = ["C#", "Java", "Php", "C#", "JavaScript", "Python"];

let stringLength = languages.map((lang) => lang.length)

console.log({stringLength});

