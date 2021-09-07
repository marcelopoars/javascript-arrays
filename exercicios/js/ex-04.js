function mediaDeEpisodios() {
  const result = series.reduce(
    (total, serie, _, array) => total + serie.numeroEpisodios / array.length,
    0
  );
  return result;
}

console.log("*** Exercício 04 - Média de Episódios ***");
console.log(mediaDeEpisodios());
