import React from 'react'
import bg2 from '/public/images/bg2.png'
import card1 from '/public/images/card1.png'
import card2 from '/public/images/card2.png'

const Account = () => {
    return (
        <div className="rounded-[4px] bg-white pt-[32px] pl-[32px] h-[463px] pr-[51px] w-[966px] shadow-lg ">
            <h1 className='text-[30px] font-bold text-[#11142d] mb-[30px]'>Э-Хисоб</h1>
            <div className='text-white bg-[#3f51b5] pt-[16px] pl-[26px] rounded-[20px] flex justify-between mb-[36px]'>
                <div>
                    <p className='text-[16px] font-normal leading-[150%] mb-[12px]'>Баланс</p>
                    <p className='text-[24px] font-bold leading-[100%]'>45 000 сўм</p>
                </div>
                <img
                    src={bg2.src}
                    alt="Reading Illustration"
                />
            </div>
            <div className='py-[22px] rounded-[20px] border border-[#ededed] mb-[20px] shadow-sm'>
                <img className='ml-auto mr-auto'
                    src={card1.src}
                    alt="card"
                />
            </div>
            <div className='py-[22px] rounded-[20px] border border-[#ededed] shadow-sm'>
                <img className='ml-auto mr-auto'
                    src={card2.src}
                    alt="card"
                />
            </div>
        </div>
    )
}

export default Account
