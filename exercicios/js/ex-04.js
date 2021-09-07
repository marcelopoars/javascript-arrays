function mediaDeEpisodios() {
  const result = series.reduce(
    (total, serie) => total + serie.numeroEpisodios,
    0
  );
  return result / series.length;
}

console.log("*** Exercício 04 - Média de Episódios ***");
console.log(mediaDeEpisodios());
