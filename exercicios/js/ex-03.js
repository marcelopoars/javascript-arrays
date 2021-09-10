const series = require('../js/series');

console.log("*** Exercício 03 - Eu sou um ator de séries? ***");

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const procurarPorNome = palavraDigitada => series.some(({ elenco }) => elenco.some(p => p.includes(palavraDigitada)));

console.log(procurarPorNome("Ryder"));
console.log(procurarPorNome("Marcelo"));
console.log(procurarPorNome("Harbour"));
