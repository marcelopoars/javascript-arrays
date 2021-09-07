// A
function queroGenero(generoDigitado) {
  const seriesDoGeneroEscolhido = series.filter(({ genero }) =>
    genero.includes(generoDigitado)
  );

  let result = [];

  for (let serie of seriesDoGeneroEscolhido) {
    result.push(serie.titulo);
  }

  return result;
}

console.log("*** Exercício 06 - A - Buscas! ***");
console.log(queroGenero("Suspense"));
console.log(queroGenero("Caos"));

// B
function queroTitulo(palavraDigitada) {
  const seriesComPalavraDigitada = series.filter(
    ({ titulo }) => titulo.indexOf(palavraDigitada) !== -1
  );

  let result = []

  for (let serie of seriesComPalavraDigitada) {
    result.push(serie.titulo)
  }

  return result
}
console.log("*** Exercício 06 - B - Buscas! ***");
console.log(queroTitulo("The"));
console.log(queroTitulo("Game"));
