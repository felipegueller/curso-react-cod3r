/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default props => {
    // const nota1 = props.nota1
    // const nota2 = props.nota2
    // const nota3 = props.nota3
    // const nota4 = props.nota4
    const { nota1, nota2, nota3, nota4 } = props
    const media = (nota1 + nota2 + nota3 + nota4) / 4
    const situacao = (media >= 60) ? "Aprovado" : "Reprovado"
    return (
        <div>
            <h2>Somatório da Média de 4 Notas</h2>
            <p>
                <strong>Aluno: </strong> {props.aluno}
            </p>
            <p>
                <strong>Nota 01: </strong> {nota1}
            </p>
            <p>
                <strong>Nota 02 </strong> {nota2}
            </p>
            <p>
                <strong>Nota 03: </strong> {nota3}
            </p>
            <p>
                <strong>Nota 04: </strong> {nota4}
            </p>
            <p>
                <strong>Média: </strong> {media}
            </p>
            <p>
                <strong>Situação: </strong> {situacao}
            </p>
        </div>
    );
}
