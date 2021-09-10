function invalidas() {
  const anoAtual = new Date().getFullYear();

  const seriesInvalidas = series.filter(
    ({
      titulo,
      anoEstreia,
      diretor,
      genero,
      elenco,
      temporadas,
      numeroEpisodios,
      distribuidora,
    }) =>
      anoEstreia > anoAtual ||
      !titulo ||
      !anoEstreia ||
      !diretor ||
      !genero ||
      !elenco ||
      !temporadas ||
      !numeroEpisodios ||
      !distribuidora
  );

  const result = seriesInvalidas
    .map(({ titulo }) => (titulo ? titulo : "Campo nome vazio"))
    .join(" - ");

  return `Séries Inválidas: ${result}`;
}

console.log("*** Exercício 01 - Séries Inválidas ***");
console.log(invalidas());
