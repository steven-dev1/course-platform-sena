
import DarkButtons from '../DarkButtons'
import Image from 'next/image'

export default function ContinueCards({img, progress, title}) {
    {
        return (
            <article class="w-[300px] flex flex-col gap-3 items-center bg-white p-3 rounded-3xl hover:scale-105 transition-all duration-200 shadow-xl">
                <picture>
                    <Image src={img} class="w-[261px] h-[200px] bg-slate-400 rounded-3xl" alt="" width="261" height="200"/>
                </picture>
                <div class="w-full text-black font-bold text-lg">
                    <h3 class="truncate">{title}</h3>
                </div>
                <div class="text-black flex flex-col w-full">
                    <div class="flex gap-2 flex-col">
                        <div>
                            <span class="font-semibold text-gray-600">Progreso: {progress}%</span>
                        </div>
                        <div class="w-full">
                            <div class="bg-gray-600 w-full h-[4px]"></div>
                            <div class={`bg-[#FF6C20] w-[${progress}%] h-[4px]`}></div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <DarkButtons href="#">Continuar curso</DarkButtons>
                </div>
            </article>
        )
    }
}