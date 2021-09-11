const series = require("./series");

console.log("*** Exercício 03 - Eu sou um ator de séries? ***");

const procurarPorNome = (palavraDigitada) =>
  series.some(({ elenco }) => elenco.some((p) => p.includes(palavraDigitada)));

console.log(procurarPorNome("Ryder"));
console.log(procurarPorNome("Marcelo"));
console.log(procurarPorNome("Harbour"));
