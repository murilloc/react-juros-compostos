import React from "react";
import Installment from "./Installment";

export default function Installments({installmentSerie}) {


    return (
        <div className="container center">

            {
                installmentSerie.map(({mes, montante, juros, valorizacao}) => {
                 return <div key={mes}>
                    <Installment juros={juros} mes={mes} montante={montante} valorizacao={valorizacao}/>
                </div>
            })};
        </div>
    )
}