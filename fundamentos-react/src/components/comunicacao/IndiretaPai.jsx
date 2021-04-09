/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react' 
import IndiretaFilho from './IndiretaFilho'

export default props => {
    //Utilizando o componente de estado
    // [variavel, função de alteração] = função que acessa o estado ( valor padrão)
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    
    return (
        <div>
            <div>
                <span>{nome} - </span>
                <span>{idade} anos - </span>
                <span>{nerd ? "Verdadeiro" : "Falso" }</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}