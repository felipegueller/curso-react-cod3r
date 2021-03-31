/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0;

    return (
        <div>
            O número <strong>{props.numero} </strong> é
            { isPar ?
                <span> Par</span> :
                <span> Impar</span>
            }
        </div>
    )
}