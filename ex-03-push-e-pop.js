// Métodos push() e pop()

// LIFO (Last-In-First-Out)
// Uma pilha é uma estrutura de dados que suporta duas operações:
// - push: adiciona um elemento ao final
// - pop: pega um elemento do final

let languages = ["JavaScript", "Python"];
console.log(languages);

languages.push('TypeScript')
console.log(languages); // Adiciona 'TypeScript' na última posição do array

languages.pop() // Remove 'TypeScript' da última posição do array
console.log(languages);

languages.pop() // Remove 'Python' da última posição do array
console.log(languages);