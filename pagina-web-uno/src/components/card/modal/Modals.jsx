import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineCheckCircle } from "react-icons/ai";

function Modals({id, title, tipos,  handleClose, show }) {
  
  const renderTipos = () => {
    return tipos.map((tipo, index) => (
      <p key={index}><AiOutlineCheckCircle/> {tipo}</p>
    ));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderTipos()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals