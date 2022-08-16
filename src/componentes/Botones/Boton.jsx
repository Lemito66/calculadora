import React from "react";
import '../../hojas-de-estilo/Botones/Boton.css';
function Boton(props){
    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');//No es un numero y no es un  punto y no es un signo de igual
    };
    return (
        <button
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
            onClick={() => props.manejarClic(props.children)}>{/*  Hacemos un llamado a la función OnCLick, una función autoinvocada*/}
            {props.children}
        </button>
    )
}
export default Boton;