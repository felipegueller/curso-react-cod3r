import React from 'react'

export default function Segundo() {
    const msg = 'Usando JSX dentro de um componente React'
    return (
        <div>
            <h2>Segundo Componente</h2>
            <p>Reforçando os conceitos sobre componentes</p>
            <p>{msg}</p>
        </div>
    );
}