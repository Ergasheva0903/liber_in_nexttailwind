import React from 'react'
import fetchWrapper from '@/service/fetch-wrapper'
import Star from '../../../public/images/star';
import Headphone from '../../../public/images/headphone';
import Book from '../../../public/images/book';


interface DataT {
    id: number;
    img: string;
    title: string;
    author: string;
};

export const NewAdds = async () => {

    const data = await fetchWrapper<DataT[]>("/newBooks", {
        next: { tags: ["/newBooks"] },
    });

    return (
        <div className='flex gap-[24px]'>
            {data.map((item) => {
                return <div key={item.id}>
                    <img className="w-[239px] rounded-[14px] mb-[18px] h-[336px]" src={item.img} alt="img" />
                    <h3 className='text-[#11142d] font-bold text-[20px]'>{item.title}</h3>
                    <p className='text-[#3f51b5] text-[14px] mb-[16px]'>{item.author}</p>
                    <div>
                        <div className="flex items-center justify-between">
                            <div className='flex'>
                                <Star />
                                <p className="ms-[10px] text-[18px] font-bold text-[#ff7f4d] dark:text-white">4.7</p>
                            </div>
                            <div className='flex gap-[16px]'>
                                <Headphone />
                                <Book />
                            </div>
                        </div>

                    </div>
                </div>
            })}
        </div>

    )
}


