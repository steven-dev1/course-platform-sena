import React from 'react'
import Image from 'next/image'

function validacionUI() {
    return (
        // <div className="flex items-center justify-center w-full h-full p-10">
        <section className="h-screen w-screen justify-center flex items-center ">
            <div className="mx-auto w-2/4 px-3 py-5 justify-center items-center flex flex-col border-bluesena rounded-xl border-[2px] gap-4">
                <div className="grid justify-center content-center items-center">
                    <Image src={"/logo-senalearn.webp"} alt="Logo de SENA Learn" width="200" height="200" />
                </div>
                <div className="grid justify-center content-center items-center">
                    <h1 className="text-2xl font-bold">Recuperación de la cuenta</h1>
                </div>
                <div className="flex justify-center items-center w-3/4">
                    <p className="text-sm font-medium text-center">¿Olvidaste tu contraseña? Te enviamos las instrucciones para recuperar tu cuenta al correo que tienes
                        asociado a esta cuenta. <span className="font-bold underline">st****@gmail.com</span>
                    </p>
                </div>
                <div>
                    <button className="inline-block lg:text-white lg:bg-bluesena text-white py-2 px-3 rounded-xl text-base sm:text-xl font-semibold hover:scale-110 transition-all duration-200 hover:shadow-lg bg-greensena text-center">Siguiente</button>
                </div>
            </div>
        </section>

    )
}

export default validacionUI