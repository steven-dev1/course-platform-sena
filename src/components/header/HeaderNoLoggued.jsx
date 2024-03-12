import React from 'react'
import DarkButtons from '../DarkButtons'
import TopMessageHeader from './TopMessageHeader'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderNoLoggued() {
    return (
        <>
            <TopMessageHeader />
            <header className='mb-2 p-3'>
                <nav className='p-4 max-w-[90%] mx-auto'>
                    <ul className='flex justify-between items-center'>
                        <Link href="/">
                            <Image src="/logo.webp" className='m-3' alt='Logo de SENA Learn' width={50} height={50} />
                        </Link>

                        <div className='flex gap-10 items-center'>
                            <Link href="/inicio" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Inicio</Link>
                            <Link href="/categorias" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Cursos</Link>
                            <Link href="/mis-cursos" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Mis cursos</Link>
                        </div>

                        <div>
                            <DarkButtons href="/auth/login">Iniciar sesión</DarkButtons>
                            <DarkButtons href="/auth/login">Registrarse</DarkButtons>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}