import React from 'react'

function OpcionesUsu() {
    return (
        <section className='bg-[#00324d] w-1/4 h-4/5 rounded-3xl flex flex-col items-center p-5 justify-evenly'>

            <div className='mb-5'>
                <div className=''>

                    <div>
                        <img src='#' />
                    </div>
                    <h3 className='text-xl text-white'>
                        Nombre de Usuario
                    </h3>
                </div>
            </div>

            <hr className='bg-white w-11/12 ' />

            <nav className='w-full h-1/2 p-5 mt-5 '>

                <ul className='w-full h-full flex flex-col items-center justify-around cursor-pointer'>
                    <li className='text-white font-bold text-xl hover:bg-[#82DEF0] hover:text-[#00324d] w-full text-center'>
                        <a href='#'>Informacion</a>
                    </li>
                    <li className='text-white font-bold text-xl hover:bg-[#82DEF0] hover:text-[#00324d] w-full text-center'>

                        <a href='#'>Mis cursos</a>
                    </li>
                    <li className='text-white font-bold text-xl hover:bg-[#82DEF0] hover:text-[#00324d] w-full text-center'>

                        <a href='#'>mis certificados</a>
                    </li>
                    <li className='text-white font-bold text-xl hover:bg-[#82DEF0] hover:text-[#00324d] w-full text-center'>

                        <a href='#'>Ajustes de seguridad</a>
                    </li>
                </ul>

            </nav>

        </section>
    )
}

export default OpcionesUsu