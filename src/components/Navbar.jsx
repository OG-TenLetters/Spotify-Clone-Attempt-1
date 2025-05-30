import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

  return (
    <>
     <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={() => navigate(-1)} className='hover:bg-neutral-950 hover:scale-110 w-8 hover:active:bg-white hover:active:scale-100 transition-all  bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={() =>navigate(1)} className='hover:bg-neutral-950 hover:scale-110 w-8 hover:active:bg-white hover:active:scale-100 transition-all  bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='hover:bg-neutral-300 hover:-translate-y-0.5 transition-all duration-150 bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-not-allowed'>Explore Premium</p>
            <p className='hover:bg-neutral-900 hover:-translate-y-0.5 transition-all duration-150 bg-black py-1 px-3 rounded-2xl text-[15px] cursor-not-allowed'>Install App!</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-not-allowed'>J</p>
        </div>
     </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='hover:bg-neutral-300 hover:-translate-y-0.5 transition-all duration-150 bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='hover:bg-neutral-900 hover:-translate-y-0.5 transition-all duration-150 bg-black px-4 py-1 rounded-2xl cursor-not-allowed'>Music</p>
            <p className='hover:bg-neutral-900 hover:-translate-y-0.5 transition-all duration-150 bg-black px-4 py-1 rounded-2xl cursor-not-allowed'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar