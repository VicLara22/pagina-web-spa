import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Portada from '../../components/portada/Portada';
import Nosotros from '../../components/sections/nosotros/Nosotros';
import Centro from '../../components/sections/centro/Centro';
import Servicios from '../../components/sections/servicios/Servicios';
import Contact from '../../components/sections/contact/Contact';
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
      <NavBar />
      <Portada />
      <Nosotros/>
      <Centro/>
      <Servicios/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home 