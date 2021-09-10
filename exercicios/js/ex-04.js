console.log("*** Exercício 04 - Média de Episódios ***");

function mediaDeEpisodios() {
  const media = series.reduce(
    (total, { numeroEpisodios }, _, array) =>
      total + numeroEpisodios / array.length,
    0
  );
  return media;
}

console.log(mediaDeEpisodios());
