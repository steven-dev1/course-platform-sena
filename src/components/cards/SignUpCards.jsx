import Image from 'next/image';
import DarkButtons from '../DarkButtons';

export default function SignUpCards({score, title, img, category, href}) {
    return (
        <article class="w-[300px] flex flex-col gap-3 items-center bg-white p-3 rounded-3xl hover:scale-105 transition-all duration-200 shadow-xl">
            <picture>
                <Image src={img} class="w-[261px] h-[200px] bg-slate-400 rounded-3xl " alt="" width="261" height="200"/>
            </picture>
            <div class="w-full text-black font-bold text-lg">
                <h3 class="truncate">{title}</h3>
            </div>
            <div class="text-black flex flex-col w-full">
                <div class="flex gap-2">
                    <div>
                        <span class="font-semibold text-gray-600">{score}</span>
                    </div>
                    <div class="text-yellow-500">
                        <slot name="stars" />
                    </div>
                </div>
                <div>
                    <span class="font-medium text-gray-600 text-sm">{category}</span>
                </div>
            </div>
            <div class="flex justify-center">
                <DarkButtons href="#">Inscribirme</DarkButtons>
            </div>
        </article>
    )
}