import React from 'react'
import './footer.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

function Footer() {
    return (

        <footer >
            <div className='containerText'>

                <h1>© Todos los derechos reservados</h1>

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
            <div>
                <div className="redes-sociales-icon">
                    <BsInstagram className='instagram'/>
                    <BsFacebook className='facebook'/>
                </div>
            </div>
        </footer>

    )
}

export default Footer

