// Métodos push() e shift()

// FIFO (First-In-First-Out)
// Uma fila estrutura de dados que suporta duas operações:
// - push: anexa um elemento ao final
// - shift: pega um elemento desde o início, avançando na fila,
//   para que o 2º elemento se torne o 1º.
// (push) > | > | > (shift)

let languages = ["JavaScript", "Python"];
console.log(languages);

languages.push('TypeScript')
console.log(languages); // Adiciona 'TypeScript' na última posição do array

languages.shift() // Remove 'JavaScript' primeira posição do array
console.log(languages);