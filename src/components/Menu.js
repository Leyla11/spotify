import React from 'react'
import spo from '../assets/logo.PNG'

export const Menu = () => {
  return (
    <div className='navegador'>
    <div className='logo'>
    <img src={spo} alt="tify" />
    </div>
    <div className='main'>
        <a href="premium"><strong>Premium</strong></a>
        <a href="ayuda"><strong>Ayuda</strong></a>
        <a href="descargar"><strong>Descargar</strong></a>
        <p><strong>|</strong></p>
        <a href="registrarsee"><strong>Registrarse</strong></a>
        <a href="inicio"><strong>Iniciar sesión</strong></a>
    </div>
    </div>
  )
}

