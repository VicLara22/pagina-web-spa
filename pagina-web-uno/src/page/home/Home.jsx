import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Portada from '../../components/portada/Portada';
import Nosotros from '../../components/sections/nosotros/Nosotros';
import Centro from '../../components/sections/centro/Centro';
import Servicios from '../../components/sections/servicios/Servicios';

function Home() {
  return (
    <div>
      <NavBar />
      <Portada />
      <Nosotros/>
      <Centro/>
      <Servicios/>
    </div>
  )
}

export default Home 