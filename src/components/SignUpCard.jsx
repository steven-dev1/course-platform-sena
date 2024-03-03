import React from 'react'
import DarkButtons from './DarkButtons'

function SignUpCard({ img, title, category, score, href}) {
    return (
        <article className="w-[300px] flex flex-col gap-3 items-center bg-white p-3 rounded-3xl hover:scale-105 transition-all duration-200 shadow-xl">
            <picture>
                <img src={img} className="w-[261px] h-[200px] bg-slate-400 rounded-3xl "></img>
            </picture>
            <div className="w-full text-black font-bold text-lg">
                <h3 className="truncate text-wrap">{title}</h3>
            </div>
            <div className="text-black flex flex-col w-full">
                <div className="flex gap-2">
                    <div>
                        <span className="font-semibold text-gray-600">{score}</span>
                    </div>
                    <div className="text-yellow-500">
                        <i slot="stars" className="fa-solid fa-star"></i>
                        <i slot="stars" className="fa-solid fa-star"></i>
                        <i slot="stars" className="fa-solid fa-star"></i>
                        <i slot="stars" className="fa-solid fa-star"></i>
                    </div>
                </div>
                <div>
                    <span className="font-medium text-gray-600 text-sm">{category}</span>
                </div>
            </div>
            <div className="flex justify-center">
                <DarkButtons href={href} des="Inscribirme"></DarkButtons>
            </div>
        </article>
    )
}

export default SignUpCard