import Image from 'next/image'
import React from 'react'
import telegram from '/public/images/telegram.svg'
import instagram from '/public/images/instagram.svg'
import youtube from '/public/images/youtube.svg'
import tiktok from '/public/images/tiktok.svg'
import facebook from '/public/images/facebook.svg'

export const Footer = () => {
  return (
    <footer>
      <div className='bg-[#eef4ff] pt-[31px] pb-[65px]'>
        <div className='container grid grid-cols-4'>
          <ul>
            <li className='font-bold text-[20px] text-[#11142d] mb-[14px]'>Платформа хақида</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Liber ўзи нима?</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Фойдаланиш шартлари</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Ёрдам</li>
          </ul>
          <ul>
            <li className='font-bold text-[20px] text-[#11142d] mb-[14px]'>Обуна хақида</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Обуна бўлиш</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Қандай тўлаш</li>
          </ul>
          <ul>
            <li className='font-bold text-[20px] text-[#11142d] mb-[14px]'>Китоблар</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Аудио китоблар</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Электрон китоблар</li>
            <li className='text-[18px] text-[#11142d] mb-[18px]'>Китоблар</li>
          </ul>
          <ul>
            <li className='font-bold text-[20px] text-[#11142d] mb-[14px]'>Мобил илова</li>
            <Image className='mb-[16px]' src="/images/googleplay.png" alt="img" width={161} height={47} />
            <Image src="/images/appstore.png" alt="img" width={161} height={47} />
          </ul>
        </div>
      </div>
      <div className='bg-[#10182c] pt-[12px] pb-[34px]'>
        <div className='container text-white grid grid-cols-3'>
        <ul>
          <li className='font-light text-[14px] mb-[12px]'>Ижтимоий тармоқлар</li>
          <li className='flex gap-[24px]'>
            <img src={facebook.src} alt="icon" width={"24px"} />
            <img src={youtube.src} alt="icon" width={"24px"} />
            <img src={tiktok.src} alt="icon" width={"24px"} />
            <img src={telegram.src} alt="icon" width={"24px"} />
            <img src={instagram.src} alt="icon" width={"24px"} />
          </li>
        </ul>
        <ul>
          <li className='font-light text-[14px] mb-[12px]'>Боғланиш</li>
          <li className='flex gap-[24px]'>
            <a className='font-light text-[16px]' href='tel:+998902537753'>+998 90 253 77 53</a>
            <a className='font-light text-[16px]' href='mailto:support@liber.uz'>support@liber.uz</a>
          </li>
        </ul>
        <ul>
          <li className='font-light text-[14px] mb-[9px]'>Биз қабул қиламиз</li>
          <li className='flex gap-[8px]'>
            <img className='py-[9px] px-[6px] rounded-[5px] bg-white' src="/images/uzcard.png" width={57} height={27}  alt="card icon" />
            <img className='py-[9px] px-[6px] rounded-[5px] bg-white' src="/images/humocard.png" width={57} height={27} alt="card icon" />
            <img className='py-[9px] px-[6px] rounded-[5px] bg-white' src="/images/payme.png" width={57} height={27} alt="card icon" />
          </li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

