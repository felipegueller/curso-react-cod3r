/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './input.css'
export default props => {
    
    const [value, setValue] = useState('Inicial')

    function onChange(event) {
        setValue(event.target.value) // acessando o valor dentro evento e setando na variável
        console.log(event.target.value)
    }

    return(
        <div className="Content">
            <div className="Input">
                <label htmlFor="onChanged">
                    Captura o Evento:&nbsp;
                    <input value={value} onChange={ onChange }/> {/* Reflete as mudanças / Captura o evento */}
                </label>
                <label htmlFor="readOnly">
                    Apenas Leitura:&nbsp;
                    <input value={value} readOnly /> {/* Apenas leitura */}
                </label>
                <label htmlFor="undefined">
                    Undefined:&nbsp;
                    <input value={undefined} /> {/* Componente não controlado - sem estado - Without State */}
                </label>
                <span>Valor digitado: {value}</span>
            </div>
        </div>
    )
}