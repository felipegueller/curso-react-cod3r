/* eslint-disable import/no-anonymous-default-export */
import React, {cloneElement} from 'react'

export default props => {
    return(
        <div>
            {
                React.Children.map(props.children, carro => {
                    return cloneElement(carro, props);
                })
            }
        </div>
    );
}
