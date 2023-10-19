import React from 'react'
import  './navBar.css'

function NavBar() {

    const links = [
        {
            id: '1',
            title: 'NOSOTROS',
            link: '/'
        },
        {
            id: '2',
            title: 'CENTRO',
            link: '/'
        },
        {
            id: '3',
            title: 'SERVICIOS',
            link: '/'
        },
        {
            id: '4',
            title: 'CONTACTO',
            link: '/'
        },
        {
            id: '5',
            title: 'SOLICITAR TURNO',
            link: '/'
        }
    ]

  return (
    <div className='container-navBar'>
        <div className="container-logo-navBar">
            <h1>SPA</h1>
        </div>
        <div className="container-title-navBar">
            <ul>
                {
                    links.map((t) => {
                        <li key={t.id}>{t.title}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default NavBar 