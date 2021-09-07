function procurarPorNome(name) {
  let existeNome = false;

  for (let serie of series) {
    if (serie.elenco.includes(name)) {
      existeNome = true;
    }
  }

  return existeNome;
}

console.log("*** Exercício 03 ***");
console.log(procurarPorNome("Marcelo"));
console.log(procurarPorNome("Winona Ryder"));
