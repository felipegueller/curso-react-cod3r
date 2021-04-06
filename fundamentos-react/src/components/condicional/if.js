/* eslint-disable import/no-anonymous-default-export */

export default props => {

    /* Encontrando o elemento Else */
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else' 
        /* Se child.type estiver setado e existir um tipo com nome Else, retorne e salve na constante elseChild. Caso não exista, será retornado "Undefined"*/
    })[0] 
    /* A função "filter" retorna um array e nós só estamos interessados no primeiro elemento da lista, por isso usamos a notação de acesso "[0]" */

    /* Recebe uma lista de elementos com a ausência do elemento Else*/
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test){
        return ifChildren
    } else if(elseChild) { 
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children