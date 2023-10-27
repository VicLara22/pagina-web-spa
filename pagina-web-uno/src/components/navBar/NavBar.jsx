import React from 'react'
import './navBar.css'
import {Link} from 'react-scroll';
function NavBar() {

    const links = [
        {
            id: '1',
            title: 'Nosotros',
            to: 'nosotros'
         
        },
        {
            id: '2',
            title: 'Centro',
            to: 'centro'
        
        },
        {
            id: '3',
            title: 'Servicios',
            to: 'servicios'
        },
        {
            id: '4',
            title: 'Contacto',
            to: 'contacto'
        },

    ]

    return (
        <div className='container-navBar'>
            <div className="container-logo-navBar">
                <h1 className="container-navBar-h1" >SPA</h1>
            </div>
            <div className="container-title-navBar">
                {
                    links.map((t) => (
                        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ 
                        <Link
                            className="container-title-navBar-a"
                            to={t.to}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={200}
                            key={t.id}>
                            {t.title}
                        </Link>
                       
                    )
                    )
                }
            </div>
        </div>
    )
}

export default NavBar 