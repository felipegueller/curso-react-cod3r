/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import alunos from'../../data/alunos' /* Array de alunos */

export default props =>{
    /*
        Retornando todas as informações dos alunos para a lista de LIs,
        que no caso cada elemento do tipo LI foi salvo na constante alunos LI e 
        acessados pela lista não ordenada do tipo UL
    */
    const alunosLI = alunos.map(aluno => {
        return (
            <li key={ aluno.id }>
                {aluno.id}) {aluno.nome} &#10140; {aluno.nota}
            </li>
        );
    })

    return(
        <div>
            <ul style={{listStyle: "none"}}>
                {alunosLI}
            </ul>
        </div>
    );
}