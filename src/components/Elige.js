import React from 'react'
import pagos from '../assets/pagos.PNG'

export const Elige = () => {
    return (
        <div className='planes'>
            <div className='porque'>
                <h2>Elige tu plan Premium.</h2>
            </div>
            <div className='texto'>
                <p>Escucha contenido sin límites en tu teléfono, altavoces y otros dispositivos.</p>
                <img src={pagos} alt="pay" />
            </div>
        </div>
    )
}
