import React from 'react'

function Footer() {
    return (
        <footer className="flex justify-around bg-[#00324D] p-4 items-center">
            <div className="flex gap-10 text-white items-center font-semibold">
                <a href="#">Politicas de privacidad</a>
                <a href="#">Politica de cookies</a>
                <a href="#">Aviso legal</a>
            </div>
            <picture>
                <img className="h-12 rounded-lg" src="../../public/gobierno.jpeg" alt="" />
            </picture>
        </footer>
    )
}

export default Footer