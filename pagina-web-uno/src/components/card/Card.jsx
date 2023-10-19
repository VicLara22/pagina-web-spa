import React from 'react'
import Button from 'react-bootstrap/Button';

function Card({id, img, title, handleShow }) {
  const handleButtonClick = () => {
    handleShow(id);
  };


  return (
    <div className="card" style={{width: "18rem"}}>
        <img key={id} src={img} className="card-img-top" alt={title} />
        <h1>{title}</h1>
        <Button variant="primary" onClick={handleButtonClick}>
       SABER MAS
      </Button>
    </div>
  )
}

export default Card