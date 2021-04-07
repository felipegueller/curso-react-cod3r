/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import DiretaFilho from "./DiretaFilho"

export default props => {

    return (
        <div>
            <DiretaFilho
                nome="Felipe"
                idade={22}
                nerd= {true}/>

            <DiretaFilho
                nome="Sérgio"
                idade={15}
                nerd= {false}/>

            <DiretaFilho
                nome="Valéria"
                idade={28}
                nerd= {true}/>
        </div>
    )
}