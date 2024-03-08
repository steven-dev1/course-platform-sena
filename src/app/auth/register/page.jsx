'use client'
import Link from "next/link"
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form"
import DangerMessage from "@/components/DangerMessage"

export default function Register() {
    const classInputs = "my-2 px-3 py-2 rounded-xl bg-[#f0f0f0] outline outline-[2px] outline-[#00324D] focus:outline-[#39A900] text-black"
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {

        if(data.Pass_User !== data.confirmPassword){
            return (
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Las contraseñas no coinciden, intentalo de nuevo",
                  })
            )
        }

        const dataJSON = {
            "Nom_User": data.Nom_User,
            "Ape_User": data.Ape_User,
            "Ema_User": data.Ema_User,
            "Pass_User": data.Pass_User,
            "Dir_Ip": "198"
        }
        const res = await fetch('http://127.0.0.1:3000/api/register', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataJSON)
        })
        const resJSON = await res.json()
        // console.log(resJSON)
        if (resJSON.result.code == 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Te has registrado exitosamente",
                showConfirmButton: false,
                timer: 1500
            });
            // console.log(resJSON.result.data.InsertId)
            window.localStorage.setItem('VALIDATE_ID_USER', JSON.stringify(resJSON.result.data.InsertId));
            setTimeout(() => {
                window.location.href = '/auth/validate';
            }, 1600);
        } else if (resJSON.result.code == 107){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ese correo ya está registrado, intentalo de nuevo.",
            });
        }
    })

    return (
        <main className="w-full h-screen flex justify-center items-center bg-[#00324D] lg:bg-[#00324D]" >
            <section className="lg:w-2/4 lg:h-full hidden lg:flex w-full flex-col items-center gap-2 mx-auto justify-center p-10 text-center border-r-[16px] border-[#39A900]">
                <h3 className="text-3xl font-bold text-white">¿Ya tienes una cuenta?</h3>
                <span className="text-white">Inicia sesión para acceder a los cursos.</span>
                <Link href="./login" id="desktop-register-btn" className="bg-white text-[#00324D] py-2 px-3 rounded-xl text-xl font-semibold mx-3 hover:scale-110 transition-all duration-200 hover:shadow-lg">Iniciar sesión</Link>
            </section>
            <section className="bg-[#00324D] mx-auto lg:bg-white w-full lg:w-3/4 lg:h-full flex-col items-center justify-center gap-2 flex text-center">
                <h2 className="text-3xl lg:text-3xl font-bold text-white lg:text-[#00324D]">Registro</h2>
                {/* Formulario de registro */}
                <form className="flex flex-col w-3/4 sm:w-2/4" onSubmit={onSubmit}>
                    <input placeholder="Nombre" type="text" className={classInputs} {...(register("Nom_User", {
                        required: {
                            value: true,
                            message: "Este campo es obligatorio"
                        },
                    }))} />
                    {errors.Nom_User && <DangerMessage>{errors.Nom_User.message}</DangerMessage>}
                    <input placeholder="Apellido" type="text" className={classInputs} {...(register("Ape_User", {
                        required: {
                            value: true,
                            message: "Este campo es obligatorio"
                        },
                    }))} />
                    {errors.Ape_User && <DangerMessage>{errors.Ape_User.message}</DangerMessage>}
                    <input placeholder="Email" type="email" className={classInputs} {...(register("Ema_User", {
                        required: {
                            value: true,
                            message: "Este campo es obligatorio"
                        },
                    }))} />
                    {errors.Ema_User && <DangerMessage>{errors.Ema_User.message}</DangerMessage>}
                    <input placeholder="Contraseña" type="password" className={classInputs} {...(register("Pass_User", {
                        required: {
                            value: true,
                            message: "Este campo es obligatorio"
                        },
                    }))} />
                    {errors.Pass_User && <DangerMessage>{errors.Pass_User.message}</DangerMessage>}
                    <input placeholder="Repite la contraseña" type="password" className={classInputs} {...(register("confirmPassword", {
                        required: {
                            value: true,
                            message: "Este campo es obligatorio"
                        },
                    }))} />
                    {errors.confirmPassword && <DangerMessage>{errors.confirmPassword.message}</DangerMessage>}
                    <div className="flex items-center flex-col mt-2">
                        <button className="inline-block lg:text-white lg:bg-bluesena text-white py-2 px-3 rounded-xl text-base sm:text-xl font-semibold hover:scale-110 transition-all duration-200 hover:shadow-lg bg-greensena" type="submit">Registrarse</button>
                    </div>
                    {/* Botones de registro e iniciar sesión */}
                    <div className="lg:hidden flex flex-col sm:flew-row my-3">
                        <div className="flex items-center flex-col my-1">
                            <p className="text-xs sm:text-sm md:text-base mx-4 lg:text-bluesena text-white">¿Ya tienes una cuenta? <Link href={"/auth/login"} className="m-1 underline bg-[#39A900] py-1 font-medium px-2 rounded-lg transition-all duration-100 cursor-pointer">Iniciar sesión</Link></p>
                        </div>
                    </div>
                </form>
                {/* Botones de auth con redes sociales */}
                <div className="w-2/4 flex flex-col justify-center items-center">
                    <div className="flex items-center justify-evenly gap-2 mb-2">
                        <hr className="w-[40px] border-b-1 border-white lg:border-black" />
                        <span className="text-white lg:text-black flex-3">o accede con</span>
                        <hr className="w-[40px] border-b-1 border-white lg:border-black" />
                    </div>
                    <div className="flex gap-3">
                        <svg className="bg-bluesena p-1 rounded-full hover:scale-125 transition-all duration-200 cursor-pointer bi bi-google" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg>
                        <svg className="bg-bluesena p-1 rounded-full hover:scale-125 transition-all duration-200 cursor-pointer bi bi-facebook" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    )
}