
function invalidas()  {
    const anoAtual = new Date().getFullYear();
    const seriesInvalidas = series.filter(({anoEstreia}) => anoEstreia > anoAtual )

    let result = []
    for (let serie of seriesInvalidas) {
        result.push(serie.titulo)
    }

    result = `Séries Inválidas: ${result.join(' - ')}`

    return result
}

console.log("*** Exercício 01 - Séries Inválidas ***");
console.log(invalidas());

