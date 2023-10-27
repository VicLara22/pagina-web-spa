import React from 'react'
import './nosotros.css'
import img from '/assets/nosotros.jpg'

function Nosotros() {
    return (
        <section  id="nosotros"> 
        <div  className='container-nosotros'>
            <div className='container-nosotros-img'>
                <img src={img} alt="nosotros" />
            </div>
            <div className='container-nosotros-text'>
                <h1 className='container-nosotros-text-h1'>NOSOTROS</h1>
                <p className='container-nosotros-text-p'> ¡Dedicados al cuidado integral de adultos por más de 10 años! Nuestra SPA se especializa en brindar servicios de salud, belleza y bienestar. Con una trayectoria ininterrumpida, hemos atendido con dedicación a más de 20,000 pacientes. En nuestra travesía, hemos acumulado experiencia invaluable, consolidando nuestro compromiso desde la Dirección Médica para asegurar servicios de calidad y excelencia. 
                Nos enorgullece ser parte de tu bienestar y estamos comprometidos con tu salud a lo largo de los años. ¡Te invitamos a experimentar nuestra dedicación y profesionalismo!</p>
            </div>
        </div>
        </section>
    )
}

export default Nosotros