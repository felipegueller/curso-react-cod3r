/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import If, { Else } from './if'


export default props => {
    const usuario = props.usuario || {}; /* caso não venha nada, receba como padrão um objeto vazio */

    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}!</strong>
            </If>

            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão!</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}!</strong>
                <Else>
                    Seja bem vindo <strong>Amigão!</strong>
                </Else>
            </If>
        </div>
    )
}