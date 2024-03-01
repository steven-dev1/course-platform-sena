import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Inputs from '@/components/Inputs'
function categorias() {
    return (
        <>
            <Header />

            <main className='flex flex-col w-full bg-[#eee] h-fit'>

                <section className='w-full flex items-center justify-center h-fit p-1 bg-[#00324D]'>
                    <nav className='w-3/4 flex items-center justify-around'>
                        <div className='w-1/2 flex items-center justify-evenly p-1'>
                            <select className='rounded-xl p-2 ml-2'>
                                <option value="sistemas">Categoria</option>
                                <option value="sistemas">sistemas</option>
                                <option value="sistemas">confeccion</option>
                            </select>
                            <select className='rounded-xl p-2 ml-2'>
                                <option value="sistemas">puntuacion</option>
                                <option value="sistemas">1-2 estrellas</option>
                                <option value="sistemas">2-3 estrellas</option>
                                <option value="sistemas">4-3 estrellas</option>
                                <option value="sistemas">4-5 estrellas</option>
                            </select>
                            <select className='rounded-xl p-2 ml-2'>
                                <option value="sistemas">duracion</option>
                                <option value="sistemas">1-2 horas</option>
                                <option value="sistemas">2-3 horas</option>
                            </select>


                        </div>

                        <div className='w-1/2 flex items-center justify-evenly p-1'>
                            <Inputs placeholder="Buscar" type="text" />
                        </div>
                    </nav>
                </section>

                <div className="w-full flex items-center justify-center mt-6 mb-6">
                    <h2 className='text-3xl font-bold text-[#00324d] tex-center'>Cursos de programacion</h2>
                </div>

                <section className='grid w-full grid-col-3'>

                </section>

            </main>

            <Footer />
        </>
    )
}

export default categorias
