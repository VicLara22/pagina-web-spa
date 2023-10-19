import React from 'react'
import './portada.css'
import Button from 'react-bootstrap/Button';

function Portada() {
  return (
    <div className='container-portada'>
      <div className='container-portada-img'>
        <div className='container-portada-title'>
          <h1>SPA MÉDICO</h1>
          <p>CENTRO DE MEDICINA ESTÉTICA, BELLEZA Y BIENESTAR</p>
          <Button variant="light">SABER MAS</Button>
        </div>
      </div>
    </div>
  )
}
 
export default Portada