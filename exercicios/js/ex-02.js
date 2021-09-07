function filtrarPorAno(ano) {
  const result = series.filter(({anoEstreia}) => anoEstreia >= ano);
  return result
}

console.log("*** Exercício 02 - Séries a partir de um determinado ano ***");
console.table(filtrarPorAno(2017));
