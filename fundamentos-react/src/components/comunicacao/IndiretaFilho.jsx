/* eslint-disable import/no-anonymous-default-export */
import React from 'react' 

export default props => {
    const callback = props.quandoClicar //recendo e armazenando a função do elemento pai
    const nomes = ['Felipe', 'Sérgio', 'Rahone', 'Carlos', 'Antônio', 'Fabricio', 'Lucas', 'José', 'Adam']
    const posicao = parseInt(Math.random() * (8)) + 0 // geradar de posição aleatória para percorrer nomes
    const gerarNome = () => nomes[posicao]
    const gerarIdade = () => parseInt(Math.random() * (30)) + 40 
    const gerarNerd = () => Math.random() >= 0.5

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => callback(gerarNome(), gerarIdade(), gerarNerd())
                /* Função Callback, utilizada para mandar dados dos filhos para os pais */
            }>
                Fornecer informações
            </button>
        </div>
    )
}