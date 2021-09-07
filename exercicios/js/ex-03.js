function procurarPorNome(name) {
  let existeNome = false;

  for (let serie of series) {
    if (serie.elenco.includes(name)) {
      existeNome = true;
    }
  }

  return existeNome;
}

console.log("*** Exercício 03 - Eu sou um ator de séries? ***");
console.log(procurarPorNome("Marcelo"));
console.log(procurarPorNome("Winona Ryder"));
