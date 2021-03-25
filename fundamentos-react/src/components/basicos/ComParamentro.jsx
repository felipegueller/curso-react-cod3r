import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 60 ? 'aprovado' : 'reprovado';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno}</strong> tem nota <strong>{props.nota} </strong>
                e esta <strong>{status}</strong>
            </p>
            {/* <p>
                O aluno <strong> {props.aluno}</strong> se encontra com
                <strong> {props.nota}</strong> pontos na disciplina de
                Programação Web, por tanto a sua situação se encontra com
                o status de <strong> {status}.</strong>
            </p> */}
        </div>
    );
}
