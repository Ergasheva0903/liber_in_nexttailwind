import { Ruknlar } from "@/app/_components/ruknlar";
import Image from "next/image";
import { NewAdds } from "./_components/new-adds";
import Security from "../../public/images/security";
import Delivery from "../../public/images/delivery";
import Quality from "../../public/images/quality";
import Top from "../../public/images/top";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-4">
        <div className="flex gap-[20px] py-[30px] pl-[16px] pr-[26px] items-center">
          <Security />
          <div >
            <h3 className="font-bold text-[15px] leading-[120%] text-[#11142d] mb-[7px]">Тезкор етказиш</h3>
            <p className="text-[#aaa] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div className="flex gap-[20px] py-[30px] pl-[16px] pr-[26px]">
          <Delivery />
          <div >
            <h3 className="font-bold text-[15px] leading-[120%] text-[#11142d] mb-[7px]">Тўлов химояси</h3>
            <p className="text-[#aaa] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div className="flex gap-[20px] py-[30px] pl-[16px] pr-[26px]">
          <Quality />
          <div >
            <h3 className="font-bold text-[15px] leading-[120%] text-[#11142d] mb-[7px]">Юқори сифат</h3>
            <p className="text-[#aaa] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
        <div className="flex gap-[20px] py-[30px] pl-[16px] pr-[26px]">
          <Top />
          <div >
            <h3 className="font-bold text-[15px] leading-[120%] text-[#11142d] mb-[7px]">Энг сара китоблар</h3>
            <p className="text-[#aaa] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
          </div>
        </div>
      </div>
      <div className='pt-[40px]'>
        <h1 className='font-semibold text-[32px] leading-[125%] text-[#242424] mb-[32px]'>Рукнлар</h1>
        <Ruknlar />
      </div>
      <div className='pt-[64px]'>
        <h1 className='font-semibold text-[32px] leading-[125%] text-[#242424] mb-[32px]'>Янги қўшилганлар</h1>
        <NewAdds />
      </div>
      <div className='pt-[64px] pb-[93px]'>
        <h1 className='font-semibold text-[32px] leading-[125%] text-[#242424] mb-[32px]'>Аудио китоблар</h1>
        <NewAdds />
      </div>
    </div>
  );
}
