const series = require("./series");

console.log("*** Exercício 03 - Eu sou um ator de séries? ***");

function procurarPorNome(palavraDigitada) {
  let souUmAtor = false;

  for (let serie of series) {
    for (let nome of serie.elenco) {
      if (nome.indexOf(palavraDigitada) !== -1) {
        souUmAtor = true;
        return souUmAtor;
      }
    }
  }

  return souUmAtor;
}

console.log(procurarPorNome("Ryder"));
console.log(procurarPorNome("Marcelo"));
console.log(procurarPorNome("Harbour"));
