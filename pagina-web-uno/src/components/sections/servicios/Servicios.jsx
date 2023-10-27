import React, { useEffect, useState } from 'react'
import data from '../../../data/data'
import './servicios.css'
import Card from '../../card/Card';
import Modals from '../../card/modal/Modals';


function Servicios() {
  const [jsonData, setJsonData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    setJsonData(data);
  }, []);

  const handleShow = (itemId) => {
    setSelectedItemId(itemId);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const baseUrl = '/assets';

  return (
    <div id='servicios'>
      <div className='container-service-text'> 
        <h1 className="container-service-h1">SERVICIOS</h1>
        </div>
      {jsonData?.map((s) => (
        <Card
          key={s.id}
          id={s.id}
          title={s.title}
          subtitle={s.subtitle}
          tipos={s.tipos}
          img={s.img}
          handleShow={handleShow}
        />
      )
      )}
      {selectedItemId && (
        <Modals
          key={selectedItemId}
          id={selectedItemId}
          title={jsonData.find((item) => item.id === selectedItemId)?.title || ''}
          subtitle={jsonData.find((item) => item.id === selectedItemId)?.subtitle || ''}
          tipos={jsonData.find((item) => item.id === selectedItemId)?.tipos || ''}
          img={jsonData.find((item) => item.id === selectedItemId)?.img || ''}
          handleClose={handleClose}
          show={showModal}
        />
      )}
    </div>
  )
}

export default Servicios