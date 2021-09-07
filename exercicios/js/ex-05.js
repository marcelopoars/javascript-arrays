function formatarMoeda(valor) {
  const result = valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return result;
}

function totalSalarios(indiceDaSerie) {
  const salarioDiretor = 100000;
  const salarioElenco = 40000;

  const totalSalarioDiretor =
    salarioDiretor * series[indiceDaSerie].diretor.length;

  const totalSalarioElenco =
    salarioElenco * series[indiceDaSerie].elenco.length;

  let result = totalSalarioDiretor + totalSalarioElenco;

  result = formatarMoeda(result);

  return result;
}

console.log("*** Exercício 05 - Mascada em Série ***");
console.log(totalSalarios(1));
