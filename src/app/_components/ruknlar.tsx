import fetchWrapper from '@/service/fetch-wrapper'
import React from 'react'

interface DataT {
    id: number;
    img: string;
    text: string;
    name: string;
};


export const Ruknlar = async () => {
    const data = await fetchWrapper<DataT[]>("/catalog", {
        next: { tags: ["/catalog"] },
    });


    return (
        <div className='flex gap-[16px]'>
            {data.map((item) => {
                return <div className="relative w-[200px]">
                    <img className="w-full h-full object-cover" src={item.img} alt="img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <h3 className='absolute bottom-[17px] left-[17px] text-white font-semibold text-[18px] leading-[133%]' key={item.id}>{item.text}</h3>
                </div>
            })}
        </div>

    )
}

