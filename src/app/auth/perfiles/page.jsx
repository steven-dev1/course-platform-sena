import Footer from '@/components/Footer'
import HeaderUser from '@/components/HeaderUser'
import OpcionesUsu from '@/components/OpcionesUsu'
import React from 'react'

function perfilUSuario() {
    return (
        <>
            <HeaderUser />

            <main className='w-11/12 h-screen mx-auto p-10 flex items-center justify-around'>

                <OpcionesUsu/>
                
                <section className='w-2/3 h-4/5 flex flex-col gap-5'>

                    <div className='w-full h-1/3 p-3 flex flex-col items-start justify-around my-10 gap-3'>
                        <div className='mb-3'>
                            <h4 className='font-bold'>Informacion Basica</h4>
                        </div>
                        <div className='w-2/3 h-fit border-black border-2 border-solid p-3'>
                            <p className=''>Nombre</p>
                        </div>
                        <div className='w-2/3 h-fit border-black border-2 border-solid p-3'>
                            <p className=''>Apellido</p>
                        </div>
                        <div className='w-2/3 h-fit border-black border-2 border-solid p-3'>
                            <p className=''>E-mail</p>
                        </div>
                    </div>

                    <div className='w-full h-1/3 p-3 flex flex-col items-start justify-around gap-3'>
                        <div className='mb-3'>
                            <h4 className='font-bold'>Redes Sociales</h4>
                        </div>
                        <div className='w-2/3 h-fit border-black border-2 border-solid p-3'>
                            <p className=''>Facebook</p>
                        </div>
                        <div className='w-2/3 h-fit border-black border-2 border-solid p-3'>
                            <p className=''>X</p>
                        </div>
                        <div className='w-2/3 h-fit border-black border-2 border-solid p-3'>
                            <p className=''>LinkedIn</p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

export default perfilUSuario