/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {

    const listProdutos = produtos.map((produto, i)=> {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
            </tr>    
        );
    })

    return(
        <div className="TabelaProdutos">
            <table border="1">
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                
                <tbody>
                    {listProdutos}
                </tbody>
            </table>
        </div>
    );
}