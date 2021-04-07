/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    /*
        Comunicação direta consiste em que o componente pai ao instanciar um 
        componente filho, possa passar dados através das propiedades esperadas
        pelo comp. filho.
    */
    return (
        <div>
            <span>{props.nome} - </span>
            <span>{props.idade} anos - </span>
            <span>{props.nerd ? "Verdadeiro" : "Falso" }</span>
        </div>
    )
}