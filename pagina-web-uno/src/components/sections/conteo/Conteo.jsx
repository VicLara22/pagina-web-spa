import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './conteo.css'

function Conteo() {
  return (
    <div className='container-conteo'> 
    <Container >
      <Row md={4}>
        <Col>
          <h1 className='container-conteo-h1'>12</h1>
          <p className='container-conteo-p'>AÑOS DE EXPERIENCIA</p>
        </Col>
        <Col xs={6}>
          <h1 className='container-conteo-h1'>+20 MIL</h1>
          <p className='container-conteo-p'>PACIENTES</p>
        </Col>
        <Col>
          <h1 className='container-conteo-h1'>160</h1>
          <p className='container-conteo-p'>M2 DE INSTALACIONES</p>
        </Col>
        <Col>
          <h1 className='container-conteo-h1'>+70</h1>
          <p className='container-conteo-p'>TRATAMIENTOS</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Conteo