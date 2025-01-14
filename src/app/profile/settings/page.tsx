import React from 'react'
import user from '/public/images/user.svg'

const Settings = () => {
    return (
        <div className="rounded-[4px] bg-white pt-[32px] pl-[32px] h-[463px] pr-[51px] w-[966px] shadow-lg ">
            <h1 className='text-[30px] font-bold text-[#11142d] mb-[54px]'>Созламалар</h1>
            <div className='flex gap-[20px] items-center mb-[50px]'>
                <img className='rounded-[100%] border border-[#3f51b5] border-[3px] p-[4px]' src={user.src} alt="user icon" />
                <p className='text-[#3f51b5] text-[20px] font-medium leading-[150%]'>Сурат юклаш</p>
            </div>
            <form className='w-[343px]'>
                <div className='mb-[65px]'>
                    <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                        Исмингиз
                    </label>
                    <input
                        type="text"
                        id="section"
                        className="mb-[24px] mt-[6px] py-[12px] px-[10px] block w-full border-[#ededed] rounded-[16px] shadow focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Исмингиз"
                    />
                </div>
                <button
                    type="button"
                    className="w-full bg-[#3f51b5] text-white py-[7px] rounded-[14px] hover:bg-blue-700 transition"
                >
                    Сақлаш
                </button>
            </form>
        </div>
    )
}

export default Settings
