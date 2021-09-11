console.log("*** Exercício 06 - A - Buscas! ***");

function queroGenero(generoDigitado) {
  const seriesDoGeneroEscolhido = series
    .filter(({ genero }) => genero.includes(generoDigitado))
    .map((serie) => serie.titulo);

  return seriesDoGeneroEscolhido;
}

console.log(queroGenero("Suspense"));
console.log(queroGenero("Caos"));

// -----------------------------------------

console.log("*** Exercício 06 - B - Buscas! ***");

function queroTitulo(palavraDigitada) {
  const seriesComPalavraDigitada = series
    .filter(({ titulo }) => titulo.indexOf(palavraDigitada) !== -1)
    .map((serie) => serie.titulo);

  return seriesComPalavraDigitada;
}
console.log(queroTitulo("The"));
console.log(queroTitulo("Game"));
