import { Cormorant_Garamond } from 'next/font/google'

const inter = Cormorant_Garamond({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
  return (
      <div className={`${inter.className} h-screen bg-[url('/design_background_mobile.png')] md:bg-[url('/design_background.png')] bg-cover bg-center text-black`} >
          <div className='flex flex-col w-full h-full justify-between items-center'>
              <div className='flex flex-col w-fit items-center bg-gray-300/35 rounded-[10px] px-10 py-4 my-4'>
                  <div className='flex text-[2.2em] lg:text-7xl'>LDK INTERIORS</div>
                  <div className='flex text-[1.5em] lg:text-5xl'>Lois Koval</div>
                  <div className='flex text-[1em] lg:text-xl pt-2'>OWNER / DESIGNER</div>
              </div>
              <div className='flex flex-col w-full py-5 items-center text-[20px] bg-gray-300/60 rounded-[10px]'>
                  <div className='flex flex-col mb-3 border-b-[0.5px] border-black pb-3'>
                      <div className='flex flex-col items-center'>
                          <div className='text-[1em] lg:text-xl'>INTERIOR DESIGN SERVICES</div>
                          <div className='text-[0.7em] lg:text-xl'>Consultation / Floor Plans and Furnishings / Remodeling</div>
                      </div>
                  </div>
                  <div className='text-[1em] lg:text-xl'>ldkinteriors@gmail.com</div>
                  <div className='flex pb-3'>
                      <div className='translate-y-[0.1em] pr-1'>C</div>
                      <div>+1 818 515 8551</div>
                  </div>
              </div>
          </div>
      </div>
  );
}
