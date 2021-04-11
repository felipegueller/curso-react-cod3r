import './Contador.css'
import React, { Component } from 'react'

class Contador extends Component {
    
    /* Chamamda através do construtor

    constructor(props) { // construtor recebe os parâmetros de entrada da classe
        super(props) // chama o construtor da classe Component
        
        this.state = { // this acessa o atributo da instância/objeto do momento
            numero: props.numeroInicial
        }

        // associa do this.incrementa com o this atual do contador
        this.incremeta = this.incrementa.bind(this)
    }*/

    // forma simplificada de acessar o conteúdo da instância
    state = { 
        // this acessa o atributo da instância/objeto do momento
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
        
    }

    // A função arrow linka "o seu this" sempre ao do momento ( olhar na documentação)
    incrementa = () => {
        /*
            setState() -> vem por herança da classe Component.
            necessário para fazer a alteração do estado da classe.
        */
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    decrementa= () => {

        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (event) => {
        this.setState({
            // ( + ) -> converte a string para inteiro
            passo: +event.target.value,
        })
    }

    render() {
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{ this.state.numero }</h3>
                <div>
                    <label htmlFor="passoInput">Passo &nbsp;</label>
                    <input type="number" id="passoInput" 
                        value={ this.state.passo} onChange={ this.setPasso }/>
                </div>
                <button onClick={this.incrementa}><strong>+</strong></button>
                <button onClick={this.decrementa}><strong>-</strong></button>
            </div>
        )
    }
    
}

export default Contador;