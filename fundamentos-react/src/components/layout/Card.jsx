/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Card.css'

export default props => {
    /* recebendo parâmetros CSS */
    const style = {
        backgroundColor: props.color || '#F00', /* Por padrão assume vermelho */
        borderColor: props.color || '#F00' /* Por padrão assume vermelho */
    }

    return (
        <div className='Card' style={style}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    );
}