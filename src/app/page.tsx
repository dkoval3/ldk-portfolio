import { Cormorant_Garamond } from 'next/font/google'
import Image from "next/image";

const inter = Cormorant_Garamond({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
  return (
      <div className={`${inter.className} flex text-black flex-col w-full h-full`} >
          <div>
              <Image
                  className='-z-20'
                  src='/images/design_background.png'
                  alt='Example Image'
                  fill={true}
              />
          </div>
          <div className='flex flex-col w-full h-full justify-between items-center'>
              <div className='flex flex-col w-fit items-center bg-gray-300/35 rounded-[10px] px-10 mt-4'>
                  <div className='flex text-[80px]'>LDK INTERIORS</div>
                  <div className='flex text-[50px] translate-y-[-30px]'>Lois Koval</div>
                  <div className='flex text-[20px] translate-y-[-30px]'>OWNER / DESIGNER</div>
              </div>
              <div className='flex flex-col w-full py-5 items-center text-[20px] bg-gray-300/60 rounded-[10px]'>
                  <div className='flex flex-col mb-3 border-b-[0.5px] border-black pb-3'>
                      <div className='flex flex-col items-center'>
                          <div>INTERIOR DESIGN SERVICES</div>
                          <div>Consultation / Floor Plans and Furnishings / Remodeling</div>
                      </div>
                  </div>
                  <div>ldkinteriors@gmail.com</div>
                  <div className='flex'>
                      <div className='text-[16px] translate-y-[5px] pr-[5px]'>C</div>
                      <div>+1 818 515 8551</div>
                  </div>
              </div>
          </div>
      </div>
  );
}
