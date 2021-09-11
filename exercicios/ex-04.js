const series = require("./series");

console.log("*** Exercício 04 - Média de Episódios ***");

const mediaDeEpisodios = () =>
  series
    .map(({ numeroEpisodios }) => numeroEpisodios)
    .reduce(
      (totalEpisodios, numeroEpisodios) => totalEpisodios + numeroEpisodios
    ) / series.length;

console.log(mediaDeEpisodios());
