/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
    const { min, max } = props
    const numero = Math.floor(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Desafio número aleatório</h2>
            <p>
                <strong>Valor mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {numero}
            </p>
        </div>
    );
}





/* Minha versão reduzida*/
/* export default props =>
     Math.floor(Math.random() * (props.max - props.min)) + props.min */
