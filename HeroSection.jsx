import React from 'react'
import { ArrowRight, Calendar1Icon } from 'lucide-react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
    const navigate  = useNavigate()
  return (
    <div 
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/14310465.jpg")] bg-cover bg-center h-screen'
    >
        <img src="ntr arts.jpg" alt="ntr arts" className='max-h-11 lg:h-11 mt-20'/>
      
      <h1 className='text-5xl md:text-[70px] md:leading-[70px] font-semibold max-w-[1100px]'>
        Devara <br/> The Red Sea
      </h1>

      <div className='flex items-center gap-4 text-gray-300'>
         <span>Action | Adventure | Sea Backdrop</span>
         <div className='flex items-center gap-1'>
            <Calendar1Icon className='w-5 h-5' /> 2024
         </div>
         <div className='flex items-center gap-1'>
            <Calendar1Icon className='w-5 h-5' /> 2h 54m
         </div>
      </div>
      <p className='max-w-md text-gray-300'>Devara is a high-octane action drama about a fierce leader who rises to protect his people against ruthless enemies, blending emotion, power, and revenge in a coastal backdrop.</p>
      <button onClick={()=>navigate('/movies')} className='flexitems-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className='w-5 h-5' />
      </button>
    </div>
  )
}

export default HeroSection
