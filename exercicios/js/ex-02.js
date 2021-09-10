const series = require('../js/series');

console.log("*** Exercício 02 - Séries a partir de um determinado ano ***");

// function statement
const filtrarPorAno = anoEscolhido => series.filter(({ anoEstreia }) => anoEstreia >= anoEscolhido);

// hoisting - hasteamento
// function declaration
// function foo() {

// }

console.log(filtrarPorAno(2017));
