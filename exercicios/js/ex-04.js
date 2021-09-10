const series = require('../js/series');

console.log("*** Exercício 04 - Média de Episódios ***");

function mediaDeEpisodios() {
  return series
    .map(serie => serie.numeroEpisodios)
    .reduce((subtotal, numeroEpisodios) => subtotal + numeroEpisodios) / series.length;
}

console.log(mediaDeEpisodios());
