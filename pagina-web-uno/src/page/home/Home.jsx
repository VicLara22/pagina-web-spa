import React, { useEffect, useState } from 'react'
import data from '../../data/data.json';
import NavBar from '../../components/navBar/NavBar'
import Card from '../../components/card/Card'
import Modals from '../../components/card/modal/Modals';
import Portada from '../../components/portada/Portada';
import Nosotros from '../../components/sections/nosotros/Nosotros';

function Home() {
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

  return (
    <div>
      <NavBar />
      <Portada/>
      <Nosotros/>
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

export default Home 