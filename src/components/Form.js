import React from "react";

export default function Form({capital, taxa, periodo,onChangeMontante, onChangeTaxa, onChangePeriodo}) {


    const handleMontantInputChange = (event) => {
        const valorMontante = (+event.target.value);
        onChangeMontante(valorMontante);
    };

    const handleTaxaChange = (event) => {
        const valorTaxa = (+event.target.value);
        onChangeTaxa(valorTaxa);
    };

    const handlePeriodoChange = (event) => {
        const valorPeriodo = (+event.target.value);
        onChangePeriodo(valorPeriodo);
    };


    return (

        <div style={styles.flexRow}>
            <div className="input-field">
                <label htmlFor="inputMontante" className="active">Montante Inicial</label>
                <input type="number" id="inputMontante" min='0' max='100000' value={capital} onChange={handleMontantInputChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="inputTaxaJuros" className="active">Taxa de Juros Mensal</label>
                <input type="number" id="inputTaxaJuros" min='-12' max='12' step='0.1' value={taxa} onChange={handleTaxaChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="inputPeriodo" className="active">Período (meses)</label>
                <input type="number" id="inputPeriodo" min='1' max='36' value={periodo} onChange={handlePeriodoChange}/>
            </div>
        </div>

    )
}


const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px'
    },

    flexStart: {
        justifyContent: 'flex-start'

    }
}