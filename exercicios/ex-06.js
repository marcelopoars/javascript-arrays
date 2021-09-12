const series = require("./series");

console.log("*** Exercício 06 - A - Buscas! ***");

// const showSeries = (arr) => arr.map((s) => s.titulo);

function queroGenero(generoDigitado) {
  const result = series
    .filter(({ genero }) => genero.includes(generoDigitado))
    .map((serie) => serie.titulo);
  return result;
}

console.log(queroGenero("Caos"));

// -----------------------------------------

console.log("*** Exercício 06 - B - Buscas! ***");

const queroTitulo = (palavraDigitada) =>
  showSeriesDeclaration(
    series.filter(({ titulo }) => titulo.indexOf(palavraDigitada) !== -1)
  );

console.log(queroTitulo("The"));

// Function Statement
const showSeriesStatement = (arr) => arr.map((s) => s.titulo);
// ReferenceError: Cannot access 'showSeriesStatement' before initialization at queroTitulo

// Function Declaration
function showSeriesDeclaration(arr) {
  return arr.map((s) => s.titulo);
  // Aqui ocorre o Hoisting. Ver em https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting
}
