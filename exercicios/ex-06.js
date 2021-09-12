const series = require("./series");

console.log("*** Exercício 06 - A - Buscas! ***");

const queroGenero = (generoDigitado) =>
  series
    .filter(({ genero }) => genero.includes(generoDigitado))
    .map((serie) => serie.titulo);

console.log(queroGenero("Caos"));

// -----------------------------------------

console.log("*** Exercício 06 - B - Buscas! ***");

const queroTitulo = (palavraDigitada) =>
  series
    .filter(({ titulo }) => titulo.indexOf(palavraDigitada) !== -1)
    .map((serie) => serie.titulo);

console.log(queroTitulo("The"));
