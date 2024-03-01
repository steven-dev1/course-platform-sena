'use client'
import Image from 'next/image'
// import Inputs from "@/components/Inputs";
import Swal from 'sweetalert2';
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import DangerMessage from '@/components/DangerMessage';

export default function ValidatePage() {
    const classInputs = "my-2 px-3 py-2 rounded-xl bg-[#f0f0f0] outline outline-[2px] outline-[#00324D] focus:outline-[#39A900] text-black"
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {
        const dataJSON = {
            "Id_User": JSON.parse(window.localStorage.getItem("VALIDATE_ID_USER")),
            "codigo": data.codigo
        }
        console.log(dataJSON)
        const res = await fetch('http://127.0.0.1:3000/api/email_validate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataJSON)
        })
        const resJSON = await res.json()
        if (resJSON.result.code == 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cuenta confirmada correctamente",
                showConfirmButton: false,
                timer: 1500
            });
            window.localStorage.removeItem('VALIDATE_ID_USER');
            // window.localStorage.setItem('VALIDATE_ID_USER', JSON.stringify(resJSON.result.data.insertId));
            setTimeout(() => {
                window.location.href = '/';
            }, 1600);
        } else if (resJSON.result.code == 105) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: resJSON.result.data,
            });
        }
    })



    return (
        <section className="bg-bluesena lg:bg-white h-screen w-screen justify-center flex items-center ">
            <div className="mx-auto w-full md:w-3/4 lg:w-2/4 px-3 py-5 justify-center items-center flex flex-col border-bluesena rounded-xl border-[2px]">
                <div className="grid justify-center content-center items-center">
                    <Link href="/" className="cursor-pointer"><Image className="hidden lg:block my-4" src={"/logo.webp"} alt="Logo de SENA Learn" width="50" height="50" /></Link>
                    <Link href="/" className="cursor-pointer"><Image className="block lg:hidden my-4" src={"/logo-white.webp"} alt="Logo de SENA Learn" width="50" height="50" /></Link>
                </div>
                <div className="justify-between">
                    <h1 className="text-2xl font-bold text-white lg:text-black">Verificar cuenta</h1>
                </div>
                <form className="flex flex-col gap-2 justify-center items-center w-3/4 my-2" onSubmit={onSubmit}>
                    <p className="text-sm lg:text-base font-medium text-center text-white lg:text-black">Le hemos enviado un código a su correo electrónico. Introduzcalo a continuación para activar su cuenta.</p>
                    <input placeholder="Código de verificación" type="text" className={classInputs} {...(register("codigo", {
                        required: {
                            value: true,
                            message: "Este campo es obligatorio"
                        },
                    }))} />
                    {errors.codigo && <DangerMessage>{errors.codigo.message}</DangerMessage>}
                    <div>
                        <button className="my-3 inline-block lg:text-white lg:bg-bluesena text-white py-2 px-3 rounded-xl text-base sm:text-xl font-semibold hover:scale-110 transition-all duration-200 hover:shadow-lg bg-greensena text-center">Confirmar</button>
                    </div>
                </form>

            </div>
        </section>
    )
}