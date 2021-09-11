const series = require('./series')

console.log("*** Exercício 02 - Séries a partir de um determinado ano ***");

function filtrarPorAno(anoEscolhido) {
  return series.filter(({ anoEstreia }) => anoEstreia >= anoEscolhido);
}

console.log(filtrarPorAno(2017));
