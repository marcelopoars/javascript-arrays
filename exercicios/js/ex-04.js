console.log("*** Exercício 04 - Média de Episódios ***");

function mediaDeEpisodios() {
  const media = series.reduce(
    (total, serie, _, array) => total + serie.numeroEpisodios / array.length,
    0
  );
  return media;
}

console.log(mediaDeEpisodios());
