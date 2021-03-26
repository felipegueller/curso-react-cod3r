/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement } from "react"

export default props => {

    return (  
        <div>
            {/*
                {cloneElement(props.children, props)}
                    Descrição: Este método permite clonar um filho, recebendo
                    também as propriedades do pai no segundo parâmetro. 
                
                Funcionamento: O primeiro parâmetro representa o elemento filho.
                Já o segundo representa as propriedades do pai.
            */}

            {/*
                Problema: Como passar a propriedade do elemento pai para mais de
                um elemento filho?

                Solução: Fazer o uso da função Map, onde se é possível receber
                um array de filhos, representado pelo primeiro parâmetro. Já o
                segundo parâmetro representa um filho dentre os que vieram no 
                array, que quando utilizado com a função cloneElement, permite
                passar as propriedades do pai para cada filho existente.
            */}
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props);
                })
            }

        </div>
    );
}