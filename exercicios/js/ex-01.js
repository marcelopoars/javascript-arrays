
function invalidas(arr)  {
    const anoAtual = new Date().getFullYear();
    const seriesInvalidas = arr.filter(({anoEstreia}) => anoEstreia > anoAtual )

    let result = []
    for (let serie of seriesInvalidas) {
        result.push(serie.titulo)
    }

    result = `Séries Inválidas: ${result.join(' - ')}`

    return result
}

console.log(invalidas(series));

