import React from 'react'
import logo from '../assets/logo.PNG'
import insta from '../assets/instagram.PNG'
import twit from '../assets/twitter.PNG'
import face from '../assets/facebook.PNG'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='logofooter'>
            <img src={logo} alt="logo" />
        </div>
        <div className='compañia'>
        <p><strong>COMPAÑIA</strong></p>
        <p><strong>Acerca de</strong></p>
        <p><strong>Empleo</strong></p>
        <p><strong>For the record</strong></p>
        </div>
        <div className='comunidades'>
            <p><strong>COMUNIDADES</strong></p>
            <p><strong>Para artistas</strong></p>
            <p><strong>Desarrolladores</strong></p>
            <p><strong>Publicidad</strong></p>
            <p><strong>Inversionistas</strong></p>
            <p><strong>Proveedores</strong></p>
            <p><strong>Spotify for Work</strong></p>
        </div>
        <div className='enlaces'>
            <p><strong>ENLACES ÚTILES</strong></p>
            <p><strong>Ayuda</strong></p>
            <p><strong>Reproductor web</strong></p>
            <p><strong>App móvil gratis</strong></p>
        </div>
        <div className='redes'>
        <img src={insta} alt="gram" />
        <img src={twit} alt="ter" />
        <img src={face} alt="book" />
        </div>
    </div>
  )
}
