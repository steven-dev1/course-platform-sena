import React from 'react'

function validacionUI() {
return (
    <div className="flex items-center justify-center w-full h-full p-10">
        <section className="flex flex-col w-[863px] h-[599px] border border-[#00324D] rounded-[20px]  justify-around items-center">
            <div className="grid justify-center content-center items-center">
                <img src="/public/img/logo-senalearn.jpg" alt="" />
            </div>
            <div className="grid justify-center content-center items-center">
                <h1 className="text-[36px] font-bold">Recuperación de la cuenta</h1>
            </div>
            <div className="flex justify-center items-center w-[80%]">
                <p className="text-[16px]">¿Olvidaste tu contraseña? Te enviamos las instrucciones para recuperar tu cuenta al correo que tienes
                    asociado a esta cuenta. st****@gmail.com
                </p>
            </div>
            <div>
                <button className="cursor-pointer bg-[#00324D] text-[white] py-2 px-3 rounded-xl text-base sm:text-xl font-semibold mx-3 hover:scale-110 transition-all duration-200 hover:shadow-lg w-[186px] h-[50px]">Siguiente</button>
            </div>
        </section>
    </div>  
)
}

export default validacionUI