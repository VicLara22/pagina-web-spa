import React from 'react'
import './centro.css'
import img from '/assets/centro.jpg'

function Centro() {
  return (
    <div id="centro" className='container-centro'>
      <div className='container-centro-text'>
        <h1 className='container-centro-text-h1'>CENTRO</h1>
        <p className='container-centro-text-p'> Con 180 m2 de espacio, nuestro centro ha sido cuidadosamente diseñado como un auténtico SPA. Con áreas claramente definidas, cada rincón está pensado para brindar servicios que satisfacen incluso a los pacientes más exigentes en busca de bienestar y belleza</p>
    </div>
    <div className='container-centro-img'>
        <img src={img} alt="centro" />
    </div>
    
</div>
  )
}

export default Centro 