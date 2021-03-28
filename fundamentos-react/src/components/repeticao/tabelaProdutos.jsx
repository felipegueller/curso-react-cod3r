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

    function getTotalValue () {
         const listPrice =  produtos.map(produto => {
                console.log(produto)
                return produto.preco
        })

        var totalValue = 0;
        for(var i = 0; i < listPrice.length; i++){
            totalValue += listPrice[i]
        }
        return totalValue.toFixed(2)
    }

    return(
        <div className="TabelaProdutos">
            <table border="1">
            <caption>Tabela de Produtos</caption>
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
                <tfoot>
                    <tr>
                        <td> Valor total </td>
                        <td>{ getTotalValue() }</td> 
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}