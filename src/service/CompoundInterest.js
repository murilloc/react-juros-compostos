function getInterestSeries(capitalInicial, taxaJuros, periodoAplicado) {
    const interestSeries = [];
    for (let i = 1; i <= periodoAplicado; i++) {
        const montante = capitalInicial * (1 + taxaJuros / 100) ** i;
        const juros = montante - capitalInicial;
        const valorizacao = juros / capitalInicial;

        const serie = {
            mes: i,
            montante,
            juros,
            valorizacao,
        }
        interestSeries.push(serie);
    }
    return interestSeries;
}

export {getInterestSeries}