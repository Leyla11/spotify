import React from 'react'
import note from '../assets/nota.PNG'
import anuncio from '../assets/anuncio.PNG'
import notes from '../assets/notas.PNG'
import play from '../assets/play.PNG'

export const Cambia = () => {
    return (
        <div className='cambiate'>
            <div className='porque'>
                <h2><strong>¿Por que cambiarte a Premium?</strong></h2>
            </div>
            <div className='sections'>
                <div className='descarga'>
                    <img src={note} alt="nota" />
                    <p><strong>Descarga música.</strong></p>
                    <p>Escucha donde sea.</p>
                </div>
                <div className='escucha'>
                    <img src={anuncio} alt="sin" />
                    <p><strong>Escucha música sin <br />
                     anuncios.</strong></p>
                    <p>Disfruta de música sin <br />
                     interrupciones.</p>
                </div>
                <div className='reproduce'>
                    <img src={notes} alt="not" />
                    <p><strong>Reporduce la canción que <br />
                     quieras.</strong></p>
                    <p>Incluso en dispositivos móviles.</p>
                </div>
                <div className='saltos'>
                    <img src={play} alt="saltos" />
                    <p><strong>Saltos ilimitados.</strong></p>
                    <p>Pasa a la siguiente</p>
                </div>
            </div>
        </div>
    )
}
