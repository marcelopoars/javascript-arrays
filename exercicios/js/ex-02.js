function filtrarPorAno(ano) {
  const result = series.filter(({anoEstreia}) => anoEstreia >= ano);
  return result
}

console.log("*** Exercício 02 ***");
console.table(filtrarPorAno(2017));
