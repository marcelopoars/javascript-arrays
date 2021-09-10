function invalidas() {
  const anoAtual = new Date().getFullYear();
  const campoInvalido = null || undefined;

  const seriesInvalidas = series.filter(
    ({
      anoEstreia,
      diretor,
      genero,
      elenco,
      temporadas,
      numeroEpisodios,
      distribuidora,
    }) =>
      anoEstreia > anoAtual ||
      anoEstreia == campoInvalido ||
      diretor == campoInvalido ||
      genero == campoInvalido ||
      elenco == campoInvalido ||
      temporadas == campoInvalido ||
      numeroEpisodios == campoInvalido ||
      distribuidora == campoInvalido
  );

  const result = seriesInvalidas.map(({ titulo }) => titulo).join(" - ");

  return `Séries Inválidas: ${result}`;
}

console.log("*** Exercício 01 - Séries Inválidas ***");
console.log(invalidas());
