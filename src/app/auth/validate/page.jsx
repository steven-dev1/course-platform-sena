import LogoSenaLearn from "@/components/LogoSenaLearn";
import Image from 'next/image'
import Inputs from "@/components/Inputs";

export default function validatePage() {
    return (
        <section className="bg-bluesena lg:bg-white h-screen w-screen justify-center flex items-center ">
            <div className="mx-auto w-full md:w-3/4 lg:w-2/4 px-3 py-5 justify-center items-center flex flex-col border-bluesena rounded-xl border-[2px]">
                <div className="grid justify-center content-center items-center">
                    <Image src={"/logo-senalearn.webp"} alt="Logo de SENA Learn" width="200" height="200" />
                </div>
                <div className="justify-between">
                    <h1 className="text-2xl font-bold text-white lg:text-black">Verificar cuenta</h1>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-3/4 my-2">
                    <p className="text-sm font-medium text-center text-white lg:text-black">Verifique su direccion de correo electronico para poder continuar con la  activacion de su cuenta.
                    </p>
                    <Inputs type={"text"} placeholder={"Código de verificación"}></Inputs>
                </div>
                <div>
                    <button className="my-3 inline-block lg:text-white lg:bg-bluesena text-white py-2 px-3 rounded-xl text-base sm:text-xl font-semibold hover:scale-110 transition-all duration-200 hover:shadow-lg bg-greensena text-center">Confirmar</button>
                </div>
            </div>
        </section>
    )
}