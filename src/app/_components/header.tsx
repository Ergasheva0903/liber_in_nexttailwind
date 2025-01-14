import Link from 'next/link'
import React from 'react'
import logo from '/public/images/logo.svg'
import search from '/public/images/search_icon.svg'
import user from '/public/images/user_icon.svg'
import rukn from '/public/images/ruknlar_icon.svg'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b-[1px]">
      <div className='container flex justify-between'>
        <img src={logo.src} alt='logo'/>

        <nav className="flex items-center gap-[64px]">
          <div className='flex items-center gap-[4px]'>
          <div className='flex gap-[12px] border border-[#e1e1e1] py-[12px] px-[24px] rounded-l-[14px] '>
            <img src={rukn.src} alt="icon" />
            <p className="font-semibold text-[16px] text-indigo-600">Рукнлар</p>
          </div>
          <div className="flex items-center border rounded-r-[14px]">
            <input
              type="text"
              placeholder="Қидириш"
              className="px-[24px] py-[13px] text-[16px] border-none outline-none w-[550px]"
            />
            <img className='px-[24px]' src={search.src} alt="icon" />
          </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <button className="font-semibold text-[16px] text-indigo-600">Ўз</button>
            <div className='flex'>
              <img className='pl-[27px] pr-[15px] bg-[#3f51b5] rounded-l-[14px]' src={user.src} alt="icon" />
              <Link href='/profile' className='py-[12px] bg-[#3f51b5] text-[16px] font-semibold text-white pr-[24px] rounded-r-[14px]'>Кириш</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

