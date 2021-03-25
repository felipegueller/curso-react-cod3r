import React from 'react'

import Primeiro from './components/basicos/Primeiro'
//import Comp from './components/basicos/Segundo'
import CompParametro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'


// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio
            max={8}
            min={3} />
        <Fragmento />
        <CompParametro
            titulo='Situção do Aluno'
            aluno='Felipe Gueller'
            nota={88}
        />
        <Primeiro></Primeiro>
    </div>

