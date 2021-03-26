/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const { marca, carro } = props
 
    return(
        <div>
            <p>
                <strong>Carro: </strong> {carro} <strong> Marca: </strong> {marca}
            </p>
        </div>
    );
}
