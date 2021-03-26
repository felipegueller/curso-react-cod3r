/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import alunos from'../../data/alunos' /* Array de alunos */

export default props =>{
    const alunosLI = alunos.map(aluno => {
        return (
            <li>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    })

    return(
        <div>
            <ul>
                {alunosLI}
            </ul>
        </div>
    );
}