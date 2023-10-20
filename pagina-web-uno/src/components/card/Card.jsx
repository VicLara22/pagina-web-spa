import React from 'react'
import Button from 'react-bootstrap/Button'
import './card.css'

function Card({ id, img, title, handleShow }) {
  const handleButtonClick = () => {
    handleShow(id);
  };

  return (
    <div className="container-container-card">
      <div className="container-card">
        <div className='container-card-img'>
          <img key={id} src={img} className="container-card-img-img" alt={title} />
        </div>
        <div className='container-card-text'>
          <h1 className='container-card-h1'>{title}</h1>
          <Button variant="light" onClick={handleButtonClick}>
            SABER MAS
          </Button>
        </div>
      </div>


    </div>
  )
}

export default Card