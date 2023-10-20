import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Sections from '../../components/sections/Sections';
import Portada from '../../components/portada/Portada';

function Home() {
  return (
    <div>
      <NavBar />
      <Portada />
      <Sections />
    </div>
  )
}

export default Home 