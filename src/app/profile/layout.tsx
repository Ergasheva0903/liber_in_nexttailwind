import Link from 'next/link'
import React from 'react'
import Profile from './page'
import Image from 'next/image'
import subscribe from '/public/images/subscribe.svg'
import account from '/public/images/account.svg'
import books from '/public/images/books.svg'
import saved from '/public/images/saved.svg'
import settings from '/public/images/settings.svg'
import nightmode from '/public/images/nightmode.svg'


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#FBFBFB]'>
            <div className='bg-white border-b-[1px] mb-[52px]'>
                <div className='flex py-[12px] container'>
                    <p className='text-[16px] font-medium text-[#3f51b5]'>Бош сахифа /</p>
                    <p className='text-[16px] font-medium text-[#9a9a9a]'>Профиль</p>
                </div>
            </div>
            <div className='container p-[24px] w-full bg-white rounded-[4px] shadow-md mb-[62px] flex gap-[33px]'>
                <Image src="/images/girl.png" width={163} height={163} alt='img' />
                <div>
                    <p className='font-bold text-[30px] text-[#11142d] mb-[10px]'>Суғдиёна Икромова</p>
                    <p className='font-medium text-[20px] text-[#242424] mb-[10px]'>+998 90 253 77 53</p>
                    <p className='font-medium text-[20px] text-[#9a9a9a]'>ID: 0001  Баланс: 45 000 сўм</p>
                </div>
            </div>
            <div className='flex container pb-[120px] gap-[36px]'>
                <div className='px-[24px] pt-[36px] pb-[42px] w-[288px] h-[345px] gap-[7px] flex flex-col bg-white rounded-[4px] shadow-md'>
                    <div className='flex gap-[12px]'>
                        <img src={subscribe.src} alt="icon" />
                        <Link className='font-medium text-[#242424] text-[18px] leading-[222%] focus:font-bold focus:text-[#3f51b5]' href={`/profile/subscribe`}>Обуна бўлиш</Link>
                    </div>
                    <div className='flex gap-[12px]'>
                        <img src={account.src} alt="icon" />
                        <Link className='font-medium text-[#242424] text-[18px]  leading-[222%] focus:font-bold focus:text-[#3f51b5]' href={`/profile/account`}>Э-Хисоб</Link>
                    </div>
                    <div className='flex gap-[12px]'>
                        <img src={books.src} alt="icon" />
                        <Link className='font-medium text-[#242424] text-[18px]  leading-[222%] focus:font-bold focus:text-[#3f51b5]' href={`/profile/books`}>Китобларим</Link>
                    </div>
                    <div className='flex gap-[12px]'>
                        <img src={saved.src} alt="icon" />
                        <Link className='font-medium text-[#242424] text-[18px]  leading-[222%] focus:font-bold focus:text-[#3f51b5]' href={`/profile/saved`}>Сақланганлар</Link>
                    </div>
                    <div className='flex gap-[12px]'>
                        <img src={settings.src} alt="icon" />
                        <Link className='font-medium text-[#242424] text-[18px]  leading-[222%] focus:font-bold focus:text-[#3f51b5]' href={`/profile/settings`}>Созламалар</Link>
                    </div>
                    <div className='flex gap-[12px]'>
                        <img src={nightmode.src} alt="icon" />
                        <Link className='font-medium text-[#242424] text-[18px]  leading-[222%] focus:font-bold focus:text-[#3f51b5]' href={`/profile/night-mode`}>Тунги режим</Link>
                    </div>

                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ProfileLayout
