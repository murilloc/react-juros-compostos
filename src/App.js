import React, {useEffect, useState} from 'react';
import Installments from "./components/Installments";
import Form from "./components/Form";
import {getInterestSeries} from "./service/CompoundInterest";


export default function App() {
    const [capitalInicial, setCapitalInicial] = useState(0);
    const [taxaJurosMensal, setTaxaJurosMensal] = useState(0);
    const [periodo, setPeriodo] = useState(1);
    const [installmentSerie, setInstallmentSerie] = useState([]);


    useEffect(() => {
        const serie = getInterestSeries(capitalInicial, taxaJurosMensal, periodo);
        console.log(serie);
        setInstallmentSerie(serie);
    }, [capitalInicial, taxaJurosMensal, periodo]);


    const handleChangeMontante = (valor) => {
        setCapitalInicial(valor);

    }

    const handleChangePeriodo = (valor) => {
        setPeriodo(valor);

    }

    const handleChangeTaxa = (valor) => {
        setTaxaJurosMensal(valor);
    }

    return (
        <div>
            <h4 className='center'>React - Juros Compostos</h4>
            <div className='container'>
                <Form capital={capitalInicial} periodo={periodo} taxa={taxaJurosMensal} onChangeMontante={handleChangeMontante} onChangePeriodo={handleChangePeriodo}
                      onChangeTaxa={handleChangeTaxa}/>
                <Installments installmentSerie={installmentSerie}/>
            </div>

        </div>
    )


}
