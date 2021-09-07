function buscarSerie(palavraDigitada) {
  const seriesComPalavraDigitada = series.filter(
    ({ titulo }) => titulo.indexOf(palavraDigitada) !== -1
  );

  return seriesComPalavraDigitada;
}

function inverteNome(nomeOriginal) {
  let arrayNome = nomeOriginal.trim().split(" ")
  let ultimoNome = arrayNome.pop();
  arrayNome.unshift(ultimoNome);
  let nomeInvertido = arrayNome.join(" ");
  return nomeInvertido;
}

function formatarCreditos(titulo, array) {
  console.log(titulo.toUpperCase());
  for (let nome of array) {
    console.log(nome);
  }
}

function creditos(palavraDigitada) {
  const series = buscarSerie(palavraDigitada);

  let nomesDiretores = [];
  let nomesElenco = [];

  for (let serie of series) {
    console.log(`*** ${serie.titulo} ***`);

    for (let diretor of serie.diretor) {
      nomesDiretores.push(inverteNome(diretor));
    }

    for (let ator of serie.elenco) {
      nomesElenco.push(inverteNome(ator));
    }
  }

  formatarCreditos("Diretores", nomesDiretores);
  formatarCreditos("Elenco", nomesElenco);
}

console.log("*** Exercício 07 - Créditos ***");
creditos("Bre");
