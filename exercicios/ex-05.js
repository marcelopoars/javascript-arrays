const series = require("./series");

console.log("*** Exercício 05 - Mascada em Série ***");

const formatarMoeda = (v) =>
  v.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

function totalSalarios(i) {
  const salario = {
    diretor: 100000,
    elenco: 40000,
  };

  const { diretor, elenco } = series[i];

  const salarioDiretores = diretor.length * salario.diretor;
  const salarioElenco = elenco.length * salario.elenco;

  return formatarMoeda(salarioDiretores + salarioElenco);
}

console.log(totalSalarios(0)); // R$ 640.000,00
console.log(totalSalarios(1)); // R$ 1.040.000,00
