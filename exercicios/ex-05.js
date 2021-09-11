console.log("*** Exercício 05 - Mascada em Série ***");

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

  const { diretor, elenco } = series[indiceDaSerie];

  const totalSalarioDiretor = diretor.length * salarioDiretor
  const totalSalarioElenco = elenco.length * salarioElenco

  return formatarMoeda(totalSalarioDiretor + totalSalarioElenco)

}

console.log(totalSalarios(0));
