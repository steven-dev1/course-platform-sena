import Link from "next/link";

export default function Header() {
    return (
        <header class="mb-2">
            <nav class="p-3 max-w-[90%] mx-auto">
                <ul class="flex justify-between items-center">
                    <picture>
                        <Image className="w-28 m-3" src="../../public/Sena Learn LOGO.png" alt="" />
                    </picture>
                    <div class="flex gap-10 items-center">
                        <Link href="/">Inicio</Link>
                        <Link href="/courses">Cursos</Link>
                        <Link href="/auth/login" class="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Iniciar sesión</Link>
                        <Link href="/auth/register" class="hover:scale-[1.15] hover:text-[#00324D] transition-all duration-200">Registrarse</Link>
                    </div>
                </ul>
            </nav>
        </header>
    )
}