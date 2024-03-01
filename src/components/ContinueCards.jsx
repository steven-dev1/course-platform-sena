import React from 'react'
import DarkButtons from './DarkButtons'

function ContinueCards() {
    return (
        <article className="w-[300px] flex flex-col gap-3 items-center bg-white p-3 rounded-3xl hover:scale-105 transition-all duration-200 shadow-xl">
            <picture>
                <img src={img} className="w-[261px] h-[200px] bg-slate-400 rounded-3xl "></img>
            </picture>
            <div className="w-full text-black font-bold text-lg">
                <h3 className="truncate">{title}</h3>
            </div>
            <div className="text-black flex flex-col w-full">
                <div className="flex gap-2 flex-col">
                    <div>
                        <span className="font-semibold text-gray-600">Progreso: {progress}%</span>
                    </div>
                    <div className="w-full">
                         {/* <div className="bg-gray-600 w-full h-[4px]"></div>  */}
                        <div className={`bg-[#FF6C20] w-[${progress}%] h-[4px]`}></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <DarkButtons href={href} des="Continuar curso"></DarkButtons>
            </div>
        </article>
    )
}

export default ContinueCards