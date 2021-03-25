import React from 'react'

import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import CompParametro from './components/basicos/ComParamentro'
import Terceiro from './components/basicos/Terceiro'
import Segundo from './components/basicos/Segundo'
import Primeiro from './components/basicos/Primeiro'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo='#06 - Desafio Número Aleatório'>
            <Aleatorio max={100} min={1} />
        </Card>
        
        <Card titulo="#05 - Fragmento">
            <Fragmento />
        </Card>
        
        <Card titulo="#04 - Funções com Parâmetro">
            <CompParametro
                titulo='Situção do Aluno'
                aluno='Felipe Gueller'
                nota={88}
            />
        </Card>
        
        <Card titulo="#03 - Terceiro Componente">
            <Terceiro
                aluno="Felipe Gueller" 
                nota1={45}
                nota2={80}
                nota3={90}
                nota4={15}/>
        </Card>

        <Card titulo="#02 - Segundo Componente">
            <Segundo />
        </Card>
        
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
    </div>

