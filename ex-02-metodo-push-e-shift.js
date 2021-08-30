// Métodos push() e shift()

// Uma fila é um dos usos mais comuns de uma matriz.
// Em ciência da computação, isso significa uma coleção ordenada de elementos
// que suporta duas operações:

// - push anexa um elemento ao final
// - shift pega um elemento desde o início, avançando na fila,
//   para que o 2º elemento se torne o 1º.
// Filas = FIFO:    (push) > | > | > (shift)

let languages = ["JavaScript", "Python"];
console.log(languages);

languages.push('TypeScript')
console.log(languages); // Adiciona 'TypeScript' na última posição do array

languages.shift() // Remove 'JavaScript'
console.log(languages);