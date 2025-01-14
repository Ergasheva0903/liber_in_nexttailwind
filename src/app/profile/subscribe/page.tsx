import React from 'react'
import bg from '/public/images/bg.png'

const Subscribe = () => {
  return (
    <div>
      <div className="bg-[#EF8659] text-white pt-[32px] pl-[32px] rounded-[12px] flex justify-between w-[966px] mb-[24px]">
        <div className="w-[331px]">
          <h1 className="text-[26px] font-bold leading-[123%]">Узингиз севган булимга
            обуна бўлинг</h1>
        </div>
        <div>
          <img
            src={bg.src}
            alt="Reading Illustration"
          />
        </div>
      </div>
      <div className="rounded-[4px] bg-white pt-[32px] pl-[32px] h-[463px] pr-[51px] flex justify-between items-center shadow-lg">
        <div>
          <h2 className="text-[30px] font-bold text-[#11142d] mb-[30px]">Обуна</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Обуна давом этиш вакти
              </label>
              <input
                type="text"
                id="duration"
                className="mb-[24px] mt-[6px] py-[12px] px-[10px] block w-[343px] border-[#ededed] rounded-[16px] shadow focus:ring-orange-500 focus:border-orange-500"
                placeholder="30 кун"
              />
            </div>

            <div>
              <label htmlFor="section" className="block text-sm font-medium text-gray-700">
                Булимни танланг
              </label>
              <input
                type="text"
                id="section"
                className="mb-[24px] mt-[6px] py-[12px] px-[10px] block w-[343px] border-[#ededed] rounded-[16px] shadow focus:ring-orange-500 focus:border-orange-500"
                placeholder="Фантастика"
              />
            </div>

            <div className="text-[20px] font-bold text-[#11142d]">
              Обуна 30 кун давом этади
            </div>
          </form>
        </div>

        <div className="p-6 w-[368px]">
          <div className='bg-[#f5f5f5] px-[16px] pt-[16px] pb-[27px] mb-[34px]'>
            <div className="flex justify-between items-center mb-3">
              <p>Бошланиш вакти</p>
              <p className="font-bold text-[14px] text-[#242424]">12/09/2021</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p>Якунланиш вакти</p>
              <p className="font-bold text-[14px] text-[#242424]">12/10/2021</p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p>Обуна нархи</p>
              <p className="font-bold text-[14px] text-[#3f51b5]">12 000 сум</p>
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-[#3f51b5] text-white py-[7px] rounded-[14px]  hover:bg-blue-700 transition"
          >
            Обуна булиш
          </button>
        </div>
      </div>

    </div>
  )
}

export default Subscribe
