function verificaSeExisteAbreviacao() {
  let elencosComAbreviacao = [];

  for (let serie of series) {
    let qtd = 0;

    for (let nome of serie.elenco) {
      if (nome.indexOf(".") !== -1) {
        qtd += 1;
      }
    }

    if (qtd === serie.elenco.length) {
      elencosComAbreviacao = elencosComAbreviacao.concat(serie.elenco);
    }
  }

  return elencosComAbreviacao;
}

function gerarHashtag() {
  let nomesComAbreviacao = verificaSeExisteAbreviacao();
  let hashtag = "";

  for (let nome of nomesComAbreviacao) {
    hashtag += nome[nome.indexOf(".") - 1];
  }

  return `#${hashtag}`;
}

console.log("*** Exercício 08 - hashtag secreta ***");
console.log(gerarHashtag());
