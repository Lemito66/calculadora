import React from "react";
import imagenLogo from '../../imagenes/freecodecamp-logo.png';
import '../../hojas-de-estilo/Logo/Freecodecamp-Logo.css'

function LogoFreeCodeCamp(){
    return(
        <div className='freecodecamp-logo-contenedor'>
            <img 
            src={imagenLogo}
            className='freecodecamp-logo'
            alt='Logo de freeCodeCamp' />
        </div>
    )

}
export default LogoFreeCodeCamp;