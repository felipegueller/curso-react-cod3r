import './App.css'
import React from 'react'

import Marca from './components/basicos/Marca'
import Carro from './components/basicos/Carro'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import CompParametro from './components/basicos/ComParamentro'
import Terceiro from './components/basicos/Terceiro'
import Segundo from './components/basicos/Segundo'
import Primeiro from './components/basicos/Primeiro'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
    <div class="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo='#08 - Componente com Filhos #02' color="#ffcc5c">
                <Marca marca="Honda">
                    <Carro carro ="Civic" />
                    <Carro carro ="City" />
                    <Carro carro ="Fit" />
                </Marca>
            </Card>

            <Card titulo='#07 - Componente com Filhos' color="#451e3e">
                <Familia sobrenome="Gueller">
                    <FamiliaMembro nome ="Felipe" />
                    <FamiliaMembro nome ="Ana" />
                    <FamiliaMembro nome ="Francisco" />
                    <FamiliaMembro nome ="Zequinha" />
                </Familia>
            </Card>

            <Card titulo='#06 - Desafio Número Aleatório' color="#E94C6F">
                <Aleatorio max={100} min={1} />
            </Card>
            
            <Card titulo="#05 - Fragmento" color="#FA6900">
                <Fragmento />
            </Card>
            
            <Card titulo="#04 - Funções com Parâmetro" color="#008BBA">
                <CompParametro
                    titulo='Situção do Aluno'
                    aluno='Felipe Gueller'
                    nota={88}
                />
            </Card>
            
            <Card titulo="#03 - Terceiro Componente" color="#fec8c1 ">
                <Terceiro
                    aluno="Felipe Gueller" 
                    nota1={45}
                    nota2={80}
                    nota3={90}
                    nota4={15}/>
            </Card>

            <Card titulo="#02 - Segundo Componente" color="#00C8F8">
                <Segundo />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#F0A830">
                <Primeiro />
            </Card>
            </div>
    </div>

