console.log("*** Exercício 07 - Créditos ***");

const buscarSerie = (palavraDigitada) =>
  series.filter(({ titulo }) => titulo.indexOf(palavraDigitada) !== -1);

function inverteNome(nomeOriginal) {
  let arrayNome = nomeOriginal.trim().split(" ");
  let ultimoNome = arrayNome.pop();
  
  arrayNome.unshift(ultimoNome);
  return arrayNome.join(" ");
}

const ordenarNomes = (array) => array.sort().map((nome) => nome);

function creditos(palavraDigitada) {
  const series = buscarSerie(palavraDigitada);

  const nomesDiretores = series.map(({ diretor }) =>
    diretor.map((none) => inverteNome(none))
  );
  const nomesElenco = series.map(({ elenco }) =>
    elenco.map((none) => inverteNome(none))
  );


  console.log("DIRETORES");
  console.log(ordenarNomes(nomesDiretores));
  console.log("ELENCO");
  console.log(ordenarNomes(nomesElenco));
}

creditos("St");
