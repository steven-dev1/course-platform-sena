import React from 'react'

function HeaderUser() {
    return (
        <>
            <header className='mb-2 p-5'>
                <nav className='p-4 max-w-[90%] mx-auto'>
                    <ul className='flex justify-between items-center'>
                        <a hreft="#">
                            <img src="/logo-senalearn.jpg" className='w-28 m-3' />
                        </a>

                        <div className='flex gap-10 items-center'>
                            <a href="/auth/principal" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Inicio</a>
                            <a href="/auth/categorias" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Cursos</a>
                            <a href="/auth/perfiles" className="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Mis cursos</a>
                        </div>

                        <div>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default HeaderUser