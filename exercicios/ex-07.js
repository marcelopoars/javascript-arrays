const series = require("./series");

console.log("*** Exercício 07 - Créditos ***");

const inverteNome = (arr) =>
  arr.map((n) => n.trim().split(" ").reverse().join(" "));

const imprimeNome = (arr) => {
  for (let n of arr.sort()) {
    console.log(n);
  }
};

function creditos(palavraDigitada) {
  const serieEscolhida = series.filter(
    ({ titulo }) => titulo.indexOf(palavraDigitada) !== -1
  );

  const { diretor, elenco } = serieEscolhida[0];

  const nomesDiretores = inverteNome(diretor);
  const nomesElenco = inverteNome(elenco);

  console.log(`\n${serieEscolhida[0].titulo}`);

  console.log("\nDIRETORES");
  imprimeNome(nomesDiretores);

  console.log("\nELENCO");
  imprimeNome(nomesElenco);
}

creditos("The");
