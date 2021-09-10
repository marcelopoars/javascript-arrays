const series = require('../js/series');

console.log("*** Exercício 01 - Séries Inválidas ***");

function invalidas() {
  const anoAtual = new Date().getFullYear();

  const isInvalid = s => Object.values(s).includes(null) || Object.values(s).includes(undefined)

  const seriesInvalidas = series
    .filter(serie => serie.anoEstreia > anoAtual || isInvalid(serie))
    .map(({ titulo }) => (titulo ? titulo : "Campo nome vazio"))
    .join(" - ");

  return `Séries Inválidas: ${seriesInvalidas}`;
}

console.log(invalidas());
