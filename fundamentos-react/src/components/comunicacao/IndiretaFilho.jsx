/* eslint-disable import/no-anonymous-default-export */
import React from 'react' 

export default props => {
    const callback = props.quandoClicar

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => callback('João', 53, true)
                /* Função Callback, utilizada para mandar dados dos filhos para os pais */
            }>
                Fornecer informações
            </button>
        </div>
    )
}