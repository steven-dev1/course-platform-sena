import React from 'react'
import DarkButtons from './DarkButtons'
import MensajeHeader from './MensajeHeader'

function Header() {
    return (
        <>
        <MensajeHeader/>
            <header className='mb-2 p-5'>
                <nav className='p-4 max-w-[90%] mx-auto'>
                    <ul className='flex justify-between items-center'>
                        <a hreft="#">
                            <img src="../../public/img/logo-senalearn.jpg" className='w-28 m-3' />
                        </a>

                        <div className='flex gap-10 items-center'>
                            <a href="#" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Inicio</a>
                            <a href="#" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Cursos</a>
                            <a href="#" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Mis cursos</a>
                        </div>

                        <div>
                            <DarkButtons href="#" des="iniciar sesíon" />
                            <DarkButtons href="#" des="Registrarse" />
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header