import React from 'react'
import Prem from '../assets/premium.PNG'

export const Premium = () => {
    return (
        <div className='premium'>
            <div className='detail'>
                <h1><strong>Termina pronto: $0.00 por 3 meses de Premium</strong></h1>
                <div className='oferta'>
                    <p>No te pierdas la música sin anuncios, la reporducción en modo offline y mucho más. Cancela cuando quieras.</p>
                    <p>La oferta termina en 1d: 3h: 54min.</p>
                </div>
                <div className='meses'>
                    <a href="mes"><strong>OBTÉN 3 MESES POR $0.00</strong></a>
                    <a href="plan"><strong>VER PLANES</strong></a>
                </div>
                <div className='condicion'>
                    <p>Solo para el plan individual. Después cuesta $115.00 al mes. Se aplican Términos y Condiciones. Oferta disponible solo para usuarios que todavía no han probado Premium. La oferta termina el 15/05/23.</p>
                </div>
            </div>
            <div className='imp'>
                <img src={Prem} alt="premio" />
            </div>
        </div>
    )
}
