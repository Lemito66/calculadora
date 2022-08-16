import React from "react";
import imagenLogo from '../../imagenes/freecodecamp-logo.png';
import '../../hojas-de-estilo/Logo/'

function logoFreeCodeCamp(){
    return(
        <div className='freecodecamp-logo-contenedor'>
            <img 
            src={imagenLogo}
            className='freecodecamp-logo'
            alt='Logo de freeCodeCamp' />
        </div>
    )

}
export default logoFreeCodeCamp;