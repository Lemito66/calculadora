import React from "react";
import '../../hojas-de-estilo/Botones/Boton-Clear.css';
const BotonClear = (props) => {
    return(
    <div className="boton-clear" 
        onClick={props.manejarClear}>
        {props.children}
    </div>
    )
};

export default BotonClear;