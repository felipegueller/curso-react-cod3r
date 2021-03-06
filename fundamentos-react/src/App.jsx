import './App.css'
import React from 'react'

import Contador from './components/contador/Contador'
import Input from './components/formulario/input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/tabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
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
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            
            <Card titulo='#15 - Contador' color=" #424242">
                <Contador 
                    numeroInicial= { 50 } 
                    /* passoInicial = {10} */ /> 
            </Card>
            
            <Card titulo='#14 - Componente Controlado (Input)' color=" #851e3e">
                <Input />
            </Card>

            <Card titulo='#13 - Comunicação Indireta' color=" #78C0A8">
                <IndiretaPai />
            </Card>

            <Card titulo='#12 - Comunicação Direta' color="#F2E394">
                <DiretaPai />
            </Card>

            <Card titulo='#11 - Renderização Condicional' color="#FF1493">
                <ParOuImpar numero={42} />
                <UsuarioInfo usuario= { { nome: "Carlos"}} />
                <UsuarioInfo usuario= { { nome: "Rodolfo"}} />
                <UsuarioInfo usuario= {{}}/>
                <UsuarioInfo />
            </Card>

            <Card titulo='#10 - Desafio Repetição' color="#45CC02">
                <TabelaProdutos />
            </Card>

            <Card titulo='#09 - Componente com Filhos #03' color="#88d8d0">
                <ListaAlunos></ListaAlunos>
            </Card>

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
            
            <Card titulo="#03 - Terceiro Componente" color="#f1a9c1 ">
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

