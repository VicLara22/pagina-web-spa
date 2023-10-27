import React from 'react'
import './portada.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-scroll';

function Portada() {
  return (
    <div className='container-portada'>
      <div className='container-portada-img'>
        <div className='container-portada-title'>
          <h1 className='container-portada-title-h1' >SPA MÉDICO</h1>
          <p className='container-portada-title-p'>CENTRO DE MEDICINA ESTÉTICA, BELLEZA Y BIENESTAR</p>
          <div className='container-portada-btn'>
            <Link to="nosotros" >
              <Button variant="light">SABER MAS</Button>
            </Link>
            <Link to="contacto" >
              <Button variant="primary">CONTACTAR</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portada