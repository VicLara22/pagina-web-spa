import React from 'react'
import './footer.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { Link } from 'react-scroll';

function Footer() {

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

        <footer >

            <div className='containerText'>
                <div className="container-secciones">
                    {
                        links.map((t) => (
                            <Link
                            className="container-title-secciones "
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
            <div className='containerText'>
                <div className="redes-sociales-icon">
                    <BsInstagram className='instagram' />
                    <BsFacebook className='facebook' />
                </div>

                <div className='whatsapp'>
                    <a
                        target="_blanck"
                        href="https://api.whatsapp.com/send?phone=541169962751"
                    >
                        <BsWhatsapp className='icon' />
                    </a>
                </div>

                <p className='msj'>Envianos un mensaje</p>
            </div>
            <h1>© Todos los derechos reservados</h1>

        </footer>

    )
}

export default Footer

